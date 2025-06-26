import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppLogic from './AppLogic.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppLogic />
  </StrictMode>
);
