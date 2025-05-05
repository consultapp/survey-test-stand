import { useContext } from 'react'
import { TimerContext } from '.'

export function useTimerContext() {
  return useContext(TimerContext) ?? {}
}

export function useHasTimer() {
  return Boolean(useContext(TimerContext))
}

export function useTimerData() {
  return useTimerContext().time ?? 0
}

export function useTimerDescription() {
  return useTimerContext().description ?? ''
}

export function useTimerSaveCallback() {
  return (
    useTimerContext().saveCallback ??
    (() => {
      console.error('Timer saveCallback unknown')
    })
  )
}
