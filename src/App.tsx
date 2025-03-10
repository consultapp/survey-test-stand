import { MantineProvider } from '@mantine/core'
import { theme } from './fixtures/theme'
import { SurveyComponent } from './components/SurveyComponent'
import { useElmaData } from './context/ElmaContext/hooks'
import CompleteComponent from './components/CompleteComponent/CompleteComponent'
import './styles.css'

function App({ root }: { root: HTMLDivElement | null }) {
  const data = useElmaData()

  return (
    <MantineProvider
      defaultColorScheme="light"
      forceColorScheme="light"
      theme={theme}
    >
      <>
        <SurveyComponent questions={data} key={`SurveyComponent`} />
        <CompleteComponent root={root} />
      </>
    </MantineProvider>
  )
}

export default App
