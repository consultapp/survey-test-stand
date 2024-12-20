import { MantineProvider } from '@mantine/core'
import { theme } from './fixtures/theme'
import { SurveyComponent } from './components/SurveyComponent'
import { useElmaData } from './context/ElmaContext/hooks'
import { MantineRootStyleComponent } from './components/MantineRootStyleComponent'
import { useCallback } from 'react'

function App({ root }: { root: HTMLDivElement | null }) {
  const data = useElmaData()

  const getRootElement = useCallback(
    () => (typeof window === 'undefined' || root === null ? undefined : root),
    [root]
  )

  console.log('root:', getRootElement())

  return (
    <MantineRootStyleComponent>
      <MantineProvider
        getRootElement={getRootElement}
        cssVariablesSelector={`#${root?.id}`}
        withGlobalClasses={false}
        defaultColorScheme="light"
        forceColorScheme="light"
        theme={theme}
      >
        <SurveyComponent questions={data} key={`SurveyComponent`} />
      </MantineProvider>
    </MantineRootStyleComponent>
  )
}

export default App
