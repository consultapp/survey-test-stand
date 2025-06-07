import { useSurveyContextDispatch } from '@/context/SurveyContext'
import { useQuestion } from '@/context/SurveyContext/hooks'
import { VariantsType } from '@/fixtures/variantsType'
import { ChangeEventHandler, useCallback } from 'react'
import { Textarea } from '@mantine/core'

type Props = { id: string; setIdleCallback: () => void }

const TextQuestion = ({ id, setIdleCallback }: Props) => {
  const question = useQuestion(id)
  const dispatch = useSurveyContextDispatch()

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = useCallback(
    ({ target }) => {
      dispatch({
        type: VariantsType.text,
        payload: {
          id,
          value: target.value,
        },
      })
      setIdleCallback()
    },
    [dispatch, id, setIdleCallback]
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
