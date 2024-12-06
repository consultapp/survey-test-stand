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
    case `set${VariantsType.slider}Value`: {
      const vars = state[position]?.variants as ISliderVariant[]
      vars[0].value = Number(payload.value ?? 0)

      return [...state]
    }

    case `set${VariantsType.number}Value`: {
      const vars = state[position]?.variants as INumberVariant[]
      const currentIndex = payload.index ?? 0
      vars[currentIndex].value = Number(payload.value ?? 0)

      return [...state]
    }

    case `set${VariantsType.checkbox}Value`: {
      const vars = state[position]?.variants as ICheckVariant[]
      const currentIndex = payload.index ?? 0
      vars[currentIndex].value = Boolean(payload.value ?? false)

      return [...state]
    }

    case `set${VariantsType.radio}Value`: {
      const vars = state[position]?.variants as IRadioVariant[]

      vars.forEach((_, i) => {
        vars[i].value = false
      })
      vars[vars.findIndex((v) => v.label === payload.value)].value = true

      return [...state]
    }

    case `set${VariantsType.text}Value`: {
      const vars = state[position]?.variants as ITextVariant[]
      vars[0].text = payload.value

      return [...state]
    }

    default:
      console.error('Неопределенное событие')
  }

  return state
}
