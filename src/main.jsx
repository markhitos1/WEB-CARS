import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CarSalesPage from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CarSalesPage />
  </StrictMode>,
)
