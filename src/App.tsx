import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core'
import { theme } from './fixtures/theme'
import { BlockComponent } from './components/BlockComponent'

function App() {
  return (
    <MantineProvider theme={theme}>
      <BlockComponent />
    </MantineProvider>
  )
}

export default App
