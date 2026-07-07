import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CruxesApp from './CruxesApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CruxesApp />
  </StrictMode>,
)
