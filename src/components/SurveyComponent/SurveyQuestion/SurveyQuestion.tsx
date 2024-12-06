import Box from '@mui/material/Box'
import { useQuestion } from '@/context/SurveyContext/hooks'
import { VariantsType } from '@/fixtures/variantsType'
import { SliderQuestion } from '../QuestionTypes/SliderQuestion'
import { NumberQuestion } from '../QuestionTypes/NumberQuestion'
import { CheckboxQuestion } from '../QuestionTypes/CheckboxQuestion'
import { RadioQuestion } from '../QuestionTypes/RadioQuestion'

type Props = { id: string }

const QuestionTypes: Record<string, typeof SliderQuestion> = {
  [VariantsType.slider]: SliderQuestion,
  [VariantsType.number]: NumberQuestion,
  [VariantsType.checkbox]: CheckboxQuestion,
  [VariantsType.radio]: RadioQuestion,
}

export const SurveyQuestion = ({ id }: Props) => {
  const question = useQuestion(id)

  if (!question) return

  const { name, helper_text, type } = question
  const QuestionComponent = QuestionTypes[type]

  return (
    <Box
      component="section"
      sx={{
        py: 2,
        px: 6,
        border: '2px dotted black',
        borderRadius: '1rem',
      }}
    >
      {name && <h3>{name}</h3>}
      {helper_text && <p>{helper_text}</p>}
      {QuestionTypes[type] && <QuestionComponent id={id} />}
    </Box>
  )
}
