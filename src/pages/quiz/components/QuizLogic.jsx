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
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}quiz-scores`,
        {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${await user.getIdToken()}` // Añadir autenticación
          },
          body: JSON.stringify({
            userId: user.uid,
            email: user.email,
            displayName: user.displayName,
            score: finalScore,
            maxScore: quizQuestions.length * quizConfig.pointsPerQuestion,
            timeSpent: timeSpent, 
            dateCompleted: new Date().toISOString() 
          }),
        }
      );
      console.log("user:", user);
      console.log("user.getIdToken:", user?.getIdToken);


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

  // Finalizar el quiz - Versión corregida
  const completeQuiz = async () => {
    console.log("completeQuiz triggered");
    setQuizCompleted(true);
    setShowResults(true);
    
    if (user) {
      try {
        await saveQuizScore(score, quizConfig.timeLimit * 60 - timeLeft);
        console.log("Score saved!");
      } catch (error) {
        console.error('Failed to save score:', error);
      }
    }else {
    console.log("No user, not saving score.");
  }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Manejar selección de respuesta
  const handleAnswerSelect = (selectedAnswer) => {
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    
    // Guardar respuesta
    setUserAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: {
        selectedAnswer,
        isCorrect,
        question: currentQuestion.question,
        correctAnswer: currentQuestion.correctAnswer,
        explanation: currentQuestion.explanation
      }
    }));

    // Actualizar puntuación 
    if (isCorrect) {
      setScore(prev => prev + quizConfig.pointsPerQuestion);
    }

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      completeQuiz();
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
    progress,
    passingScore: quizConfig.passingScore,
    maxScore: quizQuestions.length * quizConfig.pointsPerQuestion,
    user,
    isSavingScore,
    saveError
  };
};