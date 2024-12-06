import { mockData } from '@/fixtures/mock'
import { createContext, useContext } from 'react'

declare global {
  interface Window {
    CONTEXT_DATA_CLASSNAME: string
    SURVEY_INITIAL_DATA: IQuestions
  }
}

export const initialSurveyData: IQuestions =
  window.SURVEY_INITIAL_DATA ?? mockData

export const SurveyContext = createContext<IQuestions>(initialSurveyData)

export const SurveyContextDispatch = createContext<
  React.Dispatch<{
    type: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload?: any
  }>
>(() => {})

export function useSurveyContext() {
  return useContext(SurveyContext)
}
export function useSurveyContextDispatch() {
  return useContext(SurveyContextDispatch)
}
