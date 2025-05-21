import { VariantsType } from '@/fixtures/variantsType'

function getPositionById(id: ID, state: IQuestions): number {
  return state.findIndex((item) => item.id === id)
}

export function reducer(
  state: IQuestions,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  { type, payload }: { type: string; payload?: any }
) {
  const position = getPositionById(payload?.id || 0, state)
  if (position < 0) console.error('Не найден id вопроса, ошибка сохранения.')

  switch (type) {
    case VariantsType.slider: {
      const vars = state[position]?.variants as ISliderVariant[]
      vars[0].value = Number(payload.value ?? 0)
      break
    }

    case VariantsType.number: {
      const vars = state[position]?.variants as INumberVariant[]
      const currentIndex = payload.index ?? 0
      vars[currentIndex].value = Number(payload.value ?? 0)
      break
    }

    case VariantsType.checkbox: {
      const vars = state[position]?.variants as ICheckVariant[]
      const currentIndex = payload.index ?? 0
      const isExclusive = vars[currentIndex].isExclusive ?? false
      if (isExclusive) {
        vars.forEach((_, i) => {
          vars[i].value = false
        })
      } else {
        vars.forEach((_, i) => {
          if (vars[i].isExclusive) vars[i].value = false
        })
      }

      vars[currentIndex].value = Boolean(payload.value ?? false)
      break
    }

    case VariantsType.radio: {
      const vars = state[position]?.variants as IRadioVariant[]

      vars.forEach((_, i) => {
        vars[i].value = false
      })
      vars[vars.findIndex((v) => v.label === payload.value)].value = true
      break
    }

    case VariantsType.text: {
      const vars = state[position]?.variants as ITextVariant[]
      vars[0].text = payload.value
      break
    }

    default:
      console.error('Неопределенное событие')
  }

  return [...state]
}
