import { useSurveyContext } from '@/context/SurveyContext'
import { SurveyQuestion } from '../SurveyQuestion/SurveyQuestion'

import styles from './styles.module.scss'
import { useUpdateElmaDataQuestions } from '@/context/ElmaContext/hooks'

import React from '@/react/react'
const { useEffect } = React

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
    </div>
  )
}
