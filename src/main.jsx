import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Site from './site/App.jsx'

import Terms from "./site/Terms.jsx";
import Privacy from "./site/Privacy.jsx";
import OnePageSite from "./site/App.jsx";

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Site />
  </React.StrictMode>
)

<BrowserRouter>
  <Routes>
    <Route path="/" element={<OnePageSite />} />
    <Route path="/privacy" element={<Privacy />} />
    <Route path="/terms" element={<Terms />} />
  </Routes>
</BrowserRouter>
