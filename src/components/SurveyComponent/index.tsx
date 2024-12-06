import { SurveyProvider } from '@/context/SurveyContext/SurveyContext'
import { SurveyQuestions } from './SurveyQuestions/SurveyQuestions'

export const SurveyContainer = () => {
  return (
    <SurveyProvider>
      <div>
        <h2>Заголовок 2</h2>
        <SurveyQuestions />
      </div>
    </SurveyProvider>
  )
}
