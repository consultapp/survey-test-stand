import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core'
import { theme } from './fixtures/theme'
import { SurveyComponent } from './components/SurveyComponent'
import { useElmaData } from './context/ElmaContext/hooks'

function App() {
  const data = useElmaData()
  return (
    <MantineProvider theme={theme}>
      <SurveyComponent questions={data} key={`SurveyComponent`} />
    </MantineProvider>
  )
}

export default App
