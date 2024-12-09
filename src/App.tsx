import { SurveyContainer } from './components/SurveyComponent'
import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core'
import { theme } from './fixtures/theme'

function App() {
  return (
    <MantineProvider theme={theme}>
      <SurveyContainer />
    </MantineProvider>
  )
}

export default App
