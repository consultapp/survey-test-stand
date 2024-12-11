import { useSurveyContextDispatch } from '@/context/SurveyContext'
import { useQuestion } from '@/context/SurveyContext/hooks'
import { VariantsType } from '@/fixtures/variantsType'
import { Radio, Stack } from '@mantine/core'

import React from '@/react/react'
const { useCallback } = React

type Props = { id: string }

const RadioQuestion = ({ id }: Props) => {
  const question = useQuestion(id)
  const dispatch = useSurveyContextDispatch()

  const handleChange = useCallback(
    (value: string | number) => {
      dispatch({
        type: `set${VariantsType.radio}Value`,
        payload: {
          id,
          value,
        },
      })
    },
    [dispatch, id]
  )

  if (!question) return
  const variants = question.variants as IRadioVariant[]
  const checked = variants.find((item) => item.value === true)?.label ?? ''
  return (
    <Radio.Group value={checked} withAsterisk onChange={handleChange}>
      <Stack gap="sm">
        {variants.map(({ label }) => (
          <Radio label={label} value={label} key={label} />
        ))}
      </Stack>
    </Radio.Group>
  )
}

export { RadioQuestion }
