import { Box, Flex } from '@mantine/core'

type Props = { label: string; value: number }

const SliderLabelComponent = ({ label, value }: Props) => {
  return (
    <Flex direction="column" justify="center" gap="4px">
      <Box style={{ textAlign: 'center' }}>{value}</Box>
      <Box
        style={{
          maxWidth: '110px',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',

          overflow: 'hidden',
          textWrap: 'wrap',
          textOverflow: 'ellipsis',
        }}
      >
        {label}
      </Box>
    </Flex>
  )
}

export { SliderLabelComponent }
