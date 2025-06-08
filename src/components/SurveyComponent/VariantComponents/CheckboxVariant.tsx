import { Checkbox, Group, Text, TextInput } from '@mantine/core'
import { ChangeEventHandler, useState, useEffect } from 'react'

type Props = {
  label: string
  value: boolean
  isChangeable?: boolean
  onChange: (checked: boolean) => void
  onLabelChange?: (label: string) => void
}

const CheckboxVariant = ({
  label,
  value,
  isChangeable,
  onChange,
  onLabelChange,
}: Props) => {
  const [localLabel, setLocalLabel] = useState(label)

  useEffect(() => {
    setLocalLabel(label)
  }, [label])

  const handleLabelChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setLocalLabel(event.currentTarget.value)
  }

  return (
    <Checkbox.Card
      radius="md"
      value={label}
      checked={value}
      onChange={() => onChange(!value)}
      p="sm"
      h="100%"
      bg={value ? 'var(--mantine-primary-color-light)' : 'white'}
      style={{
        display: 'flex',
      }}
    >
      <Group wrap="nowrap" align="flex-start" style={{ width: '100%' }}>
        <Checkbox.Indicator />
        {isChangeable ? (
          <TextInput
            value={localLabel}
            onChange={handleLabelChange}
            onClick={(e) => {
              e.stopPropagation()
              onLabelChange?.(localLabel)
            }}
            placeholder="Введите значение"
            aria-label={`Изменить значение для ${label}`}
            style={{ flex: 1 }}
          />
        ) : (
          <Text>{label}</Text>
        )}
      </Group>
    </Checkbox.Card>
  )
}

export { CheckboxVariant }
