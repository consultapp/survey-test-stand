import { createContext } from 'react'

export const ErrorContext = createContext<IError>({})

export const ErrorContextDispatch = createContext<
  React.Dispatch<{
    type: string
    payload: string
  }>
>(() => {})
