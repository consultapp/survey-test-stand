import { useSurveyContext } from '@/context/SurveyContext'
import { Button } from '@mantine/core'

import React from '@/react/react'
const { useCallback, useMemo } = React

export const SaveSurveyButton = () => {
  const ctx = useSurveyContext()

  const saveEvent = useMemo(
    () =>
      new CustomEvent('saveSurveyEvent', {
        detail: {
          survey: JSON.stringify(ctx),
        },
      }),
    [ctx]
  )

  const emitSaveEvent: React.MouseEventHandler<HTMLButtonElement> = useCallback(
    () => document.dispatchEvent(saveEvent),
    [saveEvent]
  )
  if (!ctx) return

  return (
    <Button variant="outlined" onClick={emitSaveEvent}>
      Сохранить
    </Button>
  )
}
