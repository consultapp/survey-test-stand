import { useSurveyContextDispatch } from '@/context/SurveyContext'
import { useQuestion } from '@/context/SurveyContext/hooks'
import { VariantsType } from '@/fixtures/variantsType'
import { useCallback } from 'react'
import styles from './styles.module.scss'
import { NumberInput, Stack } from '@mantine/core'

type Props = { id: string; setIdleCallback: () => void }

const NumberQuestion = ({ id, setIdleCallback }: Props) => {
  const question = useQuestion(id)
  const dispatch = useSurveyContextDispatch()

  const handleChange = useCallback(
    (index: number) => {
      return (value: string | number) => {
        dispatch({
          type: VariantsType.number,
          payload: {
            id,
            value: value,
            index,
          },
        })
        setIdleCallback()
      }
    },
    [dispatch, id, setIdleCallback]
  )

  if (!question || question.type !== 'number') return

  if (!question.checksum) new Error('Не указана контрольная сумма')

  const currentSum = question.variants.reduce((a, v) => a + (v.value ?? 0), 0)
  const diff = (question.checksum ?? 0) - currentSum

  return (
    <Stack gap="1rem">
      {question.variants.map(({ label, value }, i) => (
        <div className={styles.number} key={label}>
          <div>{label}</div>
          <NumberInput
            value={value ?? 0}
            onChange={handleChange(i)}
            suffix="%"
            error={
              diff === 0
                ? ''
                : diff > 0
                ? `не хватает ${diff}`
                : `лишнее ${diff}`
            }
          />
        </div>
      ))}
    </Stack>
  )
}

export { NumberQuestion }
