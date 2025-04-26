import './Enfermedades.scss';
import { NavLink } from 'react-router'; // Corregí a react-router-dom

import TuberculosisImg from '../../assets/tuberculosis2.png';
import EPOCImg from '../../assets/EPOC2.png';
import AsmaImg from '../../assets/asma2.png';
// import BackgroundImg from '../../assets/EnfermedadLung.png'; // Importamos el fondo

const Enfermedades = () => {
  return (
    <div className="enfermedades-page">
      <section className="diseases-hero">
        {/* Fondo animado */}
        {/* <img src={BackgroundImg} alt="Fondo Pulmón" className="background-img" /> */}

        <div className="hero-content">
          <h1>Enfermedades Pulmonares</h1>
          <p>Conoce más sobre las principales enfermedades que afectan los pulmones y cómo prevenirlas</p>
          {/* Botón opcional */}
          {/* <NavLink to="/explorar" className="explore-btn">Explorar</NavLink> */}
        </div>
      </section>

      {/* Grid de Enfermedades */}
      <section className="diseases">
        <div className="container">
          <div className="disease-card">
            <div className="card-image">
              <img src={TuberculosisImg} alt="Tuberculosis Pulmonar" />
            </div>
            <div className="card-content">
              <NavLink to="/tuberculosis/que-es" className="learn-more-btn">
                <h2>Tuberculosis</h2>
                Ver detalles →
              </NavLink>
            </div>
          </div>

          <div className="disease-card">
            <div className="card-image">
              <img src={EPOCImg} alt="Enfermedad Pulmonar Obstructiva Crónica" />
            </div>
            <div className="card-content">
              <NavLink to="/epoc/que-es" className="learn-more-btn">
                <h2>EPOC</h2>
                Ver detalles →
              </NavLink>
            </div>
          </div>

          <div className="disease-card">
            <div className="card-image">
              <img src={AsmaImg} alt="Asma Bronquial" />
            </div>
            <div className="card-content">
              <NavLink to="/asma/que-es" className="learn-more-btn">
                <h2>Asma</h2>
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
