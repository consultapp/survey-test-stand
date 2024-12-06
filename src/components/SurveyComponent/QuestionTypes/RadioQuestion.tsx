import { useSurveyContextDispatch } from '@/context/SurveyContext'
import { useQuestion } from '@/context/SurveyContext/hooks'
import { COLOR_PRIMARY } from '@/fixtures/theme'
import { VariantsType } from '@/fixtures/variantsType'
import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { useCallback } from 'react'

type Props = { id: string }

const RadioQuestion = ({ id }: Props) => {
  const question = useQuestion(id)
  const dispatch = useSurveyContextDispatch()

  const handleChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({
        type: `set${VariantsType.radio}Value`,
        payload: {
          id,
          value: target.value,
        },
      })
    },
    [dispatch, id]
  )

  if (!question) return
  const variants = question.variants as IRadioVariant[]
  const checked = variants.find((item) => item.value === true)?.label ?? ''
  return (
    <RadioGroup
      sx={{ display: 'grid', gap: '1rem', color: COLOR_PRIMARY }}
      value={checked}
    >
      {variants.map(({ label }) => (
        <FormControlLabel
          control={<Radio onChange={handleChange} />}
          label={label}
          value={label}
          key={label}
        />
      ))}
    </RadioGroup>
  )
}

export { RadioQuestion }
