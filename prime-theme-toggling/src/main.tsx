import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import { type APIOptions, PrimeReactProvider } from 'primereact/api';


const value: Partial<APIOptions> = {
  appendTo: 'self',
  ripple: true,
};


createRoot(document.getElementById('root')!).render(
  <PrimeReactProvider value={value}>
  <StrictMode>
    <App />
  </StrictMode>
  </PrimeReactProvider>
)
