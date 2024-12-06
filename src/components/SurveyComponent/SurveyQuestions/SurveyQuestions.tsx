import { useSurveyContext } from '@/context/SurveyContext'
import { SurveyQuestion } from '../SurveyQuestion/SurveyQuestion'
import { Box } from '@mui/material'

export const SurveyQuestions = () => {
  const ctx = useSurveyContext()

  if (!ctx) return <div>Ошибка загрузки данных.</div>

  return (
    <Box
      sx={{
        display: 'grid',
        gap: '1rem',
        border: '1px solid black',
        borderRadius: '1rem',
        p: 2,
      }}
    >
      {ctx.map(({ id }) => (
        <SurveyQuestion id={id} key={id} />
      ))}
    </Box>
  )
}
