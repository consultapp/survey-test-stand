import { useSurveyContextDispatch } from '@/context/SurveyContext'
import { useQuestion } from '@/context/SurveyContext/hooks'
import { VariantsType } from '@/fixtures/variantsType'
import { ChangeEventHandler, useCallback } from 'react'
import { Textarea } from '@mantine/core'
import { useStatusContextDispatch } from '@/context/StatusContext/hooks'
import { Status } from '@/fixtures/status'

type Props = { id: string }

const TextQuestion = ({ id }: Props) => {
  const question = useQuestion(id)
  const dispatch = useSurveyContextDispatch()
  const statusDispatch = useStatusContextDispatch()

  const checkStatus = useCallback(
    (value: string) => {
      if (value.trim()) {
        statusDispatch({ type: Status.approved, payload: id })
      } else {
        statusDispatch({ type: Status.empty, payload: id })
      }
    },
    [id, statusDispatch]
  )

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = useCallback(
    ({ target }) => {
      dispatch({
        type: `set${VariantsType.text}Value`,
        payload: {
          id,
          value: target.value,
        },
      })
      checkStatus(target.value)
    },
    [checkStatus, dispatch, id]
  )

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
