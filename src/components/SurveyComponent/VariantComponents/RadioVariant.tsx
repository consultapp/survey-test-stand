import { Radio, Group, Text } from '@mantine/core'

type Props = {
  label: string
  checked: string
}

export const RadioVariant = ({ label, checked }: Props) => (
  <Radio.Card
    radius="md"
    value={label}
    p="sm"
    h="100%"
    bg={checked === label ? 'var(--mantine-primary-color-light)' : 'white'}
    style={{
      display: 'flex',
    }}
  >
    <Group wrap="nowrap" align="flex-start">
      <Radio.Indicator />
      <Text>{label}</Text>
    </Group>
  </Radio.Card>
)
