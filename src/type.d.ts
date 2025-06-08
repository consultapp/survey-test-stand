type QuestionType = 'radio' | 'checkbox' | 'slider' | 'number' | 'text'

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

interface BaseQuestion {
  id: ID
  block: ID
  name: string
  helper_text: string | null
  sequence: number
  blockSequence: number
  isRequired?: boolean
  visibilityFilter?: VisibilityFilter
}

interface RadioQuestion extends BaseQuestion {
  type: Extract<QuestionType, 'radio'>
  variants: IRadioVariant[]
}

interface CheckboxQuestion extends BaseQuestion {
  type: Extract<QuestionType, 'checkbox'>
  variants: ICheckVariant[]
}

interface SliderQuestion extends BaseQuestion {
  type: Extract<QuestionType, 'slider'>
  variants: ISliderVariant[]
}

interface NumberQuestion extends BaseQuestion {
  type: Extract<QuestionType, 'number'>
  variants: INumberVariant[]
  checksum: number
}

interface TextQuestion extends BaseQuestion {
  type: Extract<QuestionType, 'text'>
  variants: ITextVariant[]
}

type IQuestion =
  | RadioQuestion
  | CheckboxQuestion
  | SliderQuestion
  | NumberQuestion
  | TextQuestion

interface ITimer {
  time?: TSeconds
  description?: string
  saveCallback?: (time: TSeconds) => void
}

interface ISliderVariant {
  id: VariantID
  type: Extract<QuestionType, 'slider'>
  from: number
  to: number
  step: number
  labels: { value: number; label: string }[]
  value?: number
}

interface INumberVariant {
  id: VariantID
  type: Extract<QuestionType, 'number'>
  label: string
  value?: number
}

interface ICheckVariant {
  id: VariantID
  type: Extract<QuestionType, 'checkbox'>
  label: string
  value?: boolean

  isChangeable?: boolean

  isExclusive?: boolean
}

interface IRadioVariant {
  id: VariantID
  type: Extract<QuestionType, 'radio'>
  label: string
  value?: boolean
}
interface ITextVariant {
  id: VariantID
  type: Extract<QuestionType, 'text'>
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
