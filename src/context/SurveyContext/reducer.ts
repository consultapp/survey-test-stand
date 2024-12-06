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
  console.log(payload, position)
  if (!position) new Error('Не найден id вопроса, ошибка сохранения.')

  switch (type) {
    case `set${VariantsType.slider}Value`: {
      const vars = state[position]?.variants as ISliderVariant[]
      if (vars[0]) {
        vars[0].value = Number(payload.value ?? 0)
      }
      state[position].variants = vars
      console.log('state', state)

      return [...state]
    }

    case `set${VariantsType.number}Value`: {
      const vars = state[position]?.variants as INumberVariant[]
      const currentIndex = payload.index ?? 0
      if (vars[currentIndex]) {
        vars[currentIndex].value = Number(payload.value ?? 0)
      }
      state[position].variants = vars
      console.log('state', state)

      return [...state]
    }

    default:
      break
  }

  return state
}
