import ReactDOMServer from 'react-dom/server'
import { StrictMode } from 'react'
import App from './App.jsx'

export function render(url) {
  const html = ReactDOMServer.renderToString(
    <StrictMode>
      <App url={url} />
    </StrictMode>
  )
  return { html }
}
