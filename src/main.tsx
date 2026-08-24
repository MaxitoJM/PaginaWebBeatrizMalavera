import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Solo activamos las apariciones al hacer scroll si el navegador puede
// detectarlas; de lo contrario el contenido se muestra sin animación.
if (typeof IntersectionObserver !== 'undefined') {
  document.documentElement.classList.add('reveal-ready');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
