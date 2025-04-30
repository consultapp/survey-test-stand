import { createContext } from 'react'

export const TimerContext = createContext<ITimer | undefined>({
  time: 0,
  description: 'Тестовое описание для таймера. Время выполнения - 10 мин',
  saveCallback: () => {},
})
