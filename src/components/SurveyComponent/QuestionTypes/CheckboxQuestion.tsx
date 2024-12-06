import { useSurveyContextDispatch } from '@/context/SurveyContext'
import { useQuestion } from '@/context/SurveyContext/hooks'
import { COLOR_PRIMARY } from '@/fixtures/theme'
import { VariantsType } from '@/fixtures/variantsType'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import { useCallback } from 'react'

type Props = { id: string }

const CheckboxQuestion = ({ id }: Props) => {
  const question = useQuestion(id)
  const dispatch = useSurveyContextDispatch()

  const handleChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({
        type: `set${VariantsType.checkbox}Value`,
        payload: {
          id,
          value: target.checked,
          index:
            target.parentElement?.attributes.getNamedItem('dataset-index')
              ?.value ?? false,
        },
      })
    },
    [dispatch, id]
  )

  if (!question) return
  const variants = question.variants as ICheckVariant[]

  return (
    <FormGroup
      sx={{
        display: 'grid',
        gap: '1rem',
        color: COLOR_PRIMARY,
        fontSize: '1.7rem',
      }}
    >
      {variants.map(({ label, value }, i) => (
        <FormControlLabel
          checked={!!value}
          control={<Checkbox dataset-index={i} onChange={handleChange} />}
          label={label}
          key={label}
        />
      ))}
    </FormGroup>
  )
}

export { CheckboxQuestion }
