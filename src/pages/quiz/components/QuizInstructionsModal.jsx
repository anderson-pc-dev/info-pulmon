import { NavLink } from 'react-router';
import PropTypes from 'prop-types';
import './QuizInstructionsModal.scss';

const QuizInstructionsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-container">
        <div className="modal-header-2">
          <h2>¿Cómo funciona el Quiz Interactivo?</h2>
          <button className="close-button" onClick={onClose}>
            ✕
          </button>
        </div>
        
        <div className="modal-content">
          <div className="instruction-section">
            <div className="instruction-text">
              <h3>🎮 Experiencia Interactiva 3D</h3>
              <p>
                Nuestro quiz utiliza un entorno 3D donde podrás interactuar directamente 
                con las opciones de respuesta. Es una experiencia única y divertida para 
                aprender sobre enfermedades pulmonares.
              </p>
            </div>
            <div className="instruction-image">
              <img 
                src="/quiz_example/inicio.png" 
                alt="Vista inicial del quiz 3D" 
                className="modal-image"
              />
              <p className="image-caption">Vista del entorno 3D del quiz</p>
            </div>
          </div>

          <div className="instruction-section">
            <div className="instruction-text">
              <h3>⚽ Cómo responder</h3>
              <p>
                Para seleccionar una respuesta, simplemente apunta y lanza el balón 
                hacia la opción que consideres correcta. El balón rebotará y podrás 
                ver inmediatamente si tu respuesta es correcta.
              </p>
              <ul className="instruction-list">
                <li>Mantén presionado el botón del mouse sobre el balón</li>
                <li>Apunta hacia la respuesta que deseas seleccionar</li>
                <li>Suelta el botón para lanzar el balón</li>
                <li>El sistema te indicará si la respuesta es correcta</li>
              </ul>
            </div>
            <div className="instruction-image">
              <img 
                src="/quiz_example/arrastrar.png" 
                alt="Cómo seleccionar respuestas" 
                className="modal-image"
              />
              <p className="image-caption">Lanza el balón hacia tu respuesta</p>
            </div>
          </div>

          <div className="quiz-rules">
            <h3>📋 Reglas del Quiz</h3>
            <div className="rules-grid">
              <div className="rule-item">
                <span className="rule-icon">❓</span>
                <span>10 preguntas variadas</span>
              </div>
              <div className="rule-item">
                <span className="rule-icon">⏱️</span>
                <span>20 minutos límite</span>
              </div>
              <div className="rule-item">
                <span className="rule-icon">🎯</span>
                <span>10 puntos por respuesta correcta</span>
              </div>
              <div className="rule-item">
                <span className="rule-icon">🏆</span>
                <span>Ranking competitivo</span>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-footer-2">
          <button className="cancel-button" onClick={onClose}>
            Volver
          </button>
          <NavLink to="/quiz/start" className="start-button">
            <span>Comenzar Quiz</span>
            <span className="button-icon">🚀</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

QuizInstructionsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default QuizInstructionsModal;
