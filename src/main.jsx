import { BrowserRouter } from 'react-router'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react';
import App from './App';

import './App.scss'


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);