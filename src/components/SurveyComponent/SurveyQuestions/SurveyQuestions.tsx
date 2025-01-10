import { useSurveyContext } from '@/context/SurveyContext'
import { SurveyQuestion } from '../SurveyQuestion/SurveyQuestion'

import styles from './styles.module.scss'
import { useEffect } from 'react'
import { useUpdateElmaDataQuestions } from '@/context/ElmaContext/hooks'
import CompleteButton from '@/components/CompleteButton/CompleteButton'

export const SurveyQuestions = () => {
  const ctx = useSurveyContext()
  const update = useUpdateElmaDataQuestions()

  useEffect(() => {
    update(ctx)
  })

  return (
    <div className={styles.root}>
      {!ctx && <div>Ошибка загрузки данных.</div>}
      {ctx && ctx.map(({ id }) => <SurveyQuestion id={id} key={id} />)}
      <CompleteButton />
    </div>
  )
}
