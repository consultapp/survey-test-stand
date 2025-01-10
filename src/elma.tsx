import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ElmaContext } from './context/ElmaContext/index.ts'
import { mockBlocks } from './fixtures/mockBlocks.ts'
import { ErrorProvider } from './context/ErrorContext/ErrorContext.tsx'

function reactRender({
  root,
  data = mockBlocks,
  changeHandler,
  submitHandler,
}: ElmaProps) {
  if (root)
    createRoot(root).render(
      <StrictMode>
        <ElmaContext.Provider value={{ data, changeHandler, submitHandler }}>
          <ErrorProvider errors={{ '4': true }}>
            <App root={root} />
          </ErrorProvider>
        </ElmaContext.Provider>
      </StrictMode>
    )
}
export { reactRender }
