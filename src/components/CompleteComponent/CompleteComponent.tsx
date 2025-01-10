import { Flex, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Modal, Button } from '@mantine/core'
import { useEffect } from 'react'
import { useElmaCompleteCallback } from '@/context/ElmaContext/hooks'
import { log } from '@/utils'

type Props = { root: HTMLDivElement | null }

export const CompleteComponent = ({ root }: Props) => {
  const [opened, { open, close }] = useDisclosure(false)
  const completeHandler = useElmaCompleteCallback()

  const submitHandler = () => {
    log('Completed')
    completeHandler()
    close()
  }

  const fireTryCompleteEventTestBtn = () => {
    log('TryCompleteEvent dispatched')
    if (root)
      root.dispatchEvent(
        new CustomEvent('TryCompleteEvent', {
          detail: {
            id: 'rootId',
          },
        })
      )
  }

  useEffect(() => {
    const currentController = new AbortController()
    if (root)
      root.addEventListener(
        'TryCompleteEvent',
        () => {
          log('TryCompleteEvent caught')
          open()
        },
        {
          signal: currentController.signal,
        }
      )

    return () => currentController.abort()
  }, [open, root])

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Подтверждение теста"
        centered
        zIndex={1060}
      >
        <Flex direction="column" gap="md">
          <Text>Завершить тест?</Text>
          <Flex gap="md">
            <Button onClick={submitHandler}>Да</Button>
            <Button>Нет</Button>
          </Flex>
        </Flex>
      </Modal>
      <Button variant="default" onClick={fireTryCompleteEventTestBtn}>
        Dispatch Test Complete Event
      </Button>
    </>
  )
}

export default CompleteComponent
