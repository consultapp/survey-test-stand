import { useSurveyContext } from '@/context/SurveyContext'
import { SurveyQuestion } from '../SurveyQuestion/SurveyQuestion'
import { SaveSurveyButton } from '../SaveSurveyButton/SaveSurveyButton'

import styles from './styles.module.scss'
import { useEffect } from 'react'
import { useUpdateElmaDataQuestions } from '@/context/ElmaContext/hooks'

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
      <div className={styles.root__buttons}>
        <SaveSurveyButton />
      </div>
    </div>
  )
}
