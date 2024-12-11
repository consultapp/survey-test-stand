import React from '@/react/react'
import { SurveyContext, SurveyContextDispatch, initialSurveyData } from '.'
import { reducer } from './reducer'

type Props = { questions: IQuestions; children: React.ReactElement }

export const SurveyProvider = ({ children, questions }: Props) => {
  const [state, dispatch] = React.useReducer(
    reducer,
    questions ?? initialSurveyData
  )

  return (
    <SurveyContextDispatch.Provider value={dispatch}>
      <SurveyContext.Provider value={state}>{children}</SurveyContext.Provider>
    </SurveyContextDispatch.Provider>
  )
}
