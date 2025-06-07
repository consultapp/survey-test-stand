import { Status } from '@/fixtures/status'
import { TStatusContext } from '.'

export function reducer(
  state: TStatusContext,
  { type, payload }: { type: string; payload: string }
) {
  if (state[payload] === Status.notRequired) return { ...state }

  switch (type) {
    case Status.idle: {
      // @ts-expect-error Status??
      state[payload] = Status.idle
      break
    }

    case Status.empty: {
      // @ts-expect-error Status??
      state[payload] = Status.empty
      break
    }
    case Status.approved: {
      // @ts-expect-error Status??
      state[payload] = Status.approved
      break
    }
    case Status.error: {
      // @ts-expect-error Status??
      state[payload] = Status.error
      break
    }
    case Status.hidden: {
      // @ts-expect-error Status??
      state[payload] = Status.hidden
      break
    }
    case Status.notRequired: {
      // @ts-expect-error Status??
      state[payload] = Status.notRequired
      break
    }

    default:
      console.error('Status reducer: Неопределенное событие')
  }

  return { ...state }
}
