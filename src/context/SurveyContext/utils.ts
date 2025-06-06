type VariantValue = number | string[] | undefined | null

export function isQuestionVisible(
  filter: VisibilityFilter | undefined,
  variants:
    | (
        | ISliderVariant
        | INumberVariant
        | ICheckVariant
        | IRadioVariant
        | ITextVariant
      )[]
    | undefined
): boolean {
  if (!filter) return true

  const value = getVariantValue(variants, filter.type)

  if (filter.type === 'range') {
    const numValue = Number(value)
    if (isNaN(numValue)) return false

    const { range } = filter
    return numValue >= range.from && numValue <= range.to
  }

  if (filter.type === 'matches') {
    if (Array.isArray(value))
      return value.reduce(
        (acc, curr) => acc || filter.matches.includes(curr),
        false
      )

    return filter.matches.includes(String(value))
  }

  return false
}

export function getVariantValue(
  variants:
    | (
        | ISliderVariant
        | INumberVariant
        | ICheckVariant
        | IRadioVariant
        | ITextVariant
      )[]
    | undefined,
  type: VisibilityFilterType
): VariantValue {
  if (!variants || variants.length === 0) return null

  // Для range всегда берем только первый вариант
  if (type === 'range') {
    const firstVariant = variants[0]
    if (
      'type' in firstVariant &&
      firstVariant.type === 'slider' &&
      'value' in firstVariant
    ) {
      return firstVariant.value
    }
    return null
  }

  // Для matches проверяем все варианты
  if (type === 'matches') {
    return (variants as ICheckVariant[] | IRadioVariant[])
      .filter(
        (v) =>
          v.value && v.label && (v.type === 'checkbox' || v.type === 'radio')
      )
      .map((v) => v.id)
  }

  return null
}
