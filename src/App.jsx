import { Navigate,  Route, Routes } from 'react-router';

import About from './pages/about/About.jsx';
import Home from './pages/home/Home.jsx';
import Layout from './layout/Layout.jsx';
import Quiz from './pages/quiz/Quiz.jsx';
import Enfermedades from './pages/enfermedades/Enfermedades.jsx';
import Login from './pages/auth/Login.jsx';
import Start from './pages/quiz/components/QuizComponent.jsx';
import Podio from './pages/quiz/components/Leaderboard.jsx';
import Tabla from './pages/quiz/components/FullLeaderboard.jsx';
import Resultado from './pages/quiz/components/QuizResults.jsx';
import Mapa from './pages/mapa/Mapa.jsx';

import Epoc from './pages/enfermedades/epoc/Epoc.jsx';
import Asma from './pages/enfermedades/asma/Asma.jsx';
import Description from './pages/enfermedades/epoc/descripcion/Descripcion.jsx';
import Sintomas from './pages/enfermedades/epoc/sintomas/Sintomas.jsx';
import Tratamiento from './pages/enfermedades/epoc/tratamiento/Tratamiento.jsx';
import Prevencion from './pages/enfermedades/epoc/prevencion/Prevencion.jsx';

import AsmaDescription from './pages/enfermedades/asma/descripcion/Descripcion.jsx';
import AsmaSintomas from './pages/enfermedades/asma/sintomas/Sintomas.jsx';
import AsmaTratamiento from './pages/enfermedades/asma/tratamiento/Tratamiento.jsx';
import AsmaPrevencion from './pages/enfermedades/asma/prevencion/Prevencion.jsx';


import Tuberculosis from './pages/enfermedades/tuberculosis/Tuberculosis.jsx';
import TbcDescription from './pages/enfermedades/tuberculosis/descripcion/Descripcion.jsx';
import TbcSintomas from './pages/enfermedades/tuberculosis/sintomas/Sintomas.jsx';
import TbcTratamiento from './pages/enfermedades/tuberculosis/tratamiento/Tratamiento.jsx';
import TbcPrevencion from './pages/enfermedades/tuberculosis/prevencion/Prevencion.jsx';

function App() {
  return (
    <Routes>
      {/* Ruta de Login fuera del Layout */}
      <Route path="/login" element={<Login />} />
      <Route path="/quiz/start" element={<Start />} />
        
      
      {/* Rutas dentro del Layout */}
      <Route element={<Layout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/leaderboard" element={<Podio />} />
        <Route path="/leaderboard/full" element={<Tabla />} />
        <Route path="/quiz/results" element={<Resultado />} />
        <Route path="/mapa" element={<Mapa />} />


        <Route path="/about" element={<About />} />
        <Route path="/enfermedades" element={<Enfermedades />} />
        <Route path="/epoc" element={<Epoc />}>
          <Route index element={<Navigate to="que-es" replace />} />
          <Route path="que-es" element={<Description />} />
          <Route path="sintomas" element={<Sintomas />} />
          <Route path="tratamiento" element={<Tratamiento />} />
          <Route path="prevencion" element={<Prevencion />} />
        </Route>
        <Route path="/asma" element={<Asma />}>
          <Route index element={<Navigate to="que-es" replace />} />
          <Route path="que-es" element={<AsmaDescription />} />
          <Route path="sintomas" element={<AsmaSintomas />} />
          <Route path="tratamiento" element={<AsmaTratamiento />} />
          <Route path="prevencion" element={<AsmaPrevencion />} />
        </Route>
        <Route path="/tuberculosis" element={<Tuberculosis />}>
          <Route index element={<Navigate to="que-es" replace />} />
          <Route path="que-es" element={<TbcDescription />} />
          <Route path="sintomas" element={<TbcSintomas />} />
          <Route path="tratamiento" element={<TbcTratamiento />} />
          <Route path="prevencion" element={<TbcPrevencion />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
