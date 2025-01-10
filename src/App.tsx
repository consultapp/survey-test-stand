import { MantineProvider } from '@mantine/core'
import { theme } from './fixtures/theme'
import { SurveyComponent } from './components/SurveyComponent'
import { useElmaData } from './context/ElmaContext/hooks'
import { useCallback } from 'react'
import './styles.css'

function App({ root }: { root: HTMLDivElement | null }) {
  const data = useElmaData()

  const getRootElement = useCallback(
    () => (typeof window === 'undefined' || root === null ? undefined : root),
    [root]
  )

  console.log('root:', getRootElement())

  return (
    <MantineProvider
      defaultColorScheme="light"
      forceColorScheme="light"
      theme={theme}
    >
      <SurveyComponent questions={data} key={`SurveyComponent`} />
    </MantineProvider>
  )
}

export default App
