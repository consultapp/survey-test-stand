import { Button, Flex, Modal, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useCallback, useEffect, useMemo, useRef } from 'react'
import {
  useElmaCompleteCallback,
  useElmaDataOrder,
} from '@/context/ElmaContext/hooks'
import {
  countNonApproved,
  getNonApprovedIds,
} from '@/context/StatusContext/functions'
import { log } from '@/utils'
import {
  useStatusContext,
  useStatusContextDispatch,
} from '@/context/StatusContext/hooks'
import { Status } from '@/fixtures/status'

const TRY_COMPLETE_EVENT = 'TryCompleteEvent'

const FOCUSABLE_SELECTOR =
  'input:not([type="hidden"]), textarea, button, select, [tabindex]:not([tabindex="-1"])'

type Props = { root: HTMLDivElement | null }

export const CompleteComponent = ({ root }: Props) => {
  const [opened, { open, close }] = useDisclosure(false)
  const completeHandler = useElmaCompleteCallback()
  const statuses = useStatusContext()
  const dispatch = useStatusContextDispatch()
  const questionOrder = useElmaDataOrder()

  const statusRef = useRef(statuses)
  statusRef.current = statuses

  const isSubmittingRef = useRef(false)

  const scrollToFirstError = useCallback(() => {
    const errors = getNonApprovedIds(statusRef.current)
    for (const id of questionOrder) {
      if (!errors.has(id)) continue

      const section = root?.querySelector(`[data-question-id="${id}"]`)
      section?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      section
        ?.querySelector<HTMLElement>(FOCUSABLE_SELECTOR)
        ?.focus({ preventScroll: true })
      return
    }
  }, [questionOrder, root])

  const submitHandler = useCallback(() => {
    log('Completed')
    completeHandler()
    close()
  }, [close, completeHandler])

  const dismissModal = useCallback(() => {
    close()
    scrollToFirstError()
  }, [close, scrollToFirstError])

  const fireTryCompleteEventTestBtn = useCallback(() => {
    log('TryCompleteEvent dispatched', root)
    if (root) root.dispatchEvent(new CustomEvent(TRY_COMPLETE_EVENT))
  }, [root])

  const checkStatuses = useCallback(() => {
    for (const [k, v] of Object.entries(statusRef.current)) {
      if (v === Status.idle) dispatch({ type: Status.empty, payload: k })
    }
    return countNonApproved(statusRef.current)
  }, [dispatch])

  const errorCount = useMemo(() => countNonApproved(statuses), [statuses])

  const onTryCompleteRef = useRef<() => void>(() => {})
  onTryCompleteRef.current = () => {
    if (checkStatuses() > 0) {
      open()
    } else if (!isSubmittingRef.current) {
      isSubmittingRef.current = true
      submitHandler()
    }
  }

  useEffect(() => {
    if (!root) return

    const handler = () => {
      log('TryCompleteEvent caught', root)
      onTryCompleteRef.current()
    }

    log('TryCompleteEvent: event added')
    root.addEventListener(TRY_COMPLETE_EVENT, handler)
    return () => {
      log('TryCompleteEvent: event aborted')
      root.removeEventListener(TRY_COMPLETE_EVENT, handler)
    }
  }, [root])

  return (
    <>
      <Modal
        opened={opened}
        onClose={dismissModal}
        title="Вы не можете завершить тест, так как есть незаполненные и неверно заполненные вопросы"
        centered
        zIndex={1060}
      >
        <Flex direction="column" gap="md">
          {errorCount > 0 && (
            <Text color="red">{`Осталось заполнить: ${errorCount} шт.`}</Text>
          )}
          <Flex gap="xs" justify="center">
            <Button onClick={dismissModal} variant="outline">
              Назад к тесту
            </Button>
          </Flex>
        </Flex>
      </Modal>
      {import.meta.env.DEV && (
        <Button variant="default" onClick={fireTryCompleteEventTestBtn}>
          Dispatch Test Complete Event
        </Button>
      )}
    </>
  )
}

export default CompleteComponent
