import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

function mountReact(node: HTMLDivElement) {
  createRoot(node).render(
    <StrictMode>
      <App />
    </StrictMode>
  )
}
export { mountReact }
