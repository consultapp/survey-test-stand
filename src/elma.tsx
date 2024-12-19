import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ElmaContext } from './context/ElmaContext/index.ts'
import { mockBlocks } from './fixtures/mockBlocks.ts'

function reactRender({ root, data = mockBlocks, changeHandler }: ElmaProps) {
  window?.document
    .querySelector('html')
    ?.setAttribute('data-mantine-color-scheme', 'light')

  if (root)
    createRoot(root).render(
      <StrictMode>
        <ElmaContext.Provider value={{ data, changeHandler }}>
          <App />
        </ElmaContext.Provider>
      </StrictMode>
    )
}
export { reactRender }
