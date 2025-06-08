import { useSurveyContextDispatch } from '@/context/SurveyContext'
import { useQuestion } from '@/context/SurveyContext/hooks'
import { VariantsType } from '@/fixtures/variantsType'
import { useCallback } from 'react'
import { Grid, Radio } from '@mantine/core'
import { RadioVariant } from '../VariantComponents/RadioVariant'
import { RadioVariantWithInput } from '../VariantComponents/RadioVariantWithInput'

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

  const handleLabelChange = useCallback(
    (index: number, label: string) => {
      dispatch({
        type: VariantsType.radio,
        payload: {
          id,
          index,
          label,
        },
      })
    },
    [dispatch, id]
  )

  if (!question || question.type !== 'radio') return
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
        {variants.map((variant, index) => (
          <Grid.Col key={index} span={3}>
            {variant.isChangeable ? (
              <RadioVariantWithInput
                label={variant.label}
                checked={checked}
                onLabelChange={(label) => handleLabelChange(index, label)}
              />
            ) : (
              <RadioVariant label={variant.label} checked={checked} />
            )}
          </Grid.Col>
        ))}
      </Grid>
    </Radio.Group>
  )
}

export { RadioQuestion }
