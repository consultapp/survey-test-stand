import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { log } from './utils.ts'

const getNode = () =>
  [...document.querySelectorAll(`.surveyQuizRoot`)].pop() || null

function initElmaReact() {
  let cnt = 0
  function tryInit() {
    const node = getNode()
    log('node', node)
    if (node) {
      createRoot(node).render(
        <StrictMode>
          <App />
        </StrictMode>
      )
      return
    }
    if (cnt++ > 20) return

    window.setTimeout(tryInit, 100)
  }
  tryInit()
}

initElmaReact()
