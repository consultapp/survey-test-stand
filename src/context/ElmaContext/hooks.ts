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
