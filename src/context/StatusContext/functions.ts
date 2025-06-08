export const testCheckBoxIsApproved = (question: IQuestion | undefined) =>
  Boolean(
    question &&
      question.type === 'checkbox' &&
      question.variants.reduce((acc, item) => acc || Boolean(item.value), false)
  )

export const testNumberIsApproved = (question: IQuestion | undefined) =>
  Boolean(
    question &&
      question.type === 'number' &&
      question.variants.reduce(
        (acc, item) => acc || Boolean(item.value),
        false
      ) &&
      question.variants.reduce((acc, item) => acc + (item.value ?? 0), 0) ===
        question.checksum
  )

export const testRadioIsApproved = (question: IQuestion | undefined) =>
  Boolean(
    question &&
      question.type === 'radio' &&
      question.variants.reduce((acc, item) => acc || Boolean(item.value), false)
  )

export const testSliderIsApproved = (question: IQuestion | undefined) =>
  Boolean(
    question &&
      question.type === 'slider' &&
      question.variants.reduce(
        (acc, item) => acc || item.value !== undefined,
        false
      )
  )

export const testTextIsApproved = (question: IQuestion | undefined) =>
  Boolean(
    question &&
      question.type === 'text' &&
      question.variants.reduce(
        (acc, item) =>
          acc || (item.text !== undefined && Boolean(item.text.trim())),
        false
      )
  )

//'slider' | 'number' | 'checkbox' | 'radio' | 'text'
export function testIsApproved(question: IQuestion | undefined): boolean {
  if (!question) return false

  if (!question.isRequired) return true

  switch (question.type) {
    case 'checkbox':
      return testCheckBoxIsApproved(question)
    case 'number':
      return testNumberIsApproved(question)
    case 'radio':
      return testRadioIsApproved(question)
    case 'slider':
      return testSliderIsApproved(question)
    case 'text':
      return testTextIsApproved(question)
    default:
      return false
  }
}
