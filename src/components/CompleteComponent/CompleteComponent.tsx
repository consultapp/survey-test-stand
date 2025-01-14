import { Flex, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Modal, Button } from '@mantine/core'
import { useCallback, useEffect, useMemo, useRef } from 'react'
import {
  useElmaCompleteCallback,
  useElmaDataOrder,
} from '@/context/ElmaContext/hooks'
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
  const questionOrder = useElmaDataOrder()

  const statusRef = useRef(statuses)
  statusRef.current = statuses

  const scrollToFirstError = useCallback(() => {
    const errors = Object.entries(statusRef.current)
      .filter((item) => item[1] !== Status.approved)
      .map((item) => item[0])
    for (let i = 0; i < questionOrder.length; i++) {
      if (errors.includes(questionOrder[i])) {
        const selector = `[data-question-id="${questionOrder[i]}"]`
        document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    return
  }, [questionOrder])

  const submitHandler = useCallback(() => {
    log('Completed')
    completeHandler()
    close()
  }, [close, completeHandler])

  const rejectHandler = useCallback(() => {
    close()
    scrollToFirstError()
  }, [close, scrollToFirstError])

  const calculateErrorsCount = useCallback(
    (s: ReturnType<typeof useStatusContext>) =>
      Object.values(s).reduce(
        (acc, val) => acc + (val !== Status.approved ? 1 : 0),
        0
      ),
    []
  )

  const checkStatuses = useCallback(() => {
    Object.entries(statusRef.current).forEach(([k, v]) => {
      if (v === Status.idle) dispatch({ type: Status.empty, payload: k })
    })

    return calculateErrorsCount(statusRef.current)
  }, [calculateErrorsCount, dispatch])

  const errorCount = useMemo(
    () => calculateErrorsCount(statuses),
    [calculateErrorsCount, statuses]
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
      log('TryCompleteEvent: event added', currentController)

      root.addEventListener(
        'TryCompleteEvent',
        () => {
          log('TryCompleteEvent caught' + root)
          const errors = checkStatuses()
          if (errors > 0) open()
          else submitHandler()
        },
        {
          signal: currentController.signal,
        }
      )
    }
    return () => {
      log('TryCompleteEvent: event aborted', currentController)
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
