import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { initEmailJS } from './lib/emailjs';
import './index.css';
import App from './App.tsx';

initEmailJS();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
