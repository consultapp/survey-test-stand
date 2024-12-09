import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ElmaContext } from './context/ElmaContext/index.ts'

function reactRender({ root, data, changeHandler }: ElmaProps) {
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
