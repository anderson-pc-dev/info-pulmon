import { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router';

const Asma = () => {
  const location = useLocation();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Verificar si estamos en una ruta anidada (no en la raíz)
    const isNestedRoute = location.pathname !== 'asma' && !location.pathname.endsWith('asma');
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