import { createTheme } from '@mantine/core'
import { generateColors } from '@mantine/colors-generator'

console.log('generateColors(),', generateColors('#6baad8'))

// const elmaColors = [
//   '#062543',
//   '#0d4a75',
//   '#1e6599',
//   '#367eb2',
//   '#6baad8',
//   '#6bb1e2',
//   '#66aee1',
//   '#63ace0',
//   '#030a0f',
//   '#020508',
//   '#6aa6d2',
//   '#f0f7fb',
//   'rgba(30, 101, 153, 0.5)',
//   'rgba(30, 101, 153, 0.25)',
//   'rgba(107, 170, 216, 0.2)',
//   '#6baad8',
// ] as const

export const theme = createTheme({
  fontFamily: 'Montserrat, sans-serif',
  defaultRadius: 'md',
  scale: 1.6,
  primaryColor: 'elma-colors',
  colors: {
    'elma-colors': generateColors('#062543'),
  },
})

console.log('theme', theme)
