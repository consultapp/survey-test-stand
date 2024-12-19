import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core'
import { theme } from './fixtures/theme'
import { SurveyComponent } from './components/SurveyComponent'
import { useElmaData } from './context/ElmaContext/hooks'

function App({ root }: { root: HTMLDivElement | null }) {
  const data = useElmaData()

  const getRootElement = () =>
    typeof window === 'undefined' || root === null ? undefined : root

  console.log('first', getRootElement())

  return (
    <MantineProvider
      // getRootElement={getRootElement}
      withGlobalClasses={false}
      defaultColorScheme="light"
      forceColorScheme="light"
      // cssVariablesSelector={`#${root?.id}`}
      theme={theme}
    >
      <SurveyComponent questions={data} key={`SurveyComponent`} />
    </MantineProvider>
  )
}

export default App
