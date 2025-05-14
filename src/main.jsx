import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import Hello from './reactcomp1.jsx'
import Statement
 from './reactcomp2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Hello></Hello>
    <Statement></Statement>
  </StrictMode>,
)
