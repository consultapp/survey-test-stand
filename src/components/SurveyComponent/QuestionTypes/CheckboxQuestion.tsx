import { useSurveyContextDispatch } from '@/context/SurveyContext'
import { useQuestion } from '@/context/SurveyContext/hooks'
import { VariantsType } from '@/fixtures/variantsType'
import { useCallback } from 'react'
import { Grid } from '@mantine/core'
import { CheckboxVariant } from '../VariantComponents/CheckboxVariant'

type Props = { id: string; setIdleCallback: () => void }

const CheckboxQuestion = ({ id, setIdleCallback }: Props) => {
  const question = useQuestion(id)
  const dispatch = useSurveyContextDispatch()

  const handleChange = useCallback(
    (index: number) => (checked: boolean) => {
      dispatch({
        type: VariantsType.checkbox,
        payload: {
          id,
          value: checked,
          index,
        },
      })
      setIdleCallback()
    },
    [dispatch, id, setIdleCallback]
  )

  const handleLabelChange = useCallback(
    (index: number) => (label: string) => {
      dispatch({
        type: VariantsType.checkbox,
        payload: {
          id,
          label,
          value: true,
          index,
        },
      })
      setIdleCallback()
    },
    [dispatch, id, setIdleCallback]
  )

  if (!question || question.type !== 'checkbox') return

  return (
    <Grid
      gutter="md"
      style={{
        overflowWrap: 'break-word',
        wordBreak: 'break-all',
        alignItems: 'stretch',
      }}
    >
      {question.variants.map(({ label, value, isChangeable }, index) => (
        <Grid.Col key={label} span={3}>
          <CheckboxVariant
            label={label}
            value={value ?? false}
            onChange={handleChange(index)}
            isChangeable={isChangeable}
            onLabelChange={handleLabelChange(index)}
          />
        </Grid.Col>
      ))}
    </Grid>
  )
}

export { CheckboxQuestion }
