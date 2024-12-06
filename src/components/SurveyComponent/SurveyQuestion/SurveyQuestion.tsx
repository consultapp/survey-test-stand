import Box from '@mui/material/Box'
import { useQuestion } from '@/context/SurveyContext/hooks'
import { VariantsType } from '@/fixtures/variantsType'
import { SliderQuestion } from '../QuestionTypes/SliderQuestion'

type Props = { id: string }

export const SurveyQuestion = ({ id }: Props) => {
  const question = useQuestion(id)

  if (!question) return

  const { name, type } = question

  let component
  switch (type) {
    case VariantsType.slider:
      component = <SliderQuestion id={id} />
      break
  }

  return (
    <Box
      component="section"
      sx={{
        py: 2,
        px: 6,
        border: '1px solid black',
        borderRadius: '1rem',
      }}
    >
      <h3>{name}</h3>
      {component}
    </Box>
  )
}
