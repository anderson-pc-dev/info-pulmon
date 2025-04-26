import './Home.scss';
import { NavLink } from 'react-router';
import LeafIcon from '../../assets/virus.png';
import PawIcon from '../../assets/heart.png';
import GoogleIcon from '../../assets/google-icon.png';
import LightbulbIcon from '../../assets/document.png';
import CtaImage from '../../assets/pregunta.png';
import tuberculosis from '../../assets/tuberculosis.jpg';
import AsmaImg from '../../assets/asma.jpg';
import EPOCImg from '../../assets/epoc.png';

const Home = () => {
  return (
    <div className="home-page">
      {/* Sección Hero */}
      <section className="hero-section">
        <div className="animated-bubbles">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>


        <div className="hero-content">
          <div className="welcome-text">
            <h2>Bienvenido a</h2>
            <h1 className="app-title">INFOPULMÓN</h1>
          </div>

          <h2 className="hero-title">
            Tu Salud en 3D: Explora y Aprende sobre<br />
            Enfermedades de los Pulmones y cómo<br />
            Prevenirlas
          </h2>
          <NavLink to="/about" className="google-signin-btn">
            <img src={GoogleIcon} alt="Google logo" className="google-icon" />
            Registrate con Google
          </NavLink>
        </div>
      </section>

      {/* Sección de Información */}
      <section className="info-section">
        <div className="container">
          <h2 className="info-title">¿Qué Aprenderás?</h2>
          <div className="info-grid">
            <div className="info-card">
              <img src={LeafIcon} alt="Enfermedad" className="icon" />
              <h3>Enfermedades</h3>
              <p>
                Conoce las enfermedades más comunes en los pulmones.
              </p>
            </div>
            <div className="info-card">
              <img src={PawIcon} alt="Tratamiento" className="icon" />
              <h3>Tratamientos</h3>
              <p>
                Conoce como identificar los sintomas y las opciones de tratamiento disponibles para cada enfermedad.
              </p>
            </div>
            <div className="info-card">
              <img src={LightbulbIcon} alt="Prevenciòn" className="icon" />
              <h3>Prevención</h3>
              <p>
                Aprende cómo prevenir enfermedades pulmonares.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nueva Sección de Enfermedades */}
      <section className="diseases-section">
        <div className="container">
          <h2 className="section-title">Principales Enfermedades Pulmonares</h2>

          <div className="disease-card">
            <div className="disease-header">
              <img src={tuberculosis} alt="Tuberculosis" className="disease-icon" />
              <h3>Tuberculosis</h3>
            </div>
            <p>Enfermedad infecciosa causada por Mycobacterium tuberculosis, afecta principalmente los pulmones y se transmite por el aire.</p>
            <div className="symptoms">
              <h4>Síntomas más comunes:</h4>
              <ul>
                <li>Tos persistente (+3 semanas)</li>
                <li>Esputo con sangre</li>
                <li>Fiebre, sudores nocturnos</li>
              </ul>
            </div>
          </div>

          <div className="disease-card">
            <div className="disease-header">
              <img src={AsmaImg} alt="Asma" className="disease-icon" />
              <h3>Asma</h3>
            </div>
            <p>El asma es una enfermedad crónica que causa inflamación y estrechamiento de las vías respiratorias, dificultando la respiración.</p>
            <div className="symptoms">
              <h4>Síntomas más comunes:</h4>
              <ul>
                <li>Dificultad para respirar</li>
                <li>Silbidos al respirar</li>
                <li>Tos persistente (especialmente de noche)</li>
              </ul>
            </div>
          </div>

          <div className="disease-card">
            <div className="disease-header">
              <img src={EPOCImg} alt="EPOC" className="disease-icon" />
              <h3>EPOC</h3>
            </div>
            <p>La EPOC es una enfermedad crónica que obstruye el flujo de aire en los pulmones, dificultando la respiración.</p>
            <div className="symptoms">
              <h4>Síntomas más comunes:</h4>
              <ul>
                <li>Opresión en el pecho</li>
                <li>Cansancio extremo</li>
                <li>Infecciones respiratorias frecuentes</li>
              </ul>
            </div>
          </div>

          <NavLink to="/enfermedades" className="learn-more-btn">
            Aprender más
          </NavLink>
        </div>
      </section>

      {/* Sección de Llamado a la Acción */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">¡Pon a prueba tus conocimientos!</h2>
          <img src={CtaImage} alt="Imagen de llamado a la acción" className="cta-image" />
          <h2>Quiz</h2>
          <p className="cta-description">
            Demuestra lo que has aprendido sobre las enfermedades pulmonares y cómo prevenirlas.
            ¡Completa nuestro quiz y descubre cuánto sabes!
          </p>
          <NavLink to="/quiz" className="cta-button">
            Intentar
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Home;