import React, { useReducer } from 'react'
import { ErrorContext, ErrorContextDispatch } from '.'
import { reducer } from './reducer'

type Props = { errors: IError; children: React.ReactElement }

export const ErrorProvider = ({ children, errors }: Props) => {
  const [state, dispatch] = useReducer(reducer, errors ?? {})

  return (
    <ErrorContextDispatch.Provider value={dispatch}>
      <ErrorContext.Provider value={state}>{children}</ErrorContext.Provider>
    </ErrorContextDispatch.Provider>
  )
}
