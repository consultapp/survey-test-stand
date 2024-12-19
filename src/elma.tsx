import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ElmaContext } from './context/ElmaContext/index.ts'
import { mockBlocks } from './fixtures/mockBlocks.ts'

function reactRender({ root, data = mockBlocks, changeHandler }: ElmaProps) {
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
