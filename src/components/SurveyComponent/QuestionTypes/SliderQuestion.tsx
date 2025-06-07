import { useQuestion } from '@/context/SurveyContext/hooks'
import { useSurveyContextDispatch } from '@/context/SurveyContext'
import { VariantsType } from '@/fixtures/variantsType'
import { useCallback, useMemo, useState } from 'react'
import { Container, Slider } from '@mantine/core'
import { SliderLabelComponent } from '@/components/SliderLabelComponent/SliderLabelComponent'

type Props = { id: string; setIdleCallback: () => void }

export const SliderQuestion = ({ id, setIdleCallback }: Props) => {
  const question = useQuestion(id)
  const dispatch = useSurveyContextDispatch()

  const handleChange = useCallback(
    (value: number) => {
      dispatch({
        type: VariantsType.slider,
        payload: { id, value },
      })
      setIdleCallback()
    },
    [dispatch, id, setIdleCallback]
  )

  const variant = (
    (question?.variants ?? {
      to: 10,
      from: 0,
      step: 1,
      value: 0,
    }) as ISliderVariant[]
  )[0]

  const filteredLabels = useMemo(() => {
    return variant.labels.filter(
      (label) => label.value >= variant.from && label.value <= variant.to
    )
  }, [variant.from, variant.to, variant.labels])

  const labels: {
    value: number
    label: string | React.ReactElement
  }[] = useMemo(() => {
    const baseLabels = [
      ...filteredLabels,
      ...new Array((variant.to - variant.from) / variant.step + 1)
        .fill(null)
        .map((_, i) => {
          const value = variant.from + i * variant.step
          if (!Number.isInteger(value)) return null

          return {
            label: value.toString(),
            value: value,
          }
        })
        .filter((item) => item !== null),
    ]

    return baseLabels.map((label) => {
      const customLabel = filteredLabels.find(
        (item) => item.value === label.value
      )
      if (customLabel) {
        return {
          ...label,
          label: (
            <SliderLabelComponent
              label={customLabel.label}
              value={customLabel.value}
            />
          ),
        }
      }
      return label
    })
  }, [variant.from, variant.to, variant.step, filteredLabels])

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
