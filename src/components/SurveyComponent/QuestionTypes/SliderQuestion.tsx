import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import { useQuestion } from '@/context/SurveyContext/hooks'
import { useSurveyContextDispatch } from '@/context/SurveyContext'

function valuetext(value: number) {
  return `${value}`
}

type Props = { id: string }

export const SliderQuestion = ({ id }: Props) => {
  const question = useQuestion(id)
  const dispatch = useSurveyContextDispatch()

  const handleChange = (_: Event, newValue: number | number[]) => {
    console.log('newValue', newValue)
    dispatch({
      type: 'setSliderValue',
      payload: { id, value: newValue },
    })
  }

  if (!question) return

  const variants = (question.variants as ISliderVariant[])[0]

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        sx={{
          color: 'black',
        }}
        defaultValue={variants.value}
        getAriaValueText={valuetext}
        step={variants.step}
        valueLabelDisplay="auto"
        marks={variants.labels}
        min={variants.from}
        max={variants.to}
        onChange={handleChange}
      />
    </Box>
  )
}
