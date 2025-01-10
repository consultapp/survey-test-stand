import { Button, Flex, Popover, Text } from '@mantine/core'

export const CompleteButton = () => {
  const submitHandler = () => {
    console.log('Completed')
  }
  return (
    <Popover trapFocus position="top" withArrow shadow="md">
      <Popover.Target>
        <Button w="150" variant="outline">
          Complete
        </Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Flex direction="column" gap="md">
          <Text>Завершить тест?</Text>
          <Flex gap="md">
            <Button onClick={submitHandler}>Да</Button>
            <Button>Нет</Button>
          </Flex>
        </Flex>
      </Popover.Dropdown>
    </Popover>
  )
}

export default CompleteButton
