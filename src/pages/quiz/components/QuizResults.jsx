import { useState, useEffect } from 'react';
import { useLocation,NavLink } from 'react-router';
import './QuizStyles.scss';

const QuizResults = () => {
  const location = useLocation();
  const state = location.state || {}; 

  console.log("Datos recibidos en resultados:", state);

  // Extrae los datos con valores por defecto
  const {
    score = 0,
    totalQuestions = 0,
    maxScore = 100,
    passingScore = 70,
    userAnswers = {},
    user = null,
  } = state;

  const [recentlySaved, setRecentlySaved] = useState(false);

  useEffect(() => {
    if (user) {
      setRecentlySaved(true);
      const timer = setTimeout(() => setRecentlySaved(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [user]);

  const restartQuiz = () => {
    window.location.href = '/quiz/start'; 
  };

  return (
    <div className="quiz-results">
      <div className="result-header">
        <h2>Resultados del Quiz</h2>
        <div className="decoration-circle"></div>
        <div className="decoration-triangle"></div>
      </div>

      {!user && (
        <div className="auth-warning pulse">
          <div className="warning-icon">⚠️</div>
          <div>
            <p>No has iniciado sesión. Tu puntuación no se guardará.</p>
            <p>Inicia sesión para guardar tus resultados y competir en el ranking.</p>
          </div>
        </div>
      )}

      {recentlySaved && (
        <div className="saved-notification slide-in">
          <div className="checkmark">✓</div>
          <span>Tu puntuación ha sido guardada en tu historial</span>
        </div>
      )}

      <div className="score-display">
        <div className={`score-circle ${score >= passingScore ? 'success' : 'fail'}`}>
          <span className="score-percent">
            {Math.round((score / maxScore) * 100)}%
          </span>
          <svg className="circle-chart" viewBox="0 0 36 36">
            <path
              className="circle-bg"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="circle-fill"
              strokeDasharray={`${(score / maxScore) * 100}, 100`}
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
        </div>
        <div className="score-details">
          <p><span className="detail-icon">✅</span> <strong>Respuestas correctas:</strong> {score / 10} de {totalQuestions}</p>
          <p><span className="detail-icon">⭐</span> <strong>Puntos obtenidos:</strong> {score} de {maxScore}</p>
          <p className={`result-message ${score >= passingScore ? 'pass-text' : 'fail-text'}`}>
            {score >= passingScore ? (
              <>
                <span className="celebrate">🎉</span> ¡Felicidades! Has aprobado.
              </>
            ) : (
              <>
                <span className="sad-face">😕</span> No has alcanzado el puntaje mínimo.
              </>
            )}
          </p>
        </div>
      </div>

      <div className="answers-review">
        <h3 className="review-title">
          <span className="title-decoration"></span>
          Revisión de respuestas
          <span className="title-decoration"></span>
        </h3>
        {Object.entries(userAnswers).map(([questionId, answerData]) => (
          <div key={questionId} className={`answer-item ${answerData.isCorrect ? 'correct' : 'incorrect'} fade-in`}>
            <div className="answer-status">
              {answerData.isCorrect ? '✓' : '✗'}
            </div>
            <div className="answer-content">
              <p className="question-text"><strong>Pregunta {questionId}:</strong> {answerData.question}</p>
              <p><strong>Tu respuesta:</strong> {answerData.selectedAnswer}</p>
              {!answerData.isCorrect && <p><strong>Respuesta correcta:</strong> {answerData.correctAnswer}</p>}
              <p className="explanation"><strong>Explicación:</strong> {answerData.explanation}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="results-actions">
        <button onClick={restartQuiz} className="restart-button hover-grow">
          Volver a Intentar
        </button>
        <NavLink to="/leaderboard" className="leaderboard-button hover-grow">
          Ver podio
        </NavLink>
      </div>
    </div>
  );
};

export default QuizResults;