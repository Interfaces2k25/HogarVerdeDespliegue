import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <a
        href="#main-content"
        className="z-50 px-4 py-2 text-white bg-blue-700 rounded sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4"
      >
        Saltar a los productos
      </a>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </>
  </StrictMode>,
)
