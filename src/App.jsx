import { Route, Routes } from 'react-router';

import About from './pages/about/About.jsx';
import Home from './pages/home/Home.jsx';
import Layout from './layout/Layout.jsx';
import Quiz from './pages/quiz/Quiz.jsx';

function App() {
  return (
    <Layout>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>    
  );
}

export default App;
