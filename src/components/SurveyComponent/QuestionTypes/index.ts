import { VariantsType } from '@/fixtures/variantsType'
import { SliderQuestion } from '../QuestionTypes/SliderQuestion'
import { NumberQuestion } from '../QuestionTypes/NumberQuestion'
import { CheckboxQuestion } from '../QuestionTypes/CheckboxQuestion'
import { RadioQuestion } from '../QuestionTypes/RadioQuestion'
import { TextQuestion } from '../QuestionTypes/TextQuestion'

export const QuestionTypes: Record<
  keyof typeof VariantsType,
  SurveyQuestionElement
> = {
  [VariantsType.slider]: SliderQuestion,
  [VariantsType.number]: NumberQuestion,
  [VariantsType.checkbox]: CheckboxQuestion,
  [VariantsType.radio]: RadioQuestion,
  [VariantsType.text]: TextQuestion,
}
