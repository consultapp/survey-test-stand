import { useSurveyContext } from '@/context/SurveyContext'
import { SurveyQuestion } from '../SurveyQuestion/SurveyQuestion'
import { SaveSurveyButton } from '../SaveSurveyButton/SaveSurveyButton'
import { log } from '@/utils'
import styles from './styles.module.scss'

export const SurveyQuestions = () => {
  const ctx = useSurveyContext()
  log('ctx', ctx)
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
