import { Group, Radio, TextInput } from '@mantine/core'
import { ChangeEventHandler, useState, useEffect } from 'react'

type Props = {
  label: string
  checked: string
  onLabelChange: (label: string) => void
}

const RadioVariantWithInput = ({ label, checked, onLabelChange }: Props) => {
  const [localLabel, setLocalLabel] = useState(label)

  useEffect(() => {
    setLocalLabel(label)
  }, [label])

  const handleLabelChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setLocalLabel(event.currentTarget.value)
  }

  return (
    <Radio.Card
      radius="md"
      value={label}
      checked={checked === label}
      p="sm"
      h="100%"
      bg={checked === label ? 'var(--mantine-primary-color-light)' : 'white'}
      style={{
        display: 'flex',
      }}
    >
      <Group wrap="nowrap" align="flex-start">
        <Radio.Indicator />
        <TextInput
          value={localLabel}
          onChange={handleLabelChange}
          onClick={(e) => {
            e.stopPropagation()
            onLabelChange(localLabel)
          }}
          placeholder="Введите значение"
          aria-label={`Изменить значение для ${label}`}
        />
      </Group>
    </Radio.Card>
  )
}

export { RadioVariantWithInput }
