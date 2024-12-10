import { useSurveyContextDispatch } from '@/context/SurveyContext'
import { useQuestion } from '@/context/SurveyContext/hooks'
import { VariantsType } from '@/fixtures/variantsType'
import { useCallback } from 'react'
import styles from './styles.module.scss'
import { NumberInput, Stack } from '@mantine/core'

type Props = { id: string }

const NumberQuestion = ({ id }: Props) => {
  const question = useQuestion(id)
  const dispatch = useSurveyContextDispatch()

  const handleChange = useCallback(
    (index: number) => {
      return (value: string | number) => {
        dispatch({
          type: `set${VariantsType.number}Value`,
          payload: {
            id,
            value: value,
            index,
          },
        })
      }
    },
    [dispatch, id]
  )

  if (!question) return
  const variants = question.variants as INumberVariant[]
  const checksum = question.checksum ?? 0

  if (!checksum) new Error('Не указана контрольная сумма')

  const currentSum = variants.reduce((a, v) => a + (v.value ?? 0), 0)
  const diff = checksum - currentSum

  return (
    <Stack gap="1rem">
      {variants.map(({ label, value }, i) => (
        <div className={styles.number} key={label}>
          <div>{label}</div>
          <NumberInput
            value={value}
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
