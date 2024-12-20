import { createTheme } from '@mantine/core'
import { generateColors } from '@mantine/colors-generator'

export const theme = createTheme({
  fontFamily:
    window
      .getComputedStyle(document.body, null)
      .getPropertyValue('font-family') ??
    '"SF Pro Display", Helvetica, Arial, sans-serif',
  defaultRadius: 'md',
  scale: 1.6,
  primaryColor: 'elma-colors',
  colors: {
    'elma-colors': generateColors(
      window
        .getComputedStyle(document.body, null)
        .getPropertyValue('--color-theme-900') ?? '#000000'
    ),
  },
})

console.log('theme', theme)
