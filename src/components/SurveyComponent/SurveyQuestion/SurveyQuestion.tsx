import { useQuestion } from '@/context/SurveyContext/hooks'

import styles from './styles.module.scss'
import { QuestionTypes } from '../QuestionTypes'

type Props = { id: string }

export const SurveyQuestion = ({ id }: Props) => {
  const question = useQuestion(id)

  if (!question) return

  const { name, helper_text, type } = question
  const QuestionComponent = QuestionTypes[type]

  return (
    <section className={styles.root}>
      {name && <h3>{name}</h3>}
      {helper_text && <p>{helper_text}</p>}
      {QuestionTypes[type] && <QuestionComponent id={id} />}
    </section>
  )
}
