import { createContext } from 'react'

export const ElmaContext = createContext<Omit<ElmaProps, 'root'>>({})
