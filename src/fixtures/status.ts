export const Status = {
  idle: 'idle',
  empty: 'empty',
  error: 'error',
  approved: 'approved',
}

export type TStatus = keyof typeof Status
