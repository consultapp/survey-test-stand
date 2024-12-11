import { useSurveyContextDispatch } from '@/context/SurveyContext'
import { useQuestion } from '@/context/SurveyContext/hooks'
import { VariantsType } from '@/fixtures/variantsType'
import { Checkbox, Stack } from '@mantine/core'

import React from '@/react/react'
const { useCallback } = React

type Props = { id: string }

const CheckboxQuestion = ({ id }: Props) => {
  const question = useQuestion(id)
  const dispatch = useSurveyContextDispatch()

  const handleChange = useCallback(
    (index: number) => {
      return ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
          type: `set${VariantsType.checkbox}Value`,
          payload: {
            id,
            value: target.checked,
            index,
          },
        })
      }
    },
    [dispatch, id]
  )

  if (!question) return
  const variants = question.variants as ICheckVariant[]

  return (
    <Stack gap="1rem">
      {variants.map(({ label, value }, i) => (
        <Checkbox
          checked={!!value}
          onChange={handleChange(i)}
          label={label}
          key={label}
        />
      ))}
    </Stack>
  )
}

export { CheckboxQuestion }
