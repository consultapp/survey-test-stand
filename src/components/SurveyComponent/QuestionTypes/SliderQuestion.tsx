import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import { useQuestion } from '@/context/SurveyContext/hooks'
import { useSurveyContextDispatch } from '@/context/SurveyContext'
import { VariantsType } from '@/fixtures/variantsType'
import { useCallback } from 'react'

type Props = { id: string }

export const SliderQuestion = ({ id }: Props) => {
  const question = useQuestion(id)
  const dispatch = useSurveyContextDispatch()

  const handleChange = useCallback(
    (_: Event, value: number | number[]) => {
      dispatch({
        type: `set${VariantsType.number}Value`,
        payload: { id, value },
      })
    },
    [dispatch, id]
  )

  if (!question) return

  const variant = (question.variants as ISliderVariant[])[0]
  const labels = new Array(variant.to - variant.from + 1)
    .fill(null)
    .map((_, i) => ({
      label: (variant.from + i * variant.step).toString(),
      value: variant.from + i * variant.step,
    }))

  variant.labels.forEach((item) => {
    const index = labels.findIndex((l) => l.value === item.value)
    labels[index] = item
  })

  return (
    <Box sx={{}}>
      <Slider
        sx={{
          color: 'black',
          fontSize: '1.7rem',
        }}
        value={variant.value}
        step={variant.step}
        valueLabelDisplay="off"
        marks={labels}
        min={variant.from}
        max={variant.to}
        onChange={handleChange}
      />
    </Box>
  )
}
