import { useContext } from 'react'
import { ErrorContext, ErrorContextDispatch } from '.'

export function useErrorContext() {
  return useContext(ErrorContext)
}
export function useErrorContextDispatch() {
  return useContext(ErrorContextDispatch)
}

export function useErrorById(id: ID): boolean {
  return useErrorContext()[id] ?? false
}
