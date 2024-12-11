type VariantsType = 'slider' | 'number' | 'checkbox' | 'radio' | 'text'

type ElmaProps = {
  root: HTMLDivElement | null
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: IQuestions
  changeHandler?: (data: IQuestions) => void
}

type IBlocks = IBlock[]
type IQuestions = IQuestion[]
type ID = string

interface IBlock {
  id: ID
  name: string
  helper_text?: string
  sequence?: number
  questions: IQuestions
}

interface IQuestion {
  id: ID
  block: ID
  type: VariantsType
  name: string
  helper_text: string | null
  sequence: number
  variants:
    | ISliderVariant[]
    | INumberVariant[]
    | ICheckVariant[]
    | IRadioVariant[]
    | ITextVariant[]
  checksum?: number // если вопрос типа 'number' и нужно выполнить валидацию, что сумма чисел равна определенному значению
  blockSequence: number
}

interface ISliderVariant {
  from: number
  to: number
  step: number
  labels: { value: number; label: string }[]
  value?: number
}

interface INumberVariant {
  label: string
  value?: number
}

interface ICheckVariant {
  label: string
  value?: boolean
}

interface IRadioVariant {
  label: string
  value?: boolean
}
interface ITextVariant {
  text: string
}

type SurveyQuestionElement = ({ id }: Props) => JSX.Element | undefined
