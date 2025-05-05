import { Button, MantineProvider, Stack } from '@mantine/core'
import { theme } from './fixtures/theme'
import { SurveyComponent } from './components/SurveyComponent'
import { useElmaData } from './context/ElmaContext/hooks'
import CompleteComponent from './components/CompleteComponent/CompleteComponent'
import './styles.css'
import { TimerComponent } from './components/TimerComponent/TimerComponent'
import { useState } from 'react'

function App({ root }: { root: HTMLDivElement | null }) {
  const data = useElmaData()
  const [s, ss] = useState(true)

  return (
    <MantineProvider
      defaultColorScheme="light"
      forceColorScheme="light"
      theme={theme}
    >
      <Stack>
        <Button onClick={() => ss(!s)}>Hide</Button>
        {s && <TimerComponent />}
        <SurveyComponent questions={data} key={`SurveyComponent`} />
        <CompleteComponent root={root} />
      </Stack>
    </MantineProvider>
  )
}

export default App
