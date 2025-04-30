import { useMemo } from 'react'
import { useSurveyContext } from '.'

export function useQuestion(id: ID): IQuestion | undefined {
  const ctx = useSurveyContext()
  return useMemo(() => ctx.find((item) => item.id === id), [ctx, id])
}
