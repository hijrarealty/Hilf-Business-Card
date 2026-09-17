import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Tokens and base styles load first so component CSS can override them.
import './index.css';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
