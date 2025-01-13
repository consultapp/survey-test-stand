import { useSurveyContextDispatch } from '@/context/SurveyContext'
import { useQuestion } from '@/context/SurveyContext/hooks'
import { VariantsType } from '@/fixtures/variantsType'
import { useCallback, useEffect, useRef } from 'react'
import { Checkbox, Stack } from '@mantine/core'
import { Status } from '@/fixtures/status'
import {
  useStatusById,
  useStatusContextDispatch,
} from '@/context/StatusContext/hooks'

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

const CheckboxQuestion = ({ id }: Props) => {
  const question = useQuestion(id)
  const dispatch = useSurveyContextDispatch()
  const status = useStatusById(id)
  const statusDispatch = useStatusContextDispatch()
  const idle = useRef(status === Status.idle)

  const isApproved = testIsApproved(question)

  const handleChange = useCallback(
    (index: number) => {
      return ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
          type: `set${VariantsType.checkbox}Value`,
          payload: {
            id,
            value: target.checked,
            index,
          },
        })
        idle.current = false
      }
    },
    [dispatch, id]
  )

  useEffect(() => {
    if (question && !idle.current) updateStatus(question, statusDispatch)
  }, [isApproved, question, status, statusDispatch])

  if (!question) return
  const variants = question.variants as ICheckVariant[]

  return (
    <Stack gap="1rem">
      {variants.map(({ label, value }, i) => (
        <Checkbox
          checked={!!value}
          onChange={handleChange(i)}
          label={label}
          key={label}
        />
      ))}
    </Stack>
  )
}

export { CheckboxQuestion }
