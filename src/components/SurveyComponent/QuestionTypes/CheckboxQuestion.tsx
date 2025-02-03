import { useSurveyContextDispatch } from '@/context/SurveyContext'
import { useQuestion } from '@/context/SurveyContext/hooks'
import { VariantsType } from '@/fixtures/variantsType'
import { useCallback, useEffect, useState } from 'react'
import { Checkbox, Stack } from '@mantine/core'
import { Status } from '@/fixtures/status'
import {
  useStatusById,
  useStatusContextDispatch,
  useUpdateStatus,
} from '@/context/StatusContext/hooks'
import { testIsApproved } from '@/context/StatusContext/functions'

type Props = { id: string }

const CheckboxQuestion = ({ id }: Props) => {
  const question = useQuestion(id)
  const dispatch = useSurveyContextDispatch()
  const status = useStatusById(id)
  const statusDispatch = useStatusContextDispatch()
  const [idle, setIdle] = useState(status === Status.idle)
  const updateStatus = useUpdateStatus()

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
        if (idle) setIdle(false)
      }
    },
    [dispatch, id, idle]
  )

  useEffect(() => {
    if (question && !idle) updateStatus(question, statusDispatch)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isApproved, idle])

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
