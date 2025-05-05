import { useSurveyContextDispatch } from '@/context/SurveyContext'
import { useQuestion } from '@/context/SurveyContext/hooks'
import { VariantsType } from '@/fixtures/variantsType'
import { useCallback, useEffect, useState } from 'react'
import { Checkbox, Grid } from '@mantine/core'
import { Status } from '@/fixtures/status'
import {
  useStatusById,
  useStatusContextDispatch,
  useUpdateStatus,
} from '@/context/StatusContext/hooks'
import { testIsApproved } from '@/context/StatusContext/functions'
import { VariantLabel } from '../VariantLabel/VariantLabel'

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
          type: VariantsType.checkbox,
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
    <Grid gutter="sm">
      {variants.map(({ label, value }, i) => (
        <Grid.Col key={label} span={2}>
          <Checkbox
            checked={Boolean(value)}
            onChange={handleChange(i)}
            label={<VariantLabel label={label} isChecked={Boolean(value)} />}
            styles={{
              input: {
                display: 'none', // Скрываем стандартный чекбокс
              },
              labelWrapper: {
                width: '100%',
              },
            }}
          />
        </Grid.Col>
      ))}
    </Grid>
  )
}

export { CheckboxQuestion }
