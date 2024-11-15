import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  { Global } from './global.ts'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Global></Global>
    <App />
  </StrictMode>
);