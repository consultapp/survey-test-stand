import { useSurveyContextDispatch } from '@/context/SurveyContext'
import { useQuestion } from '@/context/SurveyContext/hooks'
import { VariantsType } from '@/fixtures/variantsType'
import { useCallback, useEffect, useState } from 'react'
import { Radio, Stack } from '@mantine/core'
import {
  useStatusById,
  useStatusContextDispatch,
} from '@/context/StatusContext/hooks'
import { Status } from '@/fixtures/status'

type Props = { id: string }

const updateStatus = (
  question: IQuestion,
  dispatch: ReturnType<typeof useStatusContextDispatch>
) => {
  if (testIsApproved(question)) {
    dispatch({ type: Status.approved, payload: question.id })
  } else {
    dispatch({ type: Status.empty, payload: question.id })
  }
}

const testIsApproved = (question: IQuestion | undefined) =>
  question &&
  (question.variants as ICheckVariant[]).reduce(
    (acc, item) => acc || Boolean(item.value),
    false
  )

const RadioQuestion = ({ id }: Props) => {
  const question = useQuestion(id)
  const dispatch = useSurveyContextDispatch()
  const status = useStatusById(id)
  const statusDispatch = useStatusContextDispatch()
  const [idle, setIdle] = useState(status === Status.idle)

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
  }, [idle, isApproved, question, status, statusDispatch])

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
