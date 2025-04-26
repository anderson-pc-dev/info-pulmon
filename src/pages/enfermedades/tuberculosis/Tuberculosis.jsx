import { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router';
import ModelQueEs from '../../../components/tuberculosis/ModelQueEs.jsx';
import ModelSintomas from '../../../components/tuberculosis/ModelSintomas.jsx';
import ModelTratamiento from '../../../components/tuberculosis/ModelTratamiento.jsx';
import ModelPrevencion from '../../../components/tuberculosis/ModelPrevencion.jsx';

const Tuberculosis = () => {
  const location = useLocation();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Verificar si estamos en una ruta anidada (no en la raíz)
    const isNestedRoute = location.pathname !== 'tuberculosis' && !location.pathname.endsWith('tuberculosis');
    setShowContent(isNestedRoute);
  
    // Scroll suave al contenido cuando se muestra
    if (isNestedRoute) {
      setTimeout(() => {
        const contentElement = document.querySelector('.epoc-outlet-wrapper');
        if (contentElement) {
          contentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300); // Espera a que la animación comience
    }
  }, [location, location.pathname]);
    return (
      <div className="epoc-container">
        <div className="epoc-top-section">
          <div className="epoc-sidebar">
            <h2>Tuberculosis</h2>
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
              if (location.pathname === '/tuberculosis/que-es') {
                return <ModelQueEs />;
              } else if (location.pathname === '/tuberculosis/sintomas') {
                 return <ModelSintomas />;
               } else if (location.pathname === '/tuberculosis/tratamiento') {
                 return <ModelTratamiento />;
               } else if (location.pathname === '/tuberculosis/prevencion') {
                 return <ModelPrevencion />;
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
    
    export default Tuberculosis;