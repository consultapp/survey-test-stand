import { Checkbox, Group, Text } from '@mantine/core'

type Props = {
  label: string
  value: boolean
  onChange: (checked: boolean) => void
}

export const CheckboxVariant = ({ label, value, onChange }: Props) => {
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
      <Group wrap="nowrap" align="flex-start">
        <Checkbox.Indicator />
        <Text>{label}</Text>
      </Group>
    </Checkbox.Card>
  )
}
