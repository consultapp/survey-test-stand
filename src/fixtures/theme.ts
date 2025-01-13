import { createTheme } from '@mantine/core'
import { generateColors } from '@mantine/colors-generator'
import { log } from '@/utils'

const ff = window
  .getComputedStyle(document.body, null)
  .getPropertyValue('font-family')

const baseColor = window
  .getComputedStyle(document.body, null)
  .getPropertyValue('--color-theme-900')

export const theme = createTheme({
  fontFamily: ff ? ff : '"SF Pro Display", Helvetica, Arial, sans-serif',
  defaultRadius: 'md',
  scale: 1.6,
  primaryColor: 'elma-colors',
  colors: {
    'elma-colors': generateColors(baseColor ? baseColor : '#062543'),
  },
})

log('theme', theme)
