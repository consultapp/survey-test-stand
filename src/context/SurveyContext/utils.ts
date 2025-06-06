export function checkVisibilityConditions(
  filter: VisibilityFilter,
  value: string | number | boolean | string[] | null
): boolean {
  if (filter.type === 'range') {
    const numValue = Number(value)
    if (isNaN(numValue)) return false

    const { range } = filter
    return numValue >= range.from && numValue <= range.to
  }

  if (filter.type === 'matches') {
    const strValue = String(value)
    return filter.matches.includes(strValue)
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
): string | string[] | null {
  if (!variants) return null

  if (type === 'range') {
    return String(
      variants?.[0] && 'value' in variants[0] ? variants[0].value : null
    )
  }
  console.log('matches', variants)

  if (type === 'matches') {
    if (variants.length > 0) {
      return variants.map((variant) => String(variant.value))
    }
    return String(
      variants?.[0] && 'value' in variants[0] ? variants[0].value : undefined
    )
  }

  console.log('getVariantValue: TYPE NOT FOUND')
  return null
}
