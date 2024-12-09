import { useContext } from 'react'
import { ElmaContext } from '.'

export function useElmaContext() {
  return useContext(ElmaContext)
}

export function useElmaData(): IBlocks {
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
    data.forEach((d) => {
      if (d.id === q.at(-1)?.block) d.questions = q
    })
    cb(data)
  }
}
