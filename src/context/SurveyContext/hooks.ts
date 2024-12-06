import { useSurveyContext } from '.'

export function useQuestion(id: ID): IQuestion | undefined {
  const ctx = useSurveyContext()
  return ctx.find((item) => item.id === id)
}
