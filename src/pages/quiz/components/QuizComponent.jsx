import { useQuizLogic } from './QuizLogic';
import './QuizStyles.scss';
import { NavLink } from 'react-router';
import { useState, useEffect } from 'react';

const QuizComponent = () => {
  const {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    score,
    timeLeft,
    handleAnswerSelect,
    progress,
    showResults,
    userAnswers,
    restartQuiz,
    passingScore,
    maxScore,
    user,
    quizCompleted
  } = useQuizLogic();

  const [recentlySaved, setRecentlySaved] = useState(false);

  useEffect(() => {
    if (quizCompleted && user) {
      setRecentlySaved(true);
      const timer = setTimeout(() => setRecentlySaved(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [quizCompleted, user]);

  if (showResults) {
    return (
      <div className="quiz-results">
        <h2>Resultados del Quiz</h2>
        
        {!user && (
          <div className="auth-warning">
            <p>⚠️ No has iniciado sesión. Tu puntuación no se guardará.</p>
            <p>Inicia sesión para guardar tus resultados y competir en el ranking.</p>
          </div>
        )}
        
        {recentlySaved && (
          <div className="saved-notification">
            ✅ Tu puntuación ha sido guardada en tu historial
          </div>
        )}

        <div className="score-display">
          <div className="score-circle">
            <span className="score-percent">
              {Math.round((score / maxScore) * 100)}%
            </span>
            <span className="score-text">Puntuación</span>
          </div>
          <div className="score-details">
            <p><strong>Respuestas correctas:</strong> {score / 10} de {totalQuestions}</p>
            <p><strong>Puntos obtenidos:</strong> {score} de {maxScore}</p>
            <p className={score >= passingScore ? 'pass-text' : 'fail-text'}>
              {score >= passingScore ? '¡Felicidades! Has aprobado.' : 'No has alcanzado el puntaje mínimo.'}
            </p>
          </div>
        </div>
        
        <div className="answers-review">
          <h3>Revisión de respuestas</h3>
          {Object.entries(userAnswers).map(([questionId, answerData]) => (
            <div key={questionId} className={`answer-item ${answerData.isCorrect ? 'correct' : 'incorrect'}`}>
              <p className="question-text"><strong>Pregunta {questionId}:</strong> {answerData.question}</p>
              <p><strong>Tu respuesta:</strong> {answerData.selectedAnswer}</p>
              {!answerData.isCorrect && <p><strong>Respuesta correcta:</strong> {answerData.correctAnswer}</p>}
              <p className="explanation"><strong>Explicación:</strong> {answerData.explanation}</p>
            </div>
          ))}
        </div>
        
        <div className="results-actions">
            <button onClick={restartQuiz} className="restart-button">
            Volver a Intentar
            </button>
            <NavLink to="/leaderboard" className="start-quiz-button">
            Ver podio
            </NavLink>
            </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <div className="quiz-progress">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
          <span>Pregunta {currentQuestionIndex + 1} de {totalQuestions}</span>
        </div>
        <div className="quiz-stats">
          <span className="time-left">⏱️ {timeLeft}</span>
          <span className="current-score">⭐ {score}</span>
          {user && (
            <span className="user-badge">
              <img src={user.photoURL} alt={user.displayName} className="user-avatar" />
              <span>{user.displayName}</span>
            </span>
          )}
        </div>
      </div>

      <div className="question-container">
        <h3 className="question-text">{currentQuestion.question}</h3>
        
        {currentQuestion.type === 'multiple-choice' && (
          <div className="options-container">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(option)}
                className="option-button"
              >
                <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                <span className="option-text">{option}</span>
              </button>
            ))}
          </div>
        )}

        {currentQuestion.type === 'true-false' && (
          <div className="true-false-container">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(option)}
                className={`tf-button ${option === 'Verdadero' ? 'true-button' : 'false-button'}`}
              >
                {option}
              </button>
            ))}
          </div>
        )}

        {currentQuestion.type === 'image-selection' && (
          <div className="image-options-container">
            {currentQuestion.images.map((image) => (
              <div 
                key={image.id} 
                className="image-option"
                onClick={() => handleAnswerSelect(image.id)}
              >
                <img src={image.url} alt={image.alt} />
                <span className="image-label">Opción {image.id}</span>
              </div>
            ))}
          </div>
        )}

        {currentQuestion.type === 'fill-blank' && (
          <div className="fill-blank-container">
            <input
              type="text"
              placeholder="Escribe tu respuesta..."
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleAnswerSelect(e.target.value);
                }
              }}
              className="blank-input"
            />
            <button 
              onClick={() => {
                const input = document.querySelector('.blank-input');
                handleAnswerSelect(input.value);
              }}
              className="submit-blank"
            >
              Confirmar
            </button>
          </div>
        )}

        {currentQuestion.type === 'drag-drop' && (
          <div className="drag-drop-container">
            <div className="drag-items">
              {currentQuestion.pairs.map((pair) => (
                <div key={pair.id} className="drag-item" draggable="true">
                  {pair.item}
                </div>
              ))}
            </div>
            <div className="drop-targets">
              {currentQuestion.pairs.map((pair) => (
                <div key={pair.id} className="drop-target">
                  <p>{pair.match}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="quiz-footer">
        <button 
          onClick={restartQuiz} 
          className="quit-button"
        >
          Salir del Quiz
        </button>
      </div>
    </div>
  );
};

export default QuizComponent;