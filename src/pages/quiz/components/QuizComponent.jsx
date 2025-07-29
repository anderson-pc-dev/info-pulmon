/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber'
import { Physics, RigidBody } from '@react-three/rapier'
import { Html, OrbitControls} from '@react-three/drei'
import { useQuizLogic } from './QuizLogic'
import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router'
import Esphere from './Esphere'
import Staging from '../../enfermedades/epoc/staging/StagingQuiz'
import OptionCubes from './OptionCubes'
import QuizHelpModal from './QuizHelpModal'

import './QuizComponent.scss'

const ColoredFloor = () => (
  <RigidBody 
    type="fixed" 
    friction={1} 
    restitution={0.2}
  >
    <mesh 
      position={[0, -1, 0]} 
      rotation={[-Math.PI / 2, 0, 0]} 
      receiveShadow
    >
      <planeGeometry args={[80, 80]} />
      <shadowMaterial
          roughness={0.8}
          metalness={1}
          transparent={true}
          opacity={0.8}  
        />
    </mesh>
  </RigidBody>
)

const getOptionPositions = (count) => {
  // Centra los cubos/cilindros en X, separados por 10 unidades
  const spacing = 16;
  const startX = -((count - 1) * spacing) / 2;
  return Array.from({ length: count }, (_, i) => [startX + i * spacing, 5, -10]);
};

const QuizGame3D = () => {
  const {
    currentQuestion,
    userAnswers,
    handleAnswerSelect,
    goToNextQuestion,
    goToQuizEnd,
    score,
    timeLeft,
    quizCompleted,
    showResults,
    user,
    currentQuestionIndex,
    totalQuestions,
    passingScore,
    maxScore,
    imageMatchIndex,
    imageMatchResult
  } = useQuizLogic()

  const navigate = useNavigate()

  const [highlightedOption, setHighlightedOption] = useState(null)
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(null)
  const [answerLocked, setAnswerLocked] = useState(false)
  const [showHelpModal, setShowHelpModal] = useState(false)
  const hasAnsweredRef = useRef(false)


  useEffect(() => {
    if (quizCompleted && showResults) {
      const resultsData = {
        score,
        totalQuestions,
        maxScore,
        passingScore,
        userAnswers,
        user: user
          ? {
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL
          }
          : null
      }
      localStorage.removeItem('quiz-progress');
      navigate('/quiz/results', { state: resultsData })
    }
  }, [quizCompleted, showResults])

  // Guardar progreso
  const handleExitQuiz = () => {
    const progress = {
      userAnswers,
      currentQuestionIndex,
      score,
      timeLeft,
      // Puedes agregar más campos si lo necesitas
    };
    localStorage.setItem('quiz-progress', JSON.stringify(progress));
    navigate('/');
  };

  const handleCollisionWithOption = (targetName) => {
    // Para image-match, el flujo es diferente
    if (answerLocked || hasAnsweredRef.current) return;
    setAnswerLocked(true);
    hasAnsweredRef.current = true;

    if (currentQuestion.type === 'image-match') {
      // No hay userAnswers[currentQuestion.id] hasta terminar todas las asociaciones
      setHighlightedOption(targetName);
      // No sabemos si es correcto hasta terminar todas
      setTimeout(() => {
        handleAnswerSelect(targetName);
        setHighlightedOption(null);
        setIsCorrectAnswer(null);
        setAnswerLocked(false);
        // Si ya se terminó de asociar todas las imágenes, mostrar resultado y avanzar
        if (imageMatchIndex === currentQuestion.images.length - 1) {
          setTimeout(() => {
            // Espera un poco para mostrar el resultado visual
            if (currentQuestionIndex < totalQuestions - 1) {
              goToNextQuestion();
            } else {
              goToQuizEnd();
            }
            hasAnsweredRef.current = false;
          }, 2200);
        } else {
          hasAnsweredRef.current = false;
        }
      }, 1200);
    } else {
      // Pregunta normal
      if (userAnswers[currentQuestion.id]) return;
      const isCorrect = targetName === currentQuestion.correctAnswer;
      setHighlightedOption(targetName);
      setIsCorrectAnswer(isCorrect);
      setTimeout(() => {
        handleAnswerSelect(targetName);
        setHighlightedOption(null);
        setIsCorrectAnswer(null);
        setAnswerLocked(false);
        if (currentQuestionIndex < totalQuestions - 1) {
          goToNextQuestion();
        } else {
          goToQuizEnd();
        }
        hasAnsweredRef.current = false;
      }, 3000);
    }
  };

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <Canvas
        shadows
        camera={{ position: [0, 4, 40], fov: 60 }}
        gl={{ antialias: true }}
      >
        <Staging />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 20, 10]} intensity={1.5} castShadow />
        <pointLight position={[0, 15, 0]} intensity={0.5} color="#ffccaa" />
        <hemisphereLight groundColor="#4caf50" intensity={0.3} />

        <Physics gravity={[0, -9.81, 0]}>
          <ColoredFloor />
      <mesh position={[0, 13, -20]} receiveShadow>
        <boxGeometry args={[80, 28, 2]} />
        <meshStandardMaterial color="#2AABEC" transparent opacity={0.05} />

        <Html
          position={[0, 1, 1.1]}
          transform
          center
          distanceFactor={10}
          className="question-wall"
          style={{ 
            zIndex: 500, 
            pointerEvents: 'auto',
            visibility: showHelpModal ? 'hidden' : 'visible'
          }}
        >
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: '520px',
            maxWidth: '900px',
            padding: '32px 24px',
            background: 'rgba(255,255,255,0.92)',
            borderRadius: '24px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
            border: '2px solid rgba(0,0,0,0.08)',
            backdropFilter: 'blur(6px)'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              marginBottom: '18px',
              gap: '18px',
              fontSize: '22px',
              fontWeight: 600,
              color: '#222'
            }}>
              <span>Pregunta {currentQuestionIndex + 1}/{totalQuestions}</span>
              <span style={{
                background: 'rgba(100,150,255,0.18)',
                padding: '6px 18px',
                borderRadius: '20px',
                fontWeight: 700,
                fontSize: '20px',
                color: '#1e293b',
                letterSpacing: '1px'
              }}>⏱️ {timeLeft}s</span>
            </div>
            <div style={{
              fontSize: '32px',
              fontWeight: 700,
              color: '#22223b',
              textAlign: 'center',
              marginBottom: '22px',
              textShadow: '0 2px 8px rgba(0,0,0,0.08)'
            }}>
              {currentQuestion.question}
            </div>
            {/* Si es image-match, mostrar la imagen actual */}
            {currentQuestion.type === 'image-match' && currentQuestion.images && (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: '18px',
                marginTop: '8px',
                width: '100%'
              }}>
                <img
                  src={currentQuestion.images[imageMatchIndex]?.url}
                  alt={currentQuestion.images[imageMatchIndex]?.alt || ''}
                  style={{
                    maxWidth: '320px',
                    maxHeight: '220px',
                    borderRadius: '18px',
                    boxShadow: '0 4px 18px rgba(0,0,0,0.18)',
                    border: '3px solid #2AABEC',
                    background: '#fff',
                    marginBottom: '8px'
                  }}
                />
                <div style={{
                  fontSize: '18px',
                  color: '#333',
                  fontWeight: 500,
                  marginTop: '2px',
                  marginBottom: '0'
                }}>
                  Imagen {imageMatchIndex + 1} de {currentQuestion.images.length}
                </div>
                {/* Mostrar feedback si ya terminó de asociar todas */}
                {imageMatchResult !== null && (
                  <div style={{
                    marginTop: '12px',
                    fontSize: '22px',
                    fontWeight: 700,
                    color: imageMatchResult ? '#10b981' : '#ef4444',
                    background: imageMatchResult ? 'rgba(16,185,129,0.12)' : 'rgba(239,68,68,0.12)',
                    borderRadius: '10px',
                    padding: '10px 18px',
                    border: `2px solid ${imageMatchResult ? '#10b981' : '#ef4444'}`
                  }}>
                    {imageMatchResult ? '¡Asociación correcta!' : 'Alguna asociación es incorrecta'}
                  </div>
                )}
              </div>
            )}
            <div style={{
              width: '100%',
              marginTop: '10px',
              marginBottom: '0',
              background: 'rgba(0,0,0,0.08)',
              borderRadius: '8px',
              height: '12px',
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
            }}>
              <div style={{
                width: `${(score / maxScore) * 100}%`,
                height: '100%',
                background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
                borderRadius: '8px',
                transition: 'width 0.5s ease'
              }} />
            </div>
            <div style={{
              width: '100%',
              textAlign: 'right',
              fontSize: '15px',
              color: '#444',
              marginTop: '4px',
              fontWeight: 500
            }}>
              {score} / {maxScore} puntos
            </div>
          </div>
        </Html>
      </mesh>
          <OptionCubes
            options={currentQuestion.options}
            currentQuestionId={currentQuestion.id}
            userAnswers={userAnswers}
            highlightedOption={highlightedOption}
            isCorrect={isCorrectAnswer}
            optionType={currentQuestion.type === 'image-match' ? 'text' : 'text'}
            optionPositions={getOptionPositions(currentQuestion.options.length)}
            hideHtml={showHelpModal}
          />

          <Esphere
            position={[0, 15, 27]}
            onCollision={handleCollisionWithOption}
            disabled={answerLocked}
          />
        </Physics>

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          enableRotate={false}
          minDistance={25}
          maxDistance={35}
          minPolarAngle={Math.PI / 4}      // 45 grados
          maxPolarAngle={Math.PI / 1.8}  // ~80 grados
          target={[0, 1, -1]}
          enableDamping
          minAzimuthAngle={-Math.PI / 5}
          maxAzimuthAngle={Math.PI / 5}
        />
      </Canvas>

      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '400px',
        padding: '30px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        pointerEvents: 'none',
        zIndex: 2000
      }}>


        {user && (
          <div style={{
            background: '#2AABEC',
            color: 'white',
            padding: '12px 20px',
            borderRadius: '50px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
            border: '1px solid rgba(255,255,255,0.15)',
            marginBottom: '30px',
            width: 'fit-content',
            pointerEvents: 'auto',
          }}>
            {user.photoURL && (
              <img
                src={user.photoURL}
                alt="user"
                style={{
                  width: '45px',
                  height: '45px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '2px solid rgba(255,255,255,0.3)'
                }}
              />
            )}
            <span style={{ fontSize: '18px', fontWeight: '600' }}>{user.displayName}</span>
          </div>
        )}

        {/* Botón para salir y guardar progreso */}
        <button
          onClick={handleExitQuiz}
          style={{
            background: '#ef4444',
            color: 'white',
            border: 'none',
            borderRadius: '30px',
            padding: '12px 28px',
            fontSize: '18px',
            fontWeight: 700,
            marginBottom: '18px',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
            pointerEvents: 'auto',
            transition: 'background 0.2s',
          }}
        >
          Salir y guardar
        </button>
      </div>

      {/* Botón de ayuda - Esquina superior derecha */}
      <div style={{
        position: 'absolute',
        top: '30px',
        right: '30px',
        zIndex: 10000
      }}>
        <button
          onClick={() => setShowHelpModal(true)}
          style={{
            background: '#6b7280',
            color: 'white',
            border: 'none',
            borderRadius: '50px',
            padding: '12px 24px',
            fontSize: '16px',
            fontWeight: 700,
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            pointerEvents: 'auto',
            transition: 'all 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
          onMouseEnter={(e) => {
            e.target.style.background = '#4b5563';
            e.target.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = '#6b7280';
            e.target.style.transform = 'translateY(0)';
          }}
        >
          Ayuda
        </button>
      </div>

      {/* Modal de ayuda */}
      <QuizHelpModal 
        isOpen={showHelpModal} 
        onClose={() => setShowHelpModal(false)} 
      />

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .question-wall {
            z-index: 1000 !important;
            position: relative;
          }
        `}
      </style>
    </div>
  )
}

export default QuizGame3D