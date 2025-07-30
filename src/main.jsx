import { BrowserRouter } from 'react-router'
import { createRoot } from 'react-dom/client'
import App from './App';
import ScrollToTop from './components/ScrollToTop';

import './App.scss'


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
      <ScrollToTop />
      <App />
  </BrowserRouter>
);