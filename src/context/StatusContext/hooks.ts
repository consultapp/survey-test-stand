import { useContext } from 'react'
import { StatusContext, StatusContextDispatch } from '.'
import { Status, TStatus } from '@/fixtures/status'
import { testIsApproved } from './functions'

export function useStatusContext() {
  return useContext(StatusContext)
}
export function useStatusContextDispatch() {
  return useContext(StatusContextDispatch)
}

export function useStatusById(id: ID): TStatus {
  return useStatusContext()[id]
}

export function useUpdateStatus() {
  return (
    question: IQuestion,
    dispatch: ReturnType<typeof useStatusContextDispatch>
  ) => {
    if (testIsApproved(question)) {
      dispatch({ type: Status.approved, payload: question.id })
    } else {
      dispatch({ type: Status.empty, payload: question.id })
    }
  }
}
