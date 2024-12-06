import { useSurveyContext } from '@/context/SurveyContext'
import { SurveyQuestion } from '../SurveyQuestion/SurveyQuestion'
import { Box } from '@mui/material'
import { SaveSurveyButton } from '../SaveSurveyButton/SaveSurveyButton'

export const SurveyQuestions = () => {
  const ctx = useSurveyContext()
  console.log('ctx', ctx)
  return (
    <Box
      sx={{
        display: 'grid',
        gap: '1rem',
        border: '2px dotted black',
        borderRadius: '1rem',
        p: 2,
      }}
    >
      {!ctx && <div>Ошибка загрузки данных.</div>}
      {ctx && ctx.map(({ id }) => <SurveyQuestion id={id} key={id} />)}
      <Box sx={{ marginTop: '3rem' }}>
        <SaveSurveyButton />
      </Box>
    </Box>
  )
}
