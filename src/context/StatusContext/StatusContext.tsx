import React, { useReducer } from 'react'
import { StatusContext, StatusContextDispatch, TStatusContext } from '.'
import { reducer } from './reducer'

type Props = { statuses: TStatusContext; children: React.ReactElement }

export const StatusProvider = ({ children, statuses }: Props) => {
  const [state, dispatch] = useReducer(reducer, statuses ?? {})

  return (
    <StatusContextDispatch.Provider value={dispatch}>
      <StatusContext.Provider value={state}>{children}</StatusContext.Provider>
    </StatusContextDispatch.Provider>
  )
}
