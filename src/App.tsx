import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core'
import { theme } from './fixtures/theme'
import { SurveyComponent } from './components/SurveyComponent'
import { useElmaData } from './context/ElmaContext/hooks'

function App() {
  const data = useElmaData()

  // { root }: { root: HTMLDivElement | null }
  // const getRootElement = () =>
  //   typeof window === 'undefined' || root === null ? undefined : root

  // console.log('root:', getRootElement())

  return (
    <MantineProvider
      // getRootElement={getRootElement}
      // cssVariablesSelector={`#${root?.id}`}
      // withGlobalClasses={false}
      // defaultColorScheme="light"
      forceColorScheme="light"
      theme={theme}
    >
      <SurveyComponent questions={data} key={`SurveyComponent`} />
    </MantineProvider>
  )
}

export default App
