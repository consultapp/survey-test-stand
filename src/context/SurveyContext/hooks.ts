import { useMemo } from 'react'
import { useSurveyContext } from '.'

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

export const useVisibilityFilter = (questionId: string): boolean => {
  const questionVisibilityFilter = useQuestionVisibilityFilter(questionId)
  const parentQuestionVariants = useQuestionVariants(
    questionVisibilityFilter?.parentId ?? ''
  )
  const parentVariant = parentQuestionVariants?.[0]
  const parentValue =
    parentVariant && 'value' in parentVariant ? parentVariant.value : undefined

  return useMemo(() => {
    if (!questionVisibilityFilter) return true

    const filter = questionVisibilityFilter

    if ('range' in filter) {
      const value = Number(parentValue)
      return value >= filter.range.from && value <= filter.range.to
    }

    if ('matches' in filter) {
      const value = String(parentValue)
      return filter.matches.includes(value)
    }

    return false
  }, [questionVisibilityFilter, parentValue])
}
