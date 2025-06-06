import {
  useQuestion,
  useIsQuestionVisible,
} from '@/context/SurveyContext/hooks'

import styles from './styles.module.scss'
import { QuestionTypes } from '../QuestionTypes'
import { Stack, Text } from '@mantine/core'
import classNames from 'classnames'
import { useStatusById } from '@/context/StatusContext/hooks'
import { Status } from '@/fixtures/status'
import { useSurveyContextDispatch } from '@/context/SurveyContext'
import { useEffect } from 'react'
import { useStatusContextDispatch } from '@/context/StatusContext/hooks'

type Props = { id: string }

export const SurveyQuestion = ({ id }: Props) => {
  const question = useQuestion(id)
  const status = useStatusById(id)
  const dispatch = useSurveyContextDispatch()
  const statusDispatch = useStatusContextDispatch()

  const isVisible = useIsQuestionVisible(id)

  useEffect(() => {
    if (!isVisible) {
      dispatch({ type: 'clear', payload: { id } })
      statusDispatch({ type: Status.hidden, payload: id })
    }
  }, [dispatch, id, isVisible, statusDispatch])

  if (!question || !isVisible) return null

  const { name, helper_text, type } = question
  const QuestionComponent = QuestionTypes[type]

  return (
    <section
      className={classNames(
        styles.root,
        (status === Status.idle || !question.isRequired) && styles.idle,
        status === Status.error && styles.error,
        status === Status.empty && styles.empty,
        status === Status.approved && question.isRequired && styles.approved,
        status === Status.hidden && styles.hidden
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
        {QuestionTypes[type] && <QuestionComponent id={id} />}
      </Stack>
    </section>
  )
}
