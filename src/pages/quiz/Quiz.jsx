import { NavLink } from 'react-router';
import './Quiz.scss';

const Quiz = () => {
  return (
    <div className="quiz-intro-page">
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
            <p>Selecciona la opción correcta y presiona 'Siguiente' para avanzar.</p>
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