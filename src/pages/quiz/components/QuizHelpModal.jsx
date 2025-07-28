import PropTypes from 'prop-types';
import './QuizInstructionsModal.scss';

const QuizHelpModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="modal-overlay quiz-help-modal-overlay" 
      onClick={handleOverlayClick} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999999,
        backdropFilter: 'blur(10px)',
      }}
    >
      <div className="modal-container quiz-help-modal-container" style={{ zIndex: 999999 }}>
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
      </div>
      
      <style>{`
        .quiz-help-modal-overlay {
          z-index: 999999 !important;
          position: fixed !important;
        }
        .quiz-help-modal-container {
          z-index: 999999 !important;
          position: relative !important;
        }
      `}</style>
    </div>
  );
};

QuizHelpModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default QuizHelpModal;
