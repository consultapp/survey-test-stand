export function reducer(
  state: IError,
  { type, payload }: { type: string; payload: string }
) {
  switch (type) {
    case `setError`: {
      state[payload] = true
      break
    }

    case `resetError`: {
      state[payload] = false
      break
    }

    default:
      console.error('Неопределенное событие')
  }

  return { ...state }
}
