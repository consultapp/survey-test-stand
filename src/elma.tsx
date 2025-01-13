import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ElmaContext } from './context/ElmaContext/index.ts'
import { mockBlocks } from './fixtures/mockBlocks.ts'
import { StatusProvider } from './context/StatusContext/StatusContext.tsx'
import { Status } from './fixtures/status.ts'
import { TStatusContext } from './context/StatusContext/index.ts'
import { log } from './utils.ts'

function reactRender({
  root,
  data = mockBlocks,
  changeHandler,
  completeHandler,
}: ElmaProps) {
  const sortedData = data.toSorted((a, b) => a.sequence - b.sequence)
  log('sortedData', sortedData)
  if (root)
    createRoot(root).render(
      <StrictMode>
        <ElmaContext.Provider
          value={{
            data: sortedData,
            changeHandler,
            completeHandler,
          }}
        >
          <StatusProvider
            statuses={
              Object.fromEntries(
                data.map((item) => [item.id, Status.idle])
              ) as TStatusContext
            }
          >
            <App root={root} />
          </StatusProvider>
        </ElmaContext.Provider>
      </StrictMode>
    )
}
export { reactRender }
