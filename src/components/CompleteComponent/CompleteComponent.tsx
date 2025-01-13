import { Flex, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Modal, Button } from '@mantine/core'
import { useCallback, useEffect, useMemo, useRef } from 'react'
import { useElmaCompleteCallback } from '@/context/ElmaContext/hooks'
import { log } from '@/utils'
import {
  useStatusContext,
  useStatusContextDispatch,
} from '@/context/StatusContext/hooks'
import { Status } from '@/fixtures/status'

type Props = { root: HTMLDivElement | null }

export const CompleteComponent = ({ root }: Props) => {
  const [opened, { open, close }] = useDisclosure(false)
  const completeHandler = useElmaCompleteCallback()
  const statuses = useStatusContext()
  const dispatch = useStatusContextDispatch()
  const statusRef = useRef(statuses)
  statusRef.current = statuses

  const submitHandler = useCallback(() => {
    log('Completed')
    completeHandler()
    close()
  }, [close, completeHandler])

  const firstErrorId = useMemo(() => {
    console.log('statuses', statuses)
    return ''
  }, [statuses])

  const rejectHandler = useCallback(() => {
    close()
    console.log('firstErrorId', firstErrorId)
    document
      .getElementById(firstErrorId)
      ?.scrollIntoView({ behavior: 'smooth' })
  }, [close, firstErrorId])

  const checkStatuses = useCallback(() => {
    Object.entries(statusRef.current).forEach(([k, v]) => {
      if (v === Status.idle) dispatch({ type: Status.empty, payload: k })
    })
  }, [dispatch])

  const errorCount = useMemo(
    () =>
      Object.values(statuses).reduce(
        (acc, val) => acc + (val !== Status.approved ? 1 : 0),
        0
      ),
    [statuses]
  )

  const fireTryCompleteEventTestBtn = useCallback(() => {
    log('TryCompleteEvent dispatched' + root)
    if (root)
      root.dispatchEvent(
        new CustomEvent('TryCompleteEvent', {
          detail: {
            id: 'rootId',
          },
        })
      )
  }, [root])

  useEffect(() => {
    const currentController = new AbortController()
    if (root) {
      console.log('TryCompleteEvent: event added', currentController)

      root.addEventListener(
        'TryCompleteEvent',
        () => {
          log('TryCompleteEvent caught' + root)
          open()
          checkStatuses()
        },
        {
          signal: currentController.signal,
        }
      )
    }
    return () => {
      console.log('TryCompleteEvent: event aborted', currentController)
      currentController.abort()
    }
  }, [checkStatuses, open, root])

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Завершить незаконченный тест?"
        centered
        zIndex={1060}
      >
        <Flex direction="column" gap="xs">
          {errorCount && (
            <Text>{`Незаполненных вопросов: ${errorCount} шт.`}</Text>
          )}
          <Flex gap="xs">
            <Button onClick={submitHandler}>Да</Button>
            <Button onClick={rejectHandler} variant="outline">
              Нет
            </Button>
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
