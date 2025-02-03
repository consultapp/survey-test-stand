import { useSurveyContextDispatch } from '@/context/SurveyContext'
import { useQuestion } from '@/context/SurveyContext/hooks'
import { VariantsType } from '@/fixtures/variantsType'
import { ChangeEventHandler, useCallback, useEffect, useState } from 'react'
import { Textarea } from '@mantine/core'
import {
  useStatusById,
  useStatusContextDispatch,
  useUpdateStatus,
} from '@/context/StatusContext/hooks'
import { Status } from '@/fixtures/status'
import { testIsApproved } from '@/context/StatusContext/functions'

type Props = { id: string }

const TextQuestion = ({ id }: Props) => {
  const question = useQuestion(id)
  const dispatch = useSurveyContextDispatch()
  const status = useStatusById(id)
  const statusDispatch = useStatusContextDispatch()
  const [idle, setIdle] = useState(status === Status.idle)
  const updateStatus = useUpdateStatus()

  const isApproved = testIsApproved(question)

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = useCallback(
    ({ target }) => {
      dispatch({
        type: `set${VariantsType.text}Value`,
        payload: {
          id,
          value: target.value,
        },
      })
      if (idle) setIdle(false)
    },
    [dispatch, id, idle]
  )

  useEffect(() => {
    if (question && !idle) updateStatus(question, statusDispatch)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isApproved, idle])

  if (!question) return
  const { text } = (question.variants as ITextVariant[])[0]

  return (
    <Textarea
      placeholder="Текст ответа"
      autosize
      minRows={2}
      maxRows={10}
      value={text}
      onChange={handleChange}
    />
  )
}

export { TextQuestion }
