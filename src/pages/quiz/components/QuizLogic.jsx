import { useState, useEffect, useCallback } from 'react';
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
  const [hasLoadedProgress, setHasLoadedProgress] = useState(false);
  const [isLoadingProgress, setIsLoadingProgress] = useState(true);
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const [lastSavedProgress, setLastSavedProgress] = useState({});

  // Temporizador
  useEffect(() => {
    if (timeLeft > 0 && !quizCompleted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !quizCompleted) {
      completeQuiz(score);
    }
  }, [timeLeft, quizCompleted]);

  // Guardar puntuación final en la API
  const saveQuizScore = async (finalScore, timeSpent) => {
    if (!user) return;

    setIsSavingScore(true);
    setSaveError(null);

    try {
      const maxPossibleScore = quizQuestions.length * quizConfig.pointsPerQuestion;
      const percentageScore = Math.round((finalScore / maxPossibleScore) * 100);

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
            dateCompleted: new Date().toISOString(),
            quizCompleted: true
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

  // Guardar progreso del usuario
const saveProgress = useCallback(async () => {
  if (!user || quizCompleted) return;

  const newProgress = {
    questionIndex: currentQuestionIndex,
    answers: userAnswers,
    score,
    timeLeft
  };

  const isSame =
    JSON.stringify(newProgress) === JSON.stringify(lastSavedProgress);

  if (isSame) return; 

  try {
    await fetch(`${import.meta.env.VITE_API_BASE_URL}quiz-scores/progress`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${await user.getIdToken()}`
      },
      body: JSON.stringify({
        userId: user.uid,
        email: user.email,
        displayName: user.displayName,
        ...newProgress,
        quizCompleted: false,
        progressSavedAt: new Date().toISOString()
      }),
    });

    setLastSavedProgress(newProgress); // Actualiza progreso guardado
  } catch (error) {
    console.error('Error saving progress:', error);
  }
}, [user, currentQuestionIndex, userAnswers, score, timeLeft, quizCompleted, lastSavedProgress]);


  // Cargar progreso guardado
  const loadProgress = useCallback(async () => {
  if (!user || hasLoadedProgress) return;

  setIsLoadingProgress(true);
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}quiz-scores/progress/${user.uid}`,
      {
        headers: {
          'Authorization': `Bearer ${await user.getIdToken()}`
        }
      }
    );

    if (response.ok) {
      const progress = await response.json();
      if (progress) {
        // Calcular tiempo actualizado
        const now = new Date();
        const lastActivity = new Date(progress.lastActivityAt || progress.progressSavedAt);
        const timeElapsed = Math.floor((now - lastActivity) / 1000);
        const updatedTimeLeft = Math.max(0, progress.timeLeft - timeElapsed);

        setCurrentQuestionIndex(progress.questionIndex || 0);
        setScore(progress.score || 0);
        setTimeLeft(updatedTimeLeft);
        setUserAnswers(progress.answers || {});
        
        if (updatedTimeLeft <= 0) {
          setQuizCompleted(true);
          setShowResults(true);
          await completeQuiz(progress.score || 0);
        } else {
          setQuizCompleted(progress.quizCompleted || false);
          if (progress.quizCompleted) {
            setShowResults(true);
          }
        }
      }
    }
  } catch (error) {
    console.error('Error loading progress:', error);
  } finally {
    setHasLoadedProgress(true);
    setIsLoadingProgress(false);
  }
}, [user, hasLoadedProgress]);

  // Cargar progreso al montar el componente
  useEffect(() => {
    loadProgress();
  }, [loadProgress]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (user && !quizCompleted) {
        saveProgress();
      }
    }, 30000); 

    return () => {
      clearInterval(interval);
      if (user && !quizCompleted) {
        saveProgress();
      }
    };
  }, [saveProgress, user, quizCompleted]);

  // Finalizar el quiz
  const completeQuiz = async (finalScore) => {
    setQuizCompleted(true);
    setShowResults(true);
    
    if (user) {
      try {
        await saveQuizScore(finalScore, quizConfig.timeLimit * 60 - timeLeft);
        
        // Eliminar progreso guardado
        await fetch(
          `${import.meta.env.VITE_API_BASE_URL}quiz-scores/progress/${user.uid}`,
          {
            method: 'DELETE',
            headers: {
              'Authorization': `Bearer ${await user.getIdToken()}`
            }
          }
        );
      } catch (error) {
        console.error('Failed to save score:', error);
      }
    }
  };

  // Reiniciar el quiz
  const restartQuiz = async () => {
    if (user) {
      try {
        await fetch(
          `${import.meta.env.VITE_API_BASE_URL}quiz-scores/progress/${user.uid}`,
          {
            method: 'DELETE',
            headers: {
              'Authorization': `Bearer ${await user.getIdToken()}`
            }
          }
        );
      } catch (error) {
        console.error('Error deleting progress:', error);
      }
    }

    setCurrentQuestionIndex(0);
    setScore(0);
    setTimeLeft(quizConfig.timeLimit * 60);
    setQuizCompleted(false);
    setUserAnswers({});
    setShowResults(false);
    setSaveError(null);
  };

  const calculatePercentageScore = (currentScore) => {
    const maxPossibleScore = quizQuestions.length * quizConfig.pointsPerQuestion;
    return Math.round((currentScore / maxPossibleScore) * 100);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleAnswerSelect = (selectedAnswer) => {
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

    // Guardar respuesta
    const newAnswers = {
      ...userAnswers,
      [currentQuestion.id]: {
        selectedAnswer,
        isCorrect,
        question: currentQuestion.question,
        correctAnswer: currentQuestion.correctAnswer,
        explanation: currentQuestion.explanation
      }
    };
    setUserAnswers(newAnswers);

    // Actualizar puntuación
    const newScore = isCorrect ? score + quizConfig.pointsPerQuestion : score;
    
    // Avanzar o finalizar
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
    saveError,
    isLoadingProgress,
    hasLoadedProgress
  };
};