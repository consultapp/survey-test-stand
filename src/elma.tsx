import React from '@/react/react.ts'
import ReactDOM from '@/react/react-dom.ts'
import App from './App.tsx'
import { ElmaContext } from './context/ElmaContext/index.ts'
import { mockBlocks } from './fixtures/mockBlocks.ts'

const { createRoot } = ReactDOM

function reactRender({ root, data = mockBlocks, changeHandler }: ElmaProps) {
  if (root)
    createRoot(root).render(
      <React.StrictMode>
        <ElmaContext.Provider value={{ data, changeHandler }}>
          <App />
        </ElmaContext.Provider>
      </React.StrictMode>
    )
}
export { reactRender }
