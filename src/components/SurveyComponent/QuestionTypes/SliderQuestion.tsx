import { useQuestion } from '@/context/SurveyContext/hooks'
import { useSurveyContextDispatch } from '@/context/SurveyContext'
import { VariantsType } from '@/fixtures/variantsType'
import { useCallback } from 'react'
import { Slider, Stack } from '@mantine/core'

type Props = { id: string }

export const SliderQuestion = ({ id }: Props) => {
  const question = useQuestion(id)
  const dispatch = useSurveyContextDispatch()

  const handleChange = useCallback(
    (value: number) => {
      dispatch({
        type: `set${VariantsType.number}Value`,
        payload: { id, value },
      })
    },
    [dispatch, id]
  )

  if (!question) return

  const variant = (question.variants as ISliderVariant[])[0]
  const labels =
    variant.to - variant.from > 10
      ? variant.labels
      : new Array(variant.to - variant.from + 1).fill(null).map((_, i) => ({
          label: (variant.from + i * variant.step).toString(),
          value: variant.from + i * variant.step,
        }))

  variant.labels.forEach((item) => {
    const index = labels.findIndex((l) => l.value === item.value)
    labels[index] = item
  })

  return (
    <Stack m="md">
      <Slider
        value={variant.value}
        step={variant.step}
        marks={labels}
        min={variant.from}
        max={variant.to}
        onChange={handleChange}
      />
    </Stack>
  )
}
