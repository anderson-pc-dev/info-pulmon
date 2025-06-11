import { NavLink } from 'react-router';
import './Quiz.scss';
import { useEffect } from 'react';

const Quiz = () => {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    const createParticles = () => {
      const particlesContainer = document.querySelector('.particles-container');
      if (!particlesContainer) return;

      for (let i = 0; i < 500; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;

        const size = Math.random() * 15 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        particle.style.animationDuration = `${Math.random() * 20 + 10}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;

        particlesContainer.appendChild(particle);
      }
    };

    createParticles();

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="quiz-intro-page">
      <div className="particles-container"></div>
       <div className="quiz-container">
        <div className="quiz-header">
          <h1 className="quiz-title">Bienvenido al Quiz</h1>
          <div className="quiz-icon">🧠</div>
        </div>

        <div className="quiz-description">
          <p>
            Pon a prueba tus conocimientos sobre las enfermedades vistas a lo largo de la pagina con este quiz interactivo.
            Responde preguntas sobre síntomas, tratamientos y prevención.
            ¡Gana puntos y sube en el ranking!
          </p>
        </div>

        <div className="quiz-features">
          <div className="feature-card">
            <div className="feature-icon">❓</div>
            <h3>10 Preguntas</h3>
            <p>Variedad de formatos para evaluar tu conocimiento</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⏱️</div>
            <h3>20 Minutos</h3>
            <p>Tiempo límite para completar el desafío</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏆</div>
            <h3>Ranking</h3>
            <p>Compara tu puntuación con otros</p>
          </div>
        </div>

        <div className="instructions-section">
          <h2><span className="highlight">¿Cómo funciona?</span></h2>
          <ul className="instructions-list">
            <li><strong>Tipos de preguntas:</strong> Completar, seleccionar la imagen, arrastrar y relacionar columnas</li>
            <li><strong>Puntuación:</strong> Cada respuesta correcta otorga 10 puntos</li>
            <li><strong>Intentos:</strong> Se puede repetir el quiz, pero solo se guarda la mejor puntuación</li>
          </ul>
        </div>

        <div className="quiz-tips">
          <div className="tip-card">
            <div className="tip-icon">💡</div>
            <p>Selecciona la opción correcta y presiona &apos;Siguiente&apos; para avanzar.</p>
          </div>
          <div className="tip-card">
            <div className="tip-icon">📊</div>
            <p>Al finalizar, verás tu puntuación y tu posición en el ranking.</p>
          </div>
        </div>

        <NavLink to="/quiz/start" className="start-quiz-button">
          Comenzar Quiz
          <span className="button-icon">🚀</span>
        </NavLink>
      </div>
     
    </div>
  );
};

export default Quiz;