import { useMemo } from 'react'
import { useSurveyContext } from '.'
import { isQuestionVisible } from './utils'

export function useQuestion(id: ID): IQuestion | undefined {
  const ctx = useSurveyContext()
  return useMemo(() => ctx.find((item) => item.id === id), [ctx, id])
}

export function useQuestionVariants(id: ID): IQuestion['variants'] | undefined {
  return useQuestion(id)?.variants
}

export function useQuestionVisibilityFilter(
  id: ID
): VisibilityFilter | undefined {
  return useQuestion(id)?.visibilityFilter
}

export const useIsQuestionVisible = (questionId: string): boolean => {
  const questionFilter = useQuestionVisibilityFilter(questionId)
  const parentVariants = useQuestionVariants(questionFilter?.parentId ?? '')
  const parentFilter = useQuestionVisibilityFilter(
    questionFilter?.parentId ?? ''
  )
  const parentParentVariants = useQuestionVariants(parentFilter?.parentId ?? '')

  return (
    isQuestionVisible(questionFilter, parentVariants) &&
    isQuestionVisible(parentFilter, parentParentVariants)
  )
}
