import { useSurveyContextDispatch } from '@/context/SurveyContext'
import { useQuestion } from '@/context/SurveyContext/hooks'
import { COLOR_PRIMARY } from '@/fixtures/theme'
import { VariantsType } from '@/fixtures/variantsType'
import { TextField } from '@mui/material'

import { ChangeEventHandler, useCallback } from 'react'

type Props = { id: string }

const TextQuestion = ({ id }: Props) => {
  const question = useQuestion(id)
  const dispatch = useSurveyContextDispatch()

  const handleChange: ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = useCallback(
    ({ target }) => {
      dispatch({
        type: `set${VariantsType.text}Value`,
        payload: {
          id,
          value: target.value,
        },
      })
    },
    [dispatch, id]
  )

  if (!question) return
  const { text } = (question.variants as ITextVariant[])[0]

  return (
    <TextField
      sx={{ fontSize: '1.7rem' }}
      label="Напишите ответ"
      multiline
      maxRows={10}
      value={text}
      style={{ color: COLOR_PRIMARY }}
      onChange={handleChange}
      size="small"
      fullWidth
    />
  )
}

export { TextQuestion }
