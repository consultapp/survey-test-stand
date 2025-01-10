import { TStatus } from '@/fixtures/status'
import { createContext } from 'react'

export type TStatusContext = Record<string, TStatus>

export const StatusContext = createContext<TStatusContext>({})

export const StatusContextDispatch = createContext<
  React.Dispatch<{
    type: string
    payload: string
  }>
>(() => {})
