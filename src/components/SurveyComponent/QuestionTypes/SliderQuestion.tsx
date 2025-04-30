import { useQuestion } from '@/context/SurveyContext/hooks'
import { useSurveyContextDispatch } from '@/context/SurveyContext'
import { VariantsType } from '@/fixtures/variantsType'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { Container, Slider } from '@mantine/core'
import {
  useStatusById,
  useStatusContextDispatch,
  useUpdateStatus,
} from '@/context/StatusContext/hooks'
import { Status } from '@/fixtures/status'
import { SliderLabelComponent } from '@/components/SliderLabelComponent/SliderLabelComponent'
import { testIsApproved } from '@/context/StatusContext/functions'

type Props = { id: string }

export const SliderQuestion = ({ id }: Props) => {
  const question = useQuestion(id)
  const dispatch = useSurveyContextDispatch()
  const status = useStatusById(id)
  const statusDispatch = useStatusContextDispatch()
  const [idle, setIdle] = useState(status === Status.idle)
  const updateStatus = useUpdateStatus()

  const isApproved = testIsApproved(question)

  const handleChange = useCallback(
    (value: number) => {
      dispatch({
        type: `set${VariantsType.number}Value`,
        payload: { id, value },
      })
      if (idle) setIdle(false)
    },
    [dispatch, id, idle]
  )

  useEffect(() => {
    if (question && !idle) updateStatus(question, statusDispatch)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isApproved, idle])

  const variant = (
    (question?.variants ?? {
      to: 10,
      from: 0,
      step: 1,
      value: 0,
    }) as ISliderVariant[]
  )[0]

  const labels: {
    value: number
    label: string | React.ReactElement
  }[] = useMemo(
    () =>
      (variant.to - variant.from) / variant.step > 15
        ? variant.labels
        : new Array((variant.to - variant.from) / variant.step + 1)
            .fill(null)
            .map((_, i) => ({
              label: (variant.from + i * variant.step).toString(),
              value: variant.from + i * variant.step,
            })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [id]
  )

  variant.labels.forEach((item) => {
    const index = labels.findIndex((l) => l.value === item.value)
    labels[index] = {
      ...item,
      label: <SliderLabelComponent label={item.label} value={item.value} />,
    }
  })

  const [value, setValue] = useState(variant.value)

  return (
    <Container m="md" size="70%" pb="lg">
      <Slider
        ml="lg"
        mb="md"
        value={value}
        step={variant.step}
        marks={labels}
        min={variant.from}
        max={variant.to}
        onChange={(v) => {
          setValue(v)
        }}
        onChangeEnd={handleChange}
      />
    </Container>
  )
}
