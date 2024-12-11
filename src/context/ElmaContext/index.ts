import React from '@/react/react'
const { createContext } = React

export const ElmaContext = createContext<Omit<ElmaProps, 'root'>>({})
