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
      const question = state[position]
      if (question?.type !== 'slider') break
      const vars = question.variants
      vars[0].value = Number(payload.value ?? 0)
      break
    }

    case VariantsType.number: {
      const question = state[position]
      if (question?.type !== 'number') break
      const vars = question.variants
      const currentIndex = payload.index ?? 0
      vars[currentIndex].value = Number(payload.value ?? 0)
      break
    }

    case VariantsType.checkbox: {
      const question = state[position]
      if (question?.type !== 'checkbox') break
      const vars = question.variants
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

      if (payload.label) {
        vars[currentIndex].label = payload.label
      }
      vars[currentIndex].value = Boolean(payload.value ?? false)
      break
    }

    case VariantsType.radio: {
      const question = state[position]
      if (question?.type !== 'radio') break
      const vars = question.variants

      vars.forEach((_, i) => {
        vars[i].value = false
      })

      if (payload.label && payload.index !== undefined) {
        vars[payload.index].label = payload.label
        vars[payload.index].value = Boolean(true)
        break
      }

      vars[vars.findIndex((v) => v.label === payload.value)].value = true

      break
    }

    case VariantsType.text: {
      const question = state[position]
      if (question?.type !== 'text') break
      const vars = question.variants
      vars[0].text = payload.value
      break
    }

    case 'clear': {
      const question = state[position]
      if (!question) break
      const vars = question.variants
      vars.forEach((_, i) => {
        if ('value' in vars[i]) vars[i].value = undefined
        if ('text' in vars[i]) vars[i].text = ''
      })
      break
    }

    default:
      console.error('Неопределенное событие')
  }

  console.log('state', state)

  return [...state]
}
