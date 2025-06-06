type VariantsType = 'slider' | 'number' | 'checkbox' | 'radio' | 'text'

type ElmaProps = {
  root: HTMLDivElement | null
  data?: IQuestions
  timer?: ITimer
  changeHandler?: (data: IQuestions) => void
  completeHandler?: () => void
}

type IBlocks = IBlock[]
type IQuestions = IQuestion[]
type ID = string
type VariantID = ID
type ParentID = ID
type TSeconds = number

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
  isRequired?: boolean
  visibilityFilter?: VisibilityFilter
}

interface ITimer {
  time?: TSeconds
  description?: string
  saveCallback?: (time: TSeconds) => void
}

interface ISliderVariant {
  id: VariantID
  from: number
  to: number
  step: number
  labels: { value: number; label: string }[]
  value?: number
}

interface INumberVariant {
  id: VariantID
  label: string
  value?: number
}

interface ICheckVariant {
  id: VariantID
  label: string
  value?: boolean
  isExclusive?: boolean
}

interface IRadioVariant {
  id: VariantID
  label: string
  value?: boolean
}
interface ITextVariant {
  id: VariantID
  text: string
}

type SurveyQuestionElement = ({ id }: Props) => JSX.Element | undefined

type VisibilityFilterType = 'range' | 'matches'

type VisibilityFilterRange = {
  parentId: ParentID
  type: Extract<VisibilityFilterType, 'range'>
  range: { from: number; to: number }
}

type VisibilityFilterMatches = {
  parentId: ParentID
  type: Extract<VisibilityFilterType, 'matches'>
  matches: VariantID[]
}

type VisibilityFilter = VisibilityFilterRange | VisibilityFilterMatches
