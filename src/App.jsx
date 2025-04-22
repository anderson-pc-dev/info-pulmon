import { Route, Routes } from 'react-router';

import About from './pages/about/About.jsx';
import Home from './pages/home/Home.jsx';
import Layout from './layout/Layout.jsx';
import Quiz from './pages/quiz/Quiz.jsx';
import Enfermedades from './pages/enfermedades/Enfermedades.jsx';
import Epoc from './pages/enfermedades/epoc/Epoc.jsx';
import Asma from './pages/enfermedades/asma/Asma.jsx';
import Fibrosis from './pages/enfermedades/fibrosis/Fibrosis.jsx';
import Description from './pages/enfermedades/epoc/descripcion/Descripcion.jsx';
import Sintomas from './pages/enfermedades/epoc/sintomas/Sintomas.jsx';
import Tratamiento from './pages/enfermedades/epoc/tratamiento/Tratamiento.jsx';
import Prevencion from './pages/enfermedades/epoc/prevencion/Prevencion.jsx';

import Tuberculosis from './pages/enfermedades/tuberculosis/Tuberculosis.jsx';
import TbcDescription from './pages/enfermedades/tuberculosis/descripcion/Descripcion.jsx';
import TbcSintomas from './pages/enfermedades/tuberculosis/sintomas/Sintomas.jsx';
import TbcTratamiento from './pages/enfermedades/tuberculosis/tratamiento/Tratamiento.jsx';
import TbcPrevencion from './pages/enfermedades/tuberculosis/prevencion/Prevencion.jsx';

function App() {
  return (
    <Layout>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/about" element={<About />} />
        <Route path="/enfermedades" element={<Enfermedades />} />
        <Route path="/epoc" element={<Epoc />} >
          <Route path="que-es" element={<Description />} />
          <Route path="sintomas" element={<Sintomas />} />
          <Route path="tratamiento" element={<Tratamiento />} />
          <Route path="prevencion" element={<Prevencion />} />
        </Route>
        <Route path="/asma" element={<Asma />} />
        <Route path="/fibrosis" element={<Fibrosis />} />
        <Route path="/tuberculosis" element={<Tuberculosis />} >
          <Route path="que-es" element={<TbcDescription />} />
          <Route path="sintomas" element={<TbcSintomas />} />
          <Route path="tratamiento" element={<TbcTratamiento />} />
          <Route path="prevencion" element={<TbcPrevencion />} />
        </Route>
      </Routes>
    </Layout>    
  );
}

export default App;
