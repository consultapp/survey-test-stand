import { SurveyProvider } from '@/context/SurveyContext/SurveyContext'
import { SurveyQuestions } from './SurveyQuestions/SurveyQuestions'

export const SurveyComponent = ({ questions }: { questions: IQuestions }) => {
  return (
    <SurveyProvider questions={questions}>
      <SurveyQuestions />
    </SurveyProvider>
  )
}
