import { hydrateRoot, createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App.jsx'
import './index.css'

const container = document.getElementById('root')
const appElement = (
  <StrictMode>
    <App />
  </StrictMode>
)

if (container && container.hasChildNodes()) {
  hydrateRoot(container, appElement)
} else if (container) {
  createRoot(container).render(appElement)
}
