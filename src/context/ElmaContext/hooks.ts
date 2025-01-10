import { useContext } from 'react'
import { ElmaContext } from '.'

export function useElmaContext() {
  return useContext(ElmaContext)
}

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

export function useElmaSubmitCallback() {
  return (
    useElmaContext().submitHandler ??
    (() => {
      console.error('Elma SubmitHandler Callback unknown')
    })
  )
}

export function useUpdateElmaDataQuestions() {
  const data = useElmaData()
  const cb = useElmaCallback()

  return (q: IQuestions) => {
    data.forEach((_, i) => (data[i] = q[i]))
    cb(q)
  }
}
