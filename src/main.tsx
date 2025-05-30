import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// 👉 Vercel Analytics
import { inject } from '@vercel/analytics';
import { reportWebVitals } from '@vercel/speed-insights';
inject();
reportWebVitals();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
