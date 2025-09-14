import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Site from './site/App.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Site />
  </React.StrictMode>
)
