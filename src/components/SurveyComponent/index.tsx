import { SurveyProvider } from '@/context/SurveyContext/SurveyContext'
import { SurveyQuestions } from './SurveyQuestions/SurveyQuestions'

export const SurveyContainer = () => {
  return (
    <SurveyProvider>
      <SurveyQuestions />
    </SurveyProvider>
  )
}
