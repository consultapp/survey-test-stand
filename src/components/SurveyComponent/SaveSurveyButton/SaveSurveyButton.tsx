import { useSurveyContext } from '@/context/SurveyContext'
import { COLOR_PRIMARY } from '@/fixtures/theme'
import { Button } from '@mui/material'
import { useCallback, useMemo } from 'react'

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
    <Button
      variant="outlined"
      sx={{ color: COLOR_PRIMARY, borderColor: COLOR_PRIMARY }}
      onClick={emitSaveEvent}
    >
      Сохранить
    </Button>
  )
}
