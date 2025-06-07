import { useState, useEffect } from 'react';
import { quizQuestions, quizConfig } from '../data/quizQuestions';
import useAuthStore from "../../../stores/use-auth-store";

export const useQuizLogic = () => {
  const { user } = useAuthStore();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(quizConfig.timeLimit * 60);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [isSavingScore, setIsSavingScore] = useState(false);
  const [saveError, setSaveError] = useState(null);

  // Obtener la pregunta actual
  const currentQuestion = quizQuestions[currentQuestionIndex];

  // Temporizador
  useEffect(() => {
    if (timeLeft > 0 && !quizCompleted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !quizCompleted) {
      completeQuiz();
    }
  }, [timeLeft, quizCompleted]);

  // Guardar puntuación en la API
  const saveQuizScore = async (finalScore, timeSpent) => {
    if (!user) return;

    setIsSavingScore(true);
    setSaveError(null);

    try {
      const maxPossibleScore = quizQuestions.length * quizConfig.pointsPerQuestion;
      const percentageScore = Math.round((finalScore / maxPossibleScore) * 100);

      console.log("Enviando score:", {
        rawScore: finalScore,
        calculatedPercentage: percentageScore,
        maxPossibleScore: maxPossibleScore
      });

      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}quiz-scores`,
        {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${await user.getIdToken()}`
          },
          body: JSON.stringify({
            userId: user.uid,
            email: user.email,
            displayName: user.displayName,
            score: finalScore,
            percentage: percentageScore,
            maxScore: maxPossibleScore,
            timeSpent: timeSpent,
            dateCompleted: new Date().toISOString()
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `Error ${response.status}: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error saving quiz score:', error);
      setSaveError(error.message);
      throw error;
    } finally {
      setIsSavingScore(false);
    }
  };

  const calculatePercentageScore = (currentScore) => {
    const maxPossibleScore = quizQuestions.length * quizConfig.pointsPerQuestion;
    return Math.round((currentScore / maxPossibleScore) * 100);
  };

  const completeQuiz = async (finalScore) => {
    console.log("Final score to save:", finalScore);
    setQuizCompleted(true);
    setShowResults(true);
    
    if (user) {
      try {
        await saveQuizScore(finalScore, quizConfig.timeLimit * 60 - timeLeft);
        console.log("Score saved correctly:", finalScore);
      } catch (error) {
        console.error('Failed to save score:', error);
      }
    } else {
      console.log("No user, not saving score.");
    }
  };


  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleAnswerSelect = (selectedAnswer) => {
  let isCorrect;
  let formattedAnswer;
  
  // Preguntas de completar múltiples espacios
  if (currentQuestion.type === 'fill-blank-multiple') {
    const userAnswers = Array.isArray(selectedAnswer.answers || selectedAnswer) 
      ? (selectedAnswer.answers || selectedAnswer).map(a => a.toLowerCase().trim())
      : [selectedAnswer.toLowerCase().trim()];
    
    // Convertir respuestas correctas a minúsculas
    const correctAnswers = currentQuestion.correctAnswers.map(a => a.toLowerCase().trim());
    
    // Verificar si contienen las mismas respuestas sin importar el orden
    const allAnswersIncluded = correctAnswers.every(correctAns => 
      userAnswers.includes(correctAns)
    );
    const noExtraAnswers = userAnswers.every(userAns => 
      correctAnswers.includes(userAns)
    );
    
    isCorrect = allAnswersIncluded && noExtraAnswers && 
               userAnswers.length === correctAnswers.length;
    
    formattedAnswer = userAnswers.join(', ');
  }
  // Preguntas de ordenamiento
  else if (currentQuestion.type === 'drag-drop-order') {
    if (typeof selectedAnswer === 'object' && selectedAnswer.answer) {
      isCorrect = JSON.stringify(selectedAnswer.answer) === JSON.stringify(currentQuestion.correctOrder);
    } else {
      isCorrect = JSON.stringify(selectedAnswer) === JSON.stringify(currentQuestion.correctOrder);
    }
    formattedAnswer = Array.isArray(selectedAnswer.answer || selectedAnswer) 
      ? (selectedAnswer.answer || selectedAnswer).join(', ')
      : selectedAnswer;
  } 
  // Preguntas de asociación imagen-enfermedad
  else if (currentQuestion.type === 'image-match') {
    const userAnswer = typeof selectedAnswer === 'object' && selectedAnswer.answer 
      ? selectedAnswer.answer 
      : selectedAnswer;
    
    isCorrect = Object.entries(currentQuestion.correctMatches).every(
      ([imageId, correctDisease]) => userAnswer[imageId] === correctDisease
    );
    
    formattedAnswer = Object.entries(userAnswer)
      .map(([imageId, disease]) => `${imageId}: ${disease}`)
      .join('; ');
  }
  // Preguntas de asociación término-descripción
  else if (currentQuestion.type === 'term-match') {
    const userAnswer = typeof selectedAnswer === 'object' && selectedAnswer.answer 
      ? selectedAnswer.answer 
      : selectedAnswer;
    
    isCorrect = Object.entries(currentQuestion.correctMatches).every(
      ([termId, correctDescription]) => userAnswer[termId] === correctDescription
    );
    
    formattedAnswer = Object.entries(userAnswer)
      .map(([termId, description]) => `${termId}: ${description}`)
      .join('; ');
  } 
  // Otros tipos de preguntas
  else {
    isCorrect = selectedAnswer.toLowerCase().trim() === currentQuestion.correctAnswer.toLowerCase().trim();
    formattedAnswer = selectedAnswer;
  }

  // Guardar respuesta
  setUserAnswers(prev => ({
    ...prev,
    [currentQuestion.id]: {
      selectedAnswer: formattedAnswer,
      isCorrect,
      question: currentQuestion.question,
      correctAnswer: currentQuestion.type === 'fill-blank-multiple'
        ? currentQuestion.correctAnswers.join(', ')
        : currentQuestion.type === 'image-match'
          ? Object.entries(currentQuestion.correctMatches)
              .map(([imageId, disease]) => `${imageId}: ${disease}`)
              .join('; ')
          : Array.isArray(currentQuestion.correctAnswer || currentQuestion.correctOrder)
            ? (currentQuestion.correctAnswer || currentQuestion.correctOrder).join(', ')
            : currentQuestion.correctAnswer,
      explanation: currentQuestion.explanation
    }
  }));

    // Actualizar puntuación 
    const newScore = isCorrect ? score + quizConfig.pointsPerQuestion : score;
    
    // Avanzar a la siguiente pregunta o finalizar
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setScore(newScore);
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setScore(newScore);
      setTimeout(() => {
        completeQuiz(newScore);
      }, 0);
    }
  };

  // Reiniciar quiz
  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setTimeLeft(quizConfig.timeLimit * 60);
    setQuizCompleted(false);
    setUserAnswers({});
    setShowResults(false);
    setSaveError(null);
  };

  // Calcular progreso
  const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

  return {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions: quizQuestions.length,
    score,
    timeLeft: formatTime(timeLeft),
    quizCompleted,
    userAnswers,
    showResults,
    handleAnswerSelect,
    restartQuiz,
    scorePercentage: calculatePercentageScore(score),
    progress,
    passingScore: quizConfig.passingScore,
    maxScore: quizQuestions.length * quizConfig.pointsPerQuestion,
    user,
    isSavingScore,
    saveError
  };
};