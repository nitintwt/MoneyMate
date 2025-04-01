import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {NextUIProvider} from '@nextui-org/react'
import { CookiesProvider } from "react-cookie";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CookiesProvider>
      <NextUIProvider>
      <App />
      </NextUIProvider>
    </CookiesProvider>
  </StrictMode>,
)
