import { useSurveyContextDispatch } from '@/context/SurveyContext'
import { useQuestion } from '@/context/SurveyContext/hooks'
import { VariantsType } from '@/fixtures/variantsType'
import { useCallback, useEffect, useState } from 'react'
import { Radio, Stack } from '@mantine/core'
import {
  useStatusById,
  useStatusContextDispatch,
  useUpdateStatus,
} from '@/context/StatusContext/hooks'
import { Status } from '@/fixtures/status'
import { testIsApproved } from '@/context/StatusContext/functions'

type Props = { id: string }

const RadioQuestion = ({ id }: Props) => {
  const question = useQuestion(id)
  const dispatch = useSurveyContextDispatch()
  const status = useStatusById(id)
  const statusDispatch = useStatusContextDispatch()
  const [idle, setIdle] = useState(status === Status.idle)
  const updateStatus = useUpdateStatus()

  const isApproved = testIsApproved(question)

  const handleChange = useCallback(
    (value: string | number) => {
      dispatch({
        type: `set${VariantsType.radio}Value`,
        payload: {
          id,
          value,
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
  const variants = question.variants as IRadioVariant[]
  const checked = variants.find((item) => item.value === true)?.label ?? ''
  return (
    <Radio.Group value={checked} withAsterisk onChange={handleChange}>
      <Stack gap="sm">
        {variants.map(({ label }) => (
          <Radio label={label} value={label} key={label} />
        ))}
      </Stack>
    </Radio.Group>
  )
}

export { RadioQuestion }
