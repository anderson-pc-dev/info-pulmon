import './About.scss';
import ImpactIllustration from '../../assets/impacto.jpg';
import MissionIllustration from '../../assets/EPOC-2.jpg';
import TeamImage from '../../assets/team.jpg';
import AppreciationImage from '../../assets/idea.jpg';
import Feature1Image from '../../assets/3d.png';
import Feature2Image from '../../assets/info.jpg';
import Feature3Image from '../../assets/exam.jpg';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="hero-content">
          <h1>Sobre Nosotros</h1>
          <p>Innovación educativa en salud respiratoria</p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="text-content">
            <h2>Nuestra Misión</h2>
            <p>
              En un mundo donde la educación y la salud son pilares fundamentales para el bienestar de las personas, 
              creemos en el poder de la tecnología para transformar la manera en que aprendemos. Nuestro objetivo es proporcionar una 
              plataforma educativa innovadora y accesible que ayude a las personas a comprender mejor enfermedades específicas de un órgano humano.
              A través de un entorno 3D interactivo, buscamos hacer que el aprendizaje sobre salud sea más inmersivo, dinámico y atractivo. 
              Queremos que los usuarios no solo lean sobre una enfermedad, sino que la experimenten de manera visual y práctica, facilitando así su 
              comprensión y promoviendo una mayor conciencia sobre la prevención y el autocuidado.
            </p>
          </div>
          <div className="image-content">
            <img src={MissionIllustration} alt="Misión educativa" />
          </div>
        </div>
      </section>

       {/* What We Do Section */}
      <section className="features-section">
        <div className="section-header">
          <h2>¿Qué Ofrecemos?</h2>
          <p>Tu espacio para entender y cuidar tus pulmones.</p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-image-container">
              <img src={Feature1Image} alt="Modelos 3D Interactivos" className="feature-image" />
            </div>
            <h3>Modelos 3D Interactivos</h3>
            <p>Explora órganos humanos con detalles anatómicos precisos y visualiza cómo las enfermedades los afectan.</p>
          </div>

          <div className="feature-card">
            <div className="feature-image-container">
              <img src={Feature2Image} alt="Información Médica" className="feature-image" />
            </div>
            <h3>Información Médica</h3>
            <p>Aprende sobre síntomas, tratamientos y métodos de prevención con contenido validado por expertos.</p>
          </div>

          <div className="feature-card">
            <div className="feature-image-container">
              <img src={Feature3Image} alt="Evaluación Interactiva" className="feature-image" />
            </div>
            <h3>Evaluación Interactiva</h3>
            <p>Pon a prueba tus conocimientos con nuestro sistema de quizzes y sigue tu progreso de aprendizaje.</p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact-section">
        <div className="container">
          <div className="image-content">
            <img src={ImpactIllustration} alt="Impacto educativo" />
          </div>
          <div className="text-content">
            <h2>Nuestro Impacto</h2>
            <ul>
              <li>
                <span>✓</span> Explorar modelos 3D detallados de un órgano humano afectado por una enfermedad específica.
              </li>
              <li>
                <span>✓</span>  Aprender sobre los síntomas, tratamientos y métodos de prevención de manera interactiva.
              </li>
              <li>
                <span>✓</span> Interactuar con un entorno físico virtual que simula cómo evoluciona la enfermedad y sus efectos.
              </li>
              <li>
                <span>✓</span> Comunidad consciente de salud respiratoria
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="section-header">
          <h2>Nuestro Equipo</h2>
        </div>

        <div className="team-container">
          <div className="team-image">
            <img src={TeamImage} alt="Equipo de desarrollo" />
          </div>
          <div className="team-description">
            <p>
              Somos un equipo de tres estudiantes de Ingeniería en Sistemas, actualmente cursando la materia Proyecto Integrador en nuestra universidad. 
              Compartimos una pasión por la tecnología, el desarrollo de software y la educación digital, lo que nos motivó a crear esta aplicación web 3D interactiva.
            </p>
            <div className="team-stats">
              <div className="stat-item">
                <span className="stat-number">3</span>
                <span className="stat-label">Integrantes</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100+</span>
                <span className="stat-label">Horas de desarrollo</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3D</span>
                <span className="stat-label">Tecnología</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="appreciation-section">
        <div className="container">
          <div className="image-content">
            <img src={AppreciationImage} alt="Gracias por visitarnos" />
          </div>
          <div className="text-content">
            <h2>¡Gracias por visitarnos!</h2>
            <p>
              Agradecemos profundamente tu interés en nuestra plataforma educativa. 
              Hemos trabajado con pasión y dedicación para crear este recurso que 
              esperamos sea de gran valor para tu aprendizaje sobre salud pulmonar.
            </p>
            <p className="highlight">
              Esperamos que disfrutes explorando la información, interactuando con 
              nuestros modelos 3D y descubriendo todo lo que hemos preparado para ti.
            </p>
            <div className="signature">
              <p>Atentamente,</p>
              <p className="team-name">El equipo de InfoPulmón</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;