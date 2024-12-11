import { ElmaContext } from '.'
import React from '@/react/react'

const { useContext } = React
import React from '@/react/react'

const { useContext } = React

export function useElmaContext() {
  return useContext(ElmaContext)
}

export function useElmaData(): IQuestions {
export function useElmaData(): IQuestions {
  return useElmaContext().data ?? []
}

export function useElmaCallback() {
  return (
    useElmaContext().changeHandler ??
    (() => {
      console.error('Elma Callback unknown')
    })
  )
}

export function useUpdateElmaDataQuestions() {
  const data = useElmaData()
  const cb = useElmaCallback()

  return (q: IQuestions) => {
    data.forEach((_, i) => (data[i] = q[i]))
    cb(q)
    data.forEach((_, i) => (data[i] = q[i]))
    cb(q)
  }
}
