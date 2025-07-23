import './Epoc.scss';

import { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router';
import LungModel from './models-3d/LungTrasparent';
import BodyCough from './models-3d/BodyCough';
import Vaccine from './models-3d/Vaccine';  
import LungBronchi from './models-3d/LungBronchi';

const Epoc = () => {
  const location = useLocation();
  const [showContent, setShowContent] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const isNestedRoute = location.pathname !== 'epoc' && !location.pathname.endsWith('epoc');
    setShowContent(isNestedRoute);
  }, [location.pathname]);

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
              else if (location.pathname === '/epoc/sintomas') {
                return <BodyCough />;
              }
              else if (location.pathname === '/epoc/tratamiento') {
                return <Vaccine />;
              }
              else if (location.pathname === '/epoc/prevencion') {
                return <LungBronchi />;
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

export default Epoc;