import { useContext } from 'react'
import { StatusContext, StatusContextDispatch } from '.'
import { TStatus } from '@/fixtures/status'

export function useStatusContext() {
  return useContext(StatusContext)
}
export function useStatusContextDispatch() {
  return useContext(StatusContextDispatch)
}

export function useStatusById(id: ID): TStatus {
  return useStatusContext()[id]
}
