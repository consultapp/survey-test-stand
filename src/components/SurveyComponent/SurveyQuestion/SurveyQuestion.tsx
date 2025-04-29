import { useQuestion } from '@/context/SurveyContext/hooks'

import styles from './styles.module.scss'
import { QuestionTypes } from '../QuestionTypes'
import { Flex, Stack, Text } from '@mantine/core'
import classNames from 'classnames'
import { useStatusById } from '@/context/StatusContext/hooks'
import { Status } from '@/fixtures/status'
import { TimerComponent } from '@/components/TimerComponent/TimerComponent'

type Props = { id: string }

export const SurveyQuestion = ({ id }: Props) => {
  const question = useQuestion(id)
  const status = useStatusById(id)

  if (!question) return

  const { name, helper_text, type } = question
  const QuestionComponent = QuestionTypes[type]

  return (
    <section
      className={classNames(
        styles.root,
        status === Status.idle && styles.idle,
        status === Status.error && styles.error,
        status === Status.empty && styles.error,
        status === Status.approved && styles.approved
      )}
      data-question-id={id}
    >
      <Flex gap="md" justify="space-between" direction="row">
        <Stack>
          {name && <Text fw={700}>{name}</Text>}
          {helper_text && <Text size="sm">{helper_text}</Text>}
        </Stack>
        <TimerComponent id={id} />
      </Flex>

      <Stack p="1rem">
        {QuestionTypes[type] && <QuestionComponent id={id} />}
      </Stack>
    </section>
  )
}
