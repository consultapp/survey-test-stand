import { useSurveyContextDispatch } from '@/context/SurveyContext'
import { useQuestion } from '@/context/SurveyContext/hooks'
import { COLOR_PRIMARY } from '@/fixtures/theme'
import { VariantsType } from '@/fixtures/variantsType'
import { Box, TextField } from '@mui/material'
import { ChangeEvent, useCallback } from 'react'

type Props = { id: string }

const NumberQuestion = ({ id }: Props) => {
  const question = useQuestion(id)
  const dispatch = useSurveyContextDispatch()

  const handleChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      dispatch({
        type: `set${VariantsType.number}Value`,
        payload: {
          id,
          value: target.value,
          index: target.attributes.getNamedItem('dataset')?.value,
        },
      })
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
    <Box sx={{ display: 'grid', gap: '2rem', fontSize: '1.7rem' }}>
      {variants.map(({ label, value }, dataset) => (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '100px 100px ',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2rem',
            fontSize: '1.7rem',
          }}
          key={label}
        >
          <div>{label}</div>
          <TextField
            type="number"
            value={value}
            onChange={handleChange}
            sx={{
              textAlign: 'right',
              color: COLOR_PRIMARY,
              borderBlockColor: COLOR_PRIMARY,
            }}
            size="small"
            slotProps={{
              input: {
                inputProps: {
                  style: { textAlign: 'center', fontSize: '1.2rem' },
                  dataset,
                },
              },
            }}
          />
        </Box>
      ))}
      {diff !== 0 && (
        <Box sx={{ textAlign: 'center', color: 'red' }}>
          Сумма должна равняться {currentSum}
          {diff > 0 && `, не хавтает: ${diff}`}
          {diff < 0 && `, лишнее ${diff}`}
        </Box>
      )}
    </Box>
  )
}

export { NumberQuestion }
