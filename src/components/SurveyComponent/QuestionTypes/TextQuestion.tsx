import { useSurveyContextDispatch } from '@/context/SurveyContext'
import { useQuestion } from '@/context/SurveyContext/hooks'
import { VariantsType } from '@/fixtures/variantsType'
import { ChangeEventHandler } from 'react'
import { Textarea } from '@mantine/core'

import React from '@/react/react'
const { useCallback } = React

type Props = { id: string }

const TextQuestion = ({ id }: Props) => {
  const question = useQuestion(id)
  const dispatch = useSurveyContextDispatch()

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = useCallback(
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
    <Textarea
      placeholder="Текст ответа"
      autosize
      minRows={2}
      maxRows={10}
      value={text}
      onChange={handleChange}
    />
  )
}

export { TextQuestion }
