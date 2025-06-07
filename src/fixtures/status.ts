export const Status = {
  idle: 'idle',
  empty: 'empty',
  error: 'error',
  approved: 'approved',
  hidden: 'hidden',
  notRequired: 'notRequired',
}

export type TStatus = keyof typeof Status
