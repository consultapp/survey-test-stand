import { useQuestion } from '@/context/SurveyContext/hooks'

import styles from './styles.module.scss'
import { QuestionTypes } from '../QuestionTypes'
import { Stack, Text } from '@mantine/core'

type Props = { id: string }

export const SurveyQuestion = ({ id }: Props) => {
  const question = useQuestion(id)

  if (!question) return

  const { name, helper_text, type } = question
  const QuestionComponent = QuestionTypes[type]

  return (
    <section className={styles.root}>
      <Stack bg="var(--mantine-color-gray-light)" p="1rem">
        {name && <Text fw={700}>{name}</Text>}
        {helper_text && <Text size="sm">{helper_text}</Text>}
      </Stack>
      <Stack p="1rem">
        {QuestionTypes[type] && <QuestionComponent id={id} />}
      </Stack>
    </section>
  )
}
