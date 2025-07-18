import { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router';
import LungsHeart from './models-3d/LungsHeart';
import BreathingHard from './models-3d/BreathingHard';
import RotateInhaler from './models-3d/RotateInhaler';
import PillBottle  from './models-3d/PillBottle';


const Asma = () => {
  const location = useLocation();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Verificar si estamos en una ruta anidada (no en la raíz)
    const isNestedRoute = location.pathname !== 'asma' && !location.pathname.endsWith('asma');
    setShowContent(isNestedRoute);
  }, [location, location.pathname]);
  return (
    <div className="epoc-container">
      <div className="epoc-top-section">
        <div className="epoc-sidebar">
          <h2>Asma</h2>
          <NavLink
            to="que-es"
            className={({ isActive }) =>
              isActive ? "epoc-button selected" : "epoc-button"
            }
          >
            ¿Qué es la enfermedad?
          </NavLink>
          <NavLink
            to="sintomas"
            className={({ isActive }) =>
              isActive ? "epoc-button selected" : "epoc-button"
            }
          >
            Síntomas
          </NavLink>
          <NavLink
            to="tratamiento"
            className={({ isActive }) =>
              isActive ? "epoc-button selected" : "epoc-button"
            }
          >
            Tratamiento
          </NavLink>
          <NavLink
            to="prevencion"
            className={({ isActive }) =>
              isActive ? "epoc-button selected" : "epoc-button"
            }
          >
            Prevención y cuidados
          </NavLink>
        </div>
        <div className="epoc-image-container">
          {(() => {
            if (location.pathname === '/asma/que-es') {
              return <LungsHeart />;
            }
            if (location.pathname === '/asma/sintomas') {
              return <BreathingHard />;
            }
            if (location.pathname === '/asma/tratamiento') {
              return <RotateInhaler />;
            }
            if (location.pathname === '/asma/prevencion') {
              return <PillBottle />;
            }
            return null;
          })()}
        </div>
      </div>

      {showContent && (
        <div className="epoc-outlet-wrapper">
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default Asma;