import { useSurveyContextDispatch } from '@/context/SurveyContext'
import { useQuestion } from '@/context/SurveyContext/hooks'
import { VariantsType } from '@/fixtures/variantsType'
import { useCallback, useEffect, useRef } from 'react'
import styles from './styles.module.scss'
import { NumberInput, Stack } from '@mantine/core'
import {
  useStatusById,
  useStatusContextDispatch,
} from '@/context/StatusContext/hooks'
import { Status } from '@/fixtures/status'

type Props = { id: string }

const updateStatus = (
  question: IQuestion,
  dispatch: ReturnType<typeof useStatusContextDispatch>
) => {
  if (testIsApproved(question)) {
    dispatch({ type: Status.approved, payload: question.id })
  } else {
    dispatch({ type: Status.empty, payload: question.id })
  }
}

const testIsApproved = (question: IQuestion | undefined) =>
  question &&
  (question.variants as INumberVariant[]).reduce(
    (acc, item) => acc || Boolean(item.value),
    false
  ) &&
  (question.variants as INumberVariant[]).reduce(
    (acc, item) => acc + (item.value ?? 0),
    0
  ) === question.checksum

const NumberQuestion = ({ id }: Props) => {
  const question = useQuestion(id)
  const dispatch = useSurveyContextDispatch()
  const status = useStatusById(id)
  const idle = useRef(status === Status.idle)
  const statusDispatch = useStatusContextDispatch()

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
        idle.current = false
      }
    },
    [dispatch, id]
  )

  console.log('question', question)

  useEffect(() => {
    if (question && !idle.current) updateStatus(question, statusDispatch)
  }, [isApproved, question, status, statusDispatch])

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
