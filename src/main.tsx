import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './css/style.css';
import './css/satoshi.css';
import 'jsvectormap/dist/css/jsvectormap.css';
import 'flatpickr/dist/flatpickr.min.css';
import { AuthProvider } from './context/AuthContext';
import Router from './router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Router />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
);
