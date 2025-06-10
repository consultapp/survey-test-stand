import {
  useQuestion,
  useIsQuestionVisible,
} from '@/context/SurveyContext/hooks'

import styles from './styles.module.scss'
import { Stack, Text } from '@mantine/core'
import classNames from 'classnames'
import { useStatusById, useUpdateStatus } from '@/context/StatusContext/hooks'
import { Status } from '@/fixtures/status'
import { useSurveyContextDispatch } from '@/context/SurveyContext'
import { useEffect, useState, useCallback } from 'react'
import { useStatusContextDispatch } from '@/context/StatusContext/hooks'
import { testIsApproved } from '@/context/StatusContext/functions'
import { QuestionComponent } from '../QuestionComponent/QuestionComponent'

type Props = { id: string }

export const SurveyQuestion = ({ id }: Props) => {
  const question = useQuestion(id)
  const status = useStatusById(id)
  const dispatch = useSurveyContextDispatch()
  const statusDispatch = useStatusContextDispatch()
  const updateStatus = useUpdateStatus()
  const isApproved = testIsApproved(question)
  const [idle, setIdle] = useState(status === Status.idle)

  const setIdleCallback = useCallback(() => {
    if (idle) setIdle(false)
  }, [idle])

  const isVisible = useIsQuestionVisible(id)

  useEffect(() => {
    if (question && !idle) updateStatus(question, statusDispatch)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isApproved, idle])

  useEffect(() => {
    if (isVisible) {
      if (status === Status.hidden) {
        setIdle(true)
        statusDispatch({ type: Status.idle, payload: id })
      }
    } else {
      dispatch({ type: 'clear', payload: { id } })
      statusDispatch({ type: Status.hidden, payload: id })
    }
  }, [isVisible, id, statusDispatch, dispatch, status])

  if (!question || !isVisible) return null

  const { name, helper_text, type } = question

  return (
    <section
      className={classNames(
        styles.root,
        (status === Status.idle || !question.isRequired) && styles.idle,
        status === Status.error && styles.error,
        status === Status.empty && styles.empty,
        status === Status.approved && question.isRequired && styles.approved
      )}
      data-question-id={id}
    >
      <Stack>
        {name && (
          <Text fw={700}>
            {question.isRequired && (
              <span style={{ color: 'red' }}>*&nbsp;</span>
            )}
            {id} - {name}
          </Text>
        )}
        {helper_text && (
          <Text
            size="sm"
            style={{
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
            }}
          >
            {helper_text}
          </Text>
        )}
      </Stack>
      <Stack p="1rem">
        <QuestionComponent
          id={id}
          setIdleCallback={setIdleCallback}
          type={type}
        />
      </Stack>
    </section>
  )
}
