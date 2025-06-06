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

  // Проверяем видимость родительского вопроса
  const parentQuestion = useQuestion(questionFilter?.parentId ?? '')
  const parentParentVariants = useQuestionVariants(
    parentQuestion?.visibilityFilter?.parentId ?? ''
  )
  // нет фильтра - всегда показываем
  if (!questionFilter) return true

  return (
    isQuestionVisible(questionFilter, parentVariants) &&
    isQuestionVisible(parentQuestion?.visibilityFilter, parentParentVariants)
  )
}
