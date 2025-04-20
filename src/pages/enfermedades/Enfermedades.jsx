import React from 'react';
import './Enfermedades.scss';
import { Outlet, NavLink } from 'react-router';

// Importar imágenes (asegúrate de tener estas imágenes en tu carpeta assets)
import TuberculosisImg from '../../assets/tuberculosis2.png';
import EPOCImg from '../../assets/EPOC2.png';
import AsmaImg from '../../assets/asma2.png';
import FibrosisImg from '../../assets/fibrosis2.png';

const Enfermedades = () => {
    return (
      <div className="enfermedades-page">
        <section className="diseases-hero">
            <div className="hero-content">
              <h1>Enfermedades Pulmonares</h1>
              <p>Conoce más sobre las principales enfermedades que afectan los pulmones y cómo prevenirlas</p>
            </div>
        </section>
  
        {/* Diseases Grid */}
        <section className="diseases">
          <div className="container">
          <div className="disease-card">
            <div className="card-image">
              <img src={TuberculosisImg} alt="Tuberculosis Pulmonar" />
            </div>
            <div className="card-content">
              <h2>Tuberculosis</h2>
              <NavLink to="/tuberculosis" className="learn-more-btn">
                Ver detalles →
              </NavLink>
            </div>
          </div>
  
          <div className="disease-card">
            <div className="card-image">
              <img src={EPOCImg} alt="Enfermedad Pulmonar Obstructiva Crónica" />
            </div>
            <div className="card-content">
              <h2>EPOC</h2>
              <NavLink to="/epoc" className="learn-more-btn">
                Ver detalles →
              </NavLink>
            </div>
          </div>
  
          <div className="disease-card">
            <div className="card-image">
              <img src={AsmaImg} alt="Asma Bronquial" />
            </div>
            <div className="card-content">
              <h2>Asma</h2>
              <NavLink to="/asma" className="learn-more-btn">
                Ver detalles →
              </NavLink>
            </div>
          </div>
  
          <div className="disease-card">
            <div className="card-image">
              <img src={FibrosisImg} alt="Fibrosis Pulmonar" />
            </div>
            <div className="card-content">
              <h2>Fibrosis Pulmonar</h2>
              <NavLink to="/fibrosis" className="learn-more-btn">
                Ver detalles →
              </NavLink>
            </div>
          </div>
          </div>    
        </section>
      </div>
    );
  };
  
  export default Enfermedades;