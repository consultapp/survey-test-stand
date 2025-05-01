import { Flex, Text } from '@mantine/core'
import { memo, useMemo } from 'react'

type Props = { label: string; isChecked: boolean }

export const VariantLabel = memo(({ label, isChecked }: Props) => {
  const style = useMemo(
    () => ({
      cursor: 'pointer',
      minHeight: '100px',
      padding: 16,
      border: `2px solid ${
        isChecked
          ? 'var(--mantine-primary-color-filled)'
          : 'var(--mantine-color-gray-4)'
      }`,
      borderRadius: '8px',
      backgroundColor: isChecked
        ? 'var(--mantine-primary-color-light)'
        : 'transparent',
      '&:hover': {
        backgroundColor: 'var(--mantine-color-gray-1)',
      },
      transition: 'all 0.3s ease',
      '&[dataChecked]': {
        borderWidth: '3px',
        transform: 'scale(0.98)',
      },
      '&:active': {
        transform: 'scale(0.96)',
      },
      // justifyContent: 'center',
      alignItems: 'center',
    }),
    [isChecked]
  )

  return (
    <Flex gap="xs" style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        style={{
          opacity: isChecked ? 1 : 0,
          transition: 'opacity 0.3s ease',
          color: 'var(--mantine-primary-color-filled)',
        }}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M5 12l5 5l10 -10" />
      </svg>

      <Text fw={500} size="md">
        {label}
      </Text>
    </Flex>
  )
})
