import './Epoc.scss';

import { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router';
import LungModel from './models-3d/LungTrasparent';
import BodyCough from './models-3d/BodyCough';
import Text from './texts/TextSintoma';

const Epoc = () => {
  const location = useLocation();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Verificar si estamos en una ruta anidada (no en la raíz)
    const isNestedRoute = location.pathname !== 'epoc' && !location.pathname.endsWith('epoc');
    setShowContent(isNestedRoute);
    
    // Scroll suave al contenido cuando se muestra
    if (isNestedRoute) {
      setTimeout(() => {
        const contentElement = document.querySelector('.epoc-outlet-wrapper');
        if (contentElement) {
          contentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    }
  }, [location.pathname]);

  return (
    <div className="epoc-container">
      <div className="epoc-top-section">
        <div className="epoc-sidebar">
          <h2>EPOC</h2>
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
              if (location.pathname === '/epoc/que-es') {
                return <LungModel />;
              }
              if (location.pathname === '/epoc/sintomas') {
                return <BodyCough />;
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

export default Epoc;