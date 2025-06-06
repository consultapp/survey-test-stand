import { useMemo } from 'react'
import { useSurveyContext } from '.'
import { checkVisibilityConditions, getVariantValue } from './utils'

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

  // нет родителя в списке вопросов - всегда скрыт
  if (!parentQuestion) return false

  const parentFilter = parentQuestion.visibilityFilter

  if (
    parentFilter &&
    !checkVisibilityConditions(
      parentFilter,
      getVariantValue(parentParentVariants, parentFilter.type)
    )
  )
    return false

  const testValue = getVariantValue(parentVariants, questionFilter.type)
  // Проверяем условия видимости текущего вопроса
  return checkVisibilityConditions(questionFilter, testValue)
}
