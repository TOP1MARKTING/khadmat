import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { initFirebaseAnalytics, isFirebaseConfigured } from '@/lib/firebase'

if (isFirebaseConfigured()) {
  void initFirebaseAnalytics()
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
