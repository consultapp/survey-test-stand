import { MantineProvider, Stack } from '@mantine/core'
import { theme } from './fixtures/theme'
import { SurveyComponent } from './components/SurveyComponent'
import { useElmaData } from './context/ElmaContext/hooks'
import CompleteComponent from './components/CompleteComponent/CompleteComponent'
import './styles.css'
import { TimerComponent } from './components/TimerComponent/TimerComponent'

function App({ root }: { root: HTMLDivElement | null }) {
  const data = useElmaData()

  return (
    <MantineProvider
      defaultColorScheme="light"
      forceColorScheme="light"
      theme={theme}
    >
      <Stack>
        <TimerComponent />
        <SurveyComponent questions={data} key={`SurveyComponent`} />
        <CompleteComponent root={root} />
      </Stack>
    </MantineProvider>
  )
}

export default App
