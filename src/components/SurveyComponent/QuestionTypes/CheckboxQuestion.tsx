import { useSurveyContextDispatch } from '@/context/SurveyContext'
import { useQuestion } from '@/context/SurveyContext/hooks'
import { VariantsType } from '@/fixtures/variantsType'
import { useCallback, useEffect, useState } from 'react'
import { Checkbox, Grid, Group, Text } from '@mantine/core'
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
      return (checked: boolean) => {
        dispatch({
          type: VariantsType.checkbox,
          payload: {
            id,
            value: checked,
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
    <Grid
      gutter="md"
      style={{
        overflowWrap: 'break-word',
        wordBreak: 'break-all',
        alignItems: 'stretch',
      }}
    >
      {variants.map(({ label, value }, index) => (
        <Grid.Col key={label} span={3}>
          <Checkbox.Card
            radius="md"
            value={label}
            key={label}
            checked={value}
            onChange={handleChange(index)}
            p="sm"
            h="100%"
            bg={value ? 'var(--mantine-primary-color-light)' : 'white'}
            style={{
              display: 'flex',
            }}
          >
            <Group wrap="nowrap" align="flex-start">
              <Checkbox.Indicator />
              <Text>{label}</Text>
            </Group>
          </Checkbox.Card>
        </Grid.Col>
      ))}
    </Grid>
  )
}

export { CheckboxQuestion }
