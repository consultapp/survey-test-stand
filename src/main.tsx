import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.querySelector(`.surveyQuizRoot`)!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
