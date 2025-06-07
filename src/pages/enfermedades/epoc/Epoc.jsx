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

  useEffect(() => {
    const isNestedRoute = location.pathname !== 'epoc' && !location.pathname.endsWith('epoc');
    setShowContent(isNestedRoute);
    
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
    </div>
  );
};

export default Epoc;