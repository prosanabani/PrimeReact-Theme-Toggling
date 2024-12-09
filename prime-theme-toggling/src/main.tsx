import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';


createRoot(document.getElementById('root')!).render(
  <PrimeReactProvider>
  <StrictMode>
    <App />
  </StrictMode>,
  </PrimeReactProvider>
)
