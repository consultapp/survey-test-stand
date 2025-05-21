import { useSurveyContextDispatch } from '@/context/SurveyContext'
import { useQuestion } from '@/context/SurveyContext/hooks'
import { VariantsType } from '@/fixtures/variantsType'
import { useCallback, useEffect, useState } from 'react'
import { Grid, Radio, Group, Text } from '@mantine/core'
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
    (value: string) => {
      dispatch({
        type: VariantsType.radio,
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
  console.log('variants', variants)

  return (
    <Radio.Group value={checked} withAsterisk onChange={handleChange}>
      <Grid
        gutter="md"
        style={{
          overflowWrap: 'break-word',
          wordBreak: 'break-all',
          alignItems: 'stretch',
        }}
      >
        {variants.map(({ label }) => (
          <Grid.Col key={label} span={3}>
            <Radio.Card
              radius="md"
              value={label}
              p="sm"
              h="100%"
              bg={
                checked === label
                  ? 'var(--mantine-primary-color-light)'
                  : 'white'
              }
              style={{
                display: 'flex',
              }}
            >
              <Group wrap="nowrap" align="flex-start">
                <Radio.Indicator />
                <Text>{label}</Text>
              </Group>
            </Radio.Card>
          </Grid.Col>
        ))}
      </Grid>
    </Radio.Group>
  )
}

export { RadioQuestion }
