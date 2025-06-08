import { QuestionTypes } from '../QuestionTypes'

type Props = {
  type: QuestionType
  id: string
  setIdleCallback: () => void
}

export const QuestionComponent = ({ type, ...props }: Props) => {
  if (!QuestionTypes[type]) return null

  const Component = QuestionTypes[type]
  return <Component {...props} />
}
