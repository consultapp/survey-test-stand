import { useSurveyContextDispatch } from '@/context/SurveyContext'
import { useQuestion } from '@/context/SurveyContext/hooks'
import { VariantsType } from '@/fixtures/variantsType'
import { useCallback, useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { NumberInput, Stack } from '@mantine/core'
import {
  useStatusById,
  useStatusContextDispatch,
  useUpdateStatus,
} from '@/context/StatusContext/hooks'
import { Status } from '@/fixtures/status'
import { testIsApproved } from '@/context/StatusContext/functions'

type Props = { id: string }

const NumberQuestion = ({ id }: Props) => {
  const question = useQuestion(id)
  const dispatch = useSurveyContextDispatch()
  const status = useStatusById(id)
  const [idle, setIdle] = useState(status === Status.idle)
  const statusDispatch = useStatusContextDispatch()
  const updateStatus = useUpdateStatus()

  const isApproved = testIsApproved(question)

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
        if (idle) setIdle(false)
      }
    },
    [dispatch, id, idle]
  )

  useEffect(() => {
    if (question && !idle) updateStatus(question, statusDispatch)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isApproved, idle])

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
