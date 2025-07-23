import './Tuberculosis.scss';
import { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router';
import ModelQueEs from '../../../components/tuberculosis/ModelQueEs.jsx';
import ModelSintomas from '../../../components/tuberculosis/ModelSintomas.jsx';
import ModelTratamiento from '../../../components/tuberculosis/ModelTratamiento.jsx';
import ModelPrevencion from '../../../components/tuberculosis/ModelPrevencion.jsx';

const Tuberculosis = () => {
  const location = useLocation();
  const [showContent, setShowContent] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    // Verificar si estamos en una ruta anidada (no en la raíz)
    const isNestedRoute = location.pathname !== 'tuberculosis' && !location.pathname.endsWith('tuberculosis');
    setShowContent(isNestedRoute);
  }, [location, location.pathname]);

  // Efecto para controlar la visibilidad del botón de scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowScrollButton(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para hacer scroll hacia arriba
  const scrollToTop = () => {
    // Método más suave y compatible con diferentes navegadores
    const scrollToTopSmoothly = () => {
      const currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
      
      if (currentPosition > 0) {
        window.requestAnimationFrame(scrollToTopSmoothly);
        window.scrollTo(0, currentPosition - currentPosition / 8);
      }
    };

    // Intentar primero con scroll behavior smooth (navegadores modernos)
    try {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    } catch {
      // Fallback para navegadores más antiguos
      scrollToTopSmoothly();
    }
  };
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

        {/* Botón flotante para scroll hacia arriba */}
        {showScrollButton && (
          <button 
            className="scroll-to-top-button"
            onClick={scrollToTop}
            aria-label="Ir hacia arriba"
          >
            ↑
          </button>
        )}
      </div>
    );
  };
    
    export default Tuberculosis;