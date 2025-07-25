import { BrowserRouter } from 'react-router'
import { createRoot } from 'react-dom/client'
import App from './App';

import './App.scss'


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
      <App />
  </BrowserRouter>
);