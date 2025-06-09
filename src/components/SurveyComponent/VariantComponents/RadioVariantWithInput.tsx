import { Group, Radio, TextInput } from '@mantine/core'
import { useState, useEffect, useCallback, ChangeEvent } from 'react'

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

  const handleLabelChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setLocalLabel(event.currentTarget.value)
    },
    [setLocalLabel]
  )

  const toggle = useCallback(() => {
    if (localLabel !== label) {
      onLabelChange(localLabel)
    }
  }, [localLabel, label, onLabelChange])

  const handleBlur = useCallback(() => toggle(), [toggle])

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
          onBlur={handleBlur}
          onClick={(e) => {
            toggle()
            e.stopPropagation()
          }}
          placeholder="Введите значение"
          aria-label={`Изменить значение для ${label}`}
        />
      </Group>
    </Radio.Card>
  )
}

export { RadioVariantWithInput }
