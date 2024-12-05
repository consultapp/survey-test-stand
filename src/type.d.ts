type VariantsType = "slider" | "number" | "checkbox" | "radio" | "text";

type IQuestions = IQuestion[];
type ID = string;

interface IQuestion {
  id: ID;
  block: string;
  type: VariantsType;
  name: string;
  helper_text?: string;
  variants:
    | ISliderVariant[]
    | INumberVariant[]
    | ICheckVariant[]
    | IRadioVariant
    | ITextVariant;
  checksum?: number; // если вопрос типа 'number' и нужно выполнить валидацию, что сумма чисел равна определенному значению
}

interface ISliderVariant {
  from: number;
  to: number;
  step: number;
  labels: { value: number; label: string }[];
  value?: number;
}

interface INumberVariant {
  label: string;
  value?: number;
}

interface ICheckVariant {
  label: string;
  value?: boolean;
}

interface IRadioVariant {
  label: string;
  value?: boolean;
}
interface ITextVariant {
  label: string;
  text?: boolean;
}
