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
  const [draggedItem, setDraggedItem] = useState(null);
  const [orderedItems, setOrderedItems] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [matchedPairs, setMatchedPairs] = useState({});
  const [draggedOption, setDraggedOption] = useState(null);
  const [termMatches, setTermMatches] = useState({});
  const [draggedTerm, setDraggedTerm] = useState(null);
  const [blankAnswers, setBlankAnswers] = useState([]);

  const ConfirmButton = ({ onClick, disabled, children, className = '' }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`confirm-button hover-scale ${className}`}
    >
      {children}
    </button>
  );

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

      for (let i = 0; i < 100; i++) {
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

    //createParticles();

    return () => {
      observer.disconnect();
    };
  }, []);


  useEffect(() => {
    if (quizCompleted && user) {
      setRecentlySaved(true);
      const timer = setTimeout(() => setRecentlySaved(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [quizCompleted, user]);

  const handleOptionDragStart = (option) => {
    setDraggedOption(option);
  };

  const handleImageDrop = (imageId) => {
    if (!draggedOption) return;

    setMatchedPairs(prev => ({
      ...prev,
      [imageId]: draggedOption
    }));

    setDraggedOption(null);
  };

  const handleDragStart = (item) => {
    setDraggedItem(item);
    setIsAnimating(true);
  };

  const handleDrop = (position) => {
    if (!draggedItem) return;

    setOrderedItems(prev => {
      const newOrder = [...prev];
      const filteredOrder = newOrder.filter(item => item !== draggedItem);
      filteredOrder.splice(position, 0, draggedItem);
      return filteredOrder;
    });

    setDraggedItem(null);
    setIsAnimating(false);
  };

  const handleTermDragStart = (termId, term) => {
    setDraggedTerm({ termId, term });
  };

  const resetOrderQuestion = () => {
    setOrderedItems([]);
  };
  const resetImageSelection = () => {
    setMatchedPairs({});
    setDraggedOption(null);
  };

  const resetTermMatch = () => {
    setTermMatches({});
    setDraggedTerm(null);
  };

  const resetFillBlankMultiple = () => {
    setBlankAnswers([]);
  };

  if (showResults) {
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
  }

  return (

    <div className="quiz-intro-page">
      <div className="particles-container"></div>
      <div className="quiz-container">
        <div className="quiz-header">
          <div className="quiz-progress">
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: `${progress}%` }}></div>
              <span className="progress-text">Pregunta {currentQuestionIndex + 1} de {totalQuestions}</span>
            </div>
          </div>
          <div className="quiz-stats">
            <div className="stat-box time-left">
              <div className="stat-icon">⏱️</div>
              <div className="stat-value">{timeLeft}</div>
            </div>
            <div className="stat-box current-score">
              <div className="stat-icon">⭐</div>
              <div className="stat-value">{score}</div>
            </div>
            {user && (
              <div className="user-quiz hover-grow">
                <img src={user.photoURL} alt={user.displayName} className="user-avatar" />
                <span className="user-name">{user.displayName}</span>
              </div>
            )}
          </div>
        </div>

        <div className="question-container">
          <h3 className="question-text slide-up">
            <span className="question-number">{currentQuestionIndex + 1}</span>
            {currentQuestion.question}
          </h3>

          {currentQuestion.type === 'fill-blank-multiple' && (
            <div className="fill-blank-multiple-container">
              <div className="blank-inputs-container">
                {Array(currentQuestion.correctAnswers.length).fill().map((_, index) => (
                  <div key={index} className="blank-input-group">
                    <input
                      type="text"
                      value={blankAnswers[index] || ''}
                      onChange={(e) => {
                        const newAnswers = [...blankAnswers];
                        newAnswers[index] = e.target.value;
                        setBlankAnswers(newAnswers);
                      }}
                      placeholder={currentQuestion.placeholder?.[index] || 'Respuesta'}
                      className="blank-input"
                    />
                    {index < currentQuestion.correctAnswers.length - 1 && (
                      <span className="separator">,</span>
                    )}
                  </div>
                ))}
              </div>

              <div className="question-prompt">
                {currentQuestion.question.split('__________').slice(-1)[0]}
              </div>

              <ConfirmButton
                onClick={() => {
                  handleAnswerSelect({
                    answers: blankAnswers,
                    questionId: currentQuestion.id
                  });
                  resetFillBlankMultiple();
                }}
                disabled={blankAnswers.some(answer => !answer.trim())}
                className="submit-blank hover-scale"
              >
                Confirmar
              </ConfirmButton>
            </div>
          )}

          {currentQuestion.type === 'image-match' && (
            <div className="image-match-container">
              <div className="match-options">
                {currentQuestion.options.map((option, index) => (
                  <div
                    key={index}
                    className={`match-option ${Object.values(matchedPairs).includes(option) ? 'matched' : ''}`}
                    draggable={!Object.values(matchedPairs).includes(option)}
                    onDragStart={() => handleOptionDragStart(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>

              <div className="image-targets">
                {currentQuestion.images.map((image) => (
                  <div
                    key={image.id}
                    className="image-target"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={() => handleImageDrop(image.id)}
                  >
                    <img src={image.url} alt={image.alt} />
                    <div className="match-result">
                      {matchedPairs[image.id] && (
                        <div className="matched-label">
                          {matchedPairs[image.id]}
                          <button
                            className="remove-match"
                            onClick={() => {
                              const newPairs = { ...matchedPairs };
                              delete newPairs[image.id];
                              setMatchedPairs(newPairs);
                            }}
                          >
                            ×
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <ConfirmButton
                onClick={() => {
                  handleAnswerSelect({
                    answer: matchedPairs,
                    questionId: currentQuestion.id
                  });
                }}
                disabled={Object.keys(matchedPairs).length !== currentQuestion.images.length}
                className="submit-match"
              >
                Confirmar asociaciones
              </ConfirmButton >
            </div>
          )}

          {currentQuestion.type === 'term-match' && (
            <div className="term-match-container">
              <div className="match-grid">
                <div className="terms-column">
                  <h4>Términos</h4>
                  <div className="terms-list">
                    {currentQuestion.pairs.map((pair) => {
                      const isTermMatched = Object.entries(termMatches).some(
                        ([termId, description]) => termId === pair.termId
                      );
                      return (
                        <div
                          key={pair.termId}
                          className={`term-item ${isTermMatched ? 'matched' : ''}`}
                          draggable={!isTermMatched}
                          onDragStart={() => handleTermDragStart(pair.termId, pair.term)}
                          onDragEnd={() => setDraggedTerm(null)}
                        >
                          {pair.term}
                          {!isTermMatched && <span className="drag-handle">☰</span>}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="descriptions-column">
                  <h4>Descripciones</h4>
                  <div className="descriptions-list">
                    {currentQuestion.pairs.map((pair) => {
                      const matchedTermId = Object.entries(termMatches).find(
                        ([termId, description]) => description === pair.description
                      )?.[0];

                      const matchedTerm = matchedTermId
                        ? currentQuestion.pairs.find(p => p.termId === matchedTermId)?.term
                        : null;

                      return (
                        <div
                          key={pair.termId}
                          className={`description-target ${matchedTermId ? 'matched' : ''
                            } ${draggedTerm?.termId === pair.termId ? 'drag-over' : ''
                            }`}
                          onDragOver={(e) => {
                            e.preventDefault();
                            if (draggedTerm) {
                              e.currentTarget.classList.add('drag-over');
                            }
                          }}
                          onDragLeave={(e) => {
                            e.currentTarget.classList.remove('drag-over');
                          }}
                          onDrop={(e) => {
                            e.preventDefault();
                            e.currentTarget.classList.remove('drag-over');

                            if (draggedTerm) {
                              const newMatches = { ...termMatches };
                              delete newMatches[draggedTerm.termId];
                              Object.keys(newMatches).forEach(termId => {
                                if (newMatches[termId] === pair.description) {
                                  delete newMatches[termId];
                                }
                              });
                              newMatches[draggedTerm.termId] = pair.description;
                              setTermMatches(newMatches);
                            }
                          }}
                        >
                          {matchedTermId ? (
                            <div className="matched-pair">
                              <span className="matched-term">{matchedTerm}</span>
                              <span className="matched-description">{pair.description}</span>
                              <button
                                className="remove-match"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  const newMatches = { ...termMatches };
                                  delete newMatches[matchedTermId];
                                  setTermMatches(newMatches);
                                }}
                              >
                                ×
                              </button>
                            </div>
                          ) : (
                            <div className="description-content">
                              {pair.description}
                              <div className="drop-hint">Suelta aquí</div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <ConfirmButton
                onClick={() => {
                  handleAnswerSelect({
                    answer: termMatches,
                    questionId: currentQuestion.id
                  });
                  resetTermMatch();
                }}
                disabled={Object.keys(termMatches).length !== currentQuestion.pairs.length}
                className={`submit-match ${Object.keys(termMatches).length === currentQuestion.pairs.length ? 'pulse' : ''
                  }`}
              >
                Confirmar asociaciones
              </ConfirmButton>
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
              <ConfirmButton
                onClick={() => {
                  const input = document.querySelector('.blank-input');
                  handleAnswerSelect(input.value);
                }}
                className="submit-blank hover-scale"

              >
                Confirmar
              </ConfirmButton>
            </div>
          )}

          {currentQuestion.type === 'drag-drop-order' && (
            <div className="drag-order-container">
              <h4 className="order-instructions">Ordena del más leve (1) al más severo (4):</h4>

              <div className="items-to-order">
                {currentQuestion.itemsToOrder.map((item, index) => (
                  <div
                    key={index}
                    className={`order-item ${orderedItems.includes(item) ? 'in-slot' : ''} ${isAnimating && draggedItem === item ? 'dragging' : ''}`}
                    draggable={!orderedItems.includes(item)}
                    onDragStart={() => handleDragStart(item)}
                    onDragEnd={() => setIsAnimating(false)}
                  >
                    {item}
                    <div className="drag-handle">☰</div>
                  </div>
                ))}
              </div>

              <div className="order-slots">
                {[1, 2, 3, 4].map((position, index) => (
                  <div
                    key={position}
                    className={`order-slot ${orderedItems[index] ? 'filled' : ''}`}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={() => handleDrop(index)}
                  >
                    {orderedItems[index] ? (
                      <div className="ordered-item hover-scale">
                        {orderedItems[index]}
                        <button
                          className="remove-item"
                          onClick={(e) => {
                            e.stopPropagation();
                            setOrderedItems(prev => prev.filter((_, i) => i !== index));
                          }}
                        >
                          ×
                        </button>
                      </div>
                    ) : (
                      <div className="empty-slot">
                        <span>Suelta aquí</span>
                        <div className="drop-indicator"></div>
                      </div>
                    )}
                    <div className="slot-number">{position}</div>
                  </div>
                ))}
              </div>

              <ConfirmButton
                onClick={() => {
                  handleAnswerSelect({
                    answer: orderedItems,
                    questionId: currentQuestion.id
                  });
                  resetOrderQuestion();
                }}
                disabled={orderedItems.length !== currentQuestion.itemsToOrder.length}
                className={`submit-order ${orderedItems.length === currentQuestion.itemsToOrder.length ? 'pulse' : ''}`}
              >
                Confirmar orden
              </ConfirmButton>
            </div>
          )}
        </div>

        <div className="quiz-footer">
          <button
            onClick={() => {
              restartQuiz();
              resetOrderQuestion();
              resetImageSelection();
              resetTermMatch();
              resetFillBlankMultiple();

            }}
            className="quit-button hover-scale"
          >
            Salir del Quiz
          </button>
        </div>
      </div>
    </div>

  );
};

export default QuizComponent;