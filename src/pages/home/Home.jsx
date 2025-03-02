import React from 'react';
import './Home.css'; 
import { NavLink } from 'react-router';
import LeafIcon from '../../assets/virus.png';
import PawIcon from '../../assets/heart.png';
import LightbulbIcon from '../../assets/document.png';
import CtaImage from '../../assets/question.png';

const Home = () => {
  return (
    <div className="home-page">
      {/* Sección Hero */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Tu Salud en 3D: Explora y Aprende sobre Enfermedades de los Pulmones y cómo Prevenirlas
          </h1>
          <p className="hero-description">
            Bienvenido a nuestra plataforma interactiva. Aquí podrás aprender sobre enfermedades de los pulmones,
            explorando sus síntomas, tratamientos y prevención de forma dinámica y visual. Sumérgete en una
            experiencia educativa única y descubre cómo cuidar tu salud pulmonar.
          </p>
          <NavLink to="/about" className="hero-button">
            Comenzar Ahora
          </NavLink>
        </div>
      </section>

      {/* Sección de Información */}
      <section className="info-section">
        <div className="container">
          <h2 className="info-title">¿Qué Aprenderás?</h2>
          <div className="info-grid">
            <div className="info-card">
              <img src={LeafIcon} alt="Flora" className="icon" />
              <h3>Enfermedades</h3>
              <p>
                Conoce las enfermedades más comunes en los pulmones.
              </p>
            </div>
            <div className="info-card">
              <img src={PawIcon} alt="Fauna" className="icon" />
              <h3>Tratamientos</h3>
              <p>
                Conoce como identificar los sintomas y las opciones de tratamiento disponibles para cada enfermedad.
              </p>
            </div>
            <div className="info-card">
              <img src={LightbulbIcon} alt="Datos Curiosos" className="icon" />
              <h3>Prevención</h3>
              <p>
                Aprende cómo prevenir enfermedades pulmonares.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Llamado a la Acción */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">¿Listo para poner a prueba lo aprendido?</h2>
          <img src={CtaImage} alt="Imagen de llamado a la acción" className="cta-image" />
          <p className="cta-description">
            Demuestra lo que has aprendido sobre las enfermedades pulmonares y cómo prevenirlas. 
            ¡Completa nuestro quiz y descubre cuánto sabes!
          </p>
          <NavLink to="/quiz" className="cta-button">
            Intentar Quiz
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Home;