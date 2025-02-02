import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AuthProvider } from './context/AuthContext.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Router from './router.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Router />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
