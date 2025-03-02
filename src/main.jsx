import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/home/Home.jsx';
import Quiz from './pages/quiz/Quiz.jsx';
import About from './pages/about/About.jsx';
import Layout from './layout/layout.jsx';

createRoot(document.getElementById("root")).render(
  // <App />
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);