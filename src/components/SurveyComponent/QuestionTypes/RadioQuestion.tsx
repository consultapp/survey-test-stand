import { useSurveyContextDispatch } from '@/context/SurveyContext'
import { useQuestion } from '@/context/SurveyContext/hooks'
import { VariantsType } from '@/fixtures/variantsType'
import { useCallback } from 'react'
import { Grid, Radio, Group, Text } from '@mantine/core'

type Props = { id: string; setIdleCallback: () => void }

const RadioQuestion = ({ id, setIdleCallback }: Props) => {
  const question = useQuestion(id)
  const dispatch = useSurveyContextDispatch()

  const handleChange = useCallback(
    (value: string) => {
      dispatch({
        type: VariantsType.radio,
        payload: {
          id,
          value,
        },
      })
      setIdleCallback()
    },
    [dispatch, id, setIdleCallback]
  )

  if (!question) return
  const variants = question.variants as IRadioVariant[]
  const checked = variants.find((item) => item.value === true)?.label ?? ''

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
