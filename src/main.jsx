import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App"
import InlineCss from './InlineCss'
import ExternalCss from './ExternalCss'
import ModuleCss from './ModuleCss'
import StyleComponents from './StyleComponents'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <StyleComponents />
  </StrictMode>,
)

