/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber'
import { Physics, RigidBody } from '@react-three/rapier'
import { Html, Float, OrbitControls, Stars, Sky } from '@react-three/drei'
import { useQuizLogic } from './QuizLogic'
import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router'
import Esphere from './Esphere'
import OptionCubes from './OptionCubes'

import './QuizComponent.scss'

const ColoredFloor = () => (
  <RigidBody type="fixed" friction={1} restitution={0.2}>
    <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={[80, 80]} />
      <meshStandardMaterial color="#4c6bafff" />
    </mesh>
  </RigidBody>
)

const DecorativeElements = () => (
  <>
    {[-15, -5, 5, 15].map((x) => (
      <mesh key={x} position={[x, 1, -10]} castShadow>
        <cylinderGeometry args={[1, 1, 4, 16]} />
        <meshStandardMaterial color="##E2F5FF" metalness={0.8} roughness={0.2} />
      </mesh>
    ))}
    {[...Array(5)].map((_, i) => (
      <Float key={i} speed={i % 2 ? 0.5 : 1} floatIntensity={0.5}>
        <mesh position={[
          Math.sin(i) * 30,
          5 + Math.cos(i * 2) * 5,
          Math.cos(i) * 30
        ]}>
          <icosahedronGeometry args={[0.5, 0]} />
          <meshStandardMaterial
            color={i % 2 ? '#005089' : '#2196f3'}
            emissive={i % 2 ? '#005089' : '#2196f3'}
            emissiveIntensity={0.5}
          />
        </mesh>
      </Float>
    ))}
  </>
)

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
    progress,
    passingScore,
    maxScore
  } = useQuizLogic()

  const navigate = useNavigate()

  const [highlightedOption, setHighlightedOption] = useState(null)
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(null)
  const [answerLocked, setAnswerLocked] = useState(false)
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
      navigate('/quiz/results', { state: resultsData })
    }
  }, [quizCompleted, showResults])

  const handleCollisionWithOption = (targetName) => {
    // Bloquear cualquier doble avance incluso si el componente se renderiza dos veces
    if (userAnswers[currentQuestion.id] || answerLocked || hasAnsweredRef.current) return;
    setAnswerLocked(true); // Bloquea inmediatamente
    hasAnsweredRef.current = true;

    const isCorrect = targetName === currentQuestion.correctAnswer;
    setHighlightedOption(targetName);
    setIsCorrectAnswer(isCorrect);

    setTimeout(() => {
      handleAnswerSelect(targetName);
      setHighlightedOption(null);
      setIsCorrectAnswer(null);
      setAnswerLocked(false);
      // Avanzar automáticamente a la siguiente pregunta si no es la última
      if (currentQuestionIndex < totalQuestions - 1) {
        goToNextQuestion();
      } else {
        goToQuizEnd();
      }
      // Reset ref para la siguiente pregunta
      hasAnsweredRef.current = false;
    }, 3000);
  };

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <Canvas
        shadows
        camera={{ position: [0, 15, 30], fov: 50 }}
        gl={{ antialias: true }}
      >
        <Sky sunPosition={[10, 20, 10]} />
        <Stars radius={100} depth={50} count={5000} factor={4} fade />

        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 20, 10]} intensity={1.5} castShadow />
        <pointLight position={[0, 15, 0]} intensity={0.5} color="#ffccaa" />
        <hemisphereLight groundColor="#4caf50" intensity={0.3} />

        <Physics gravity={[0, -9.81, 0]}>
          <ColoredFloor />
          <mesh position={[0, 10, -20]} receiveShadow>
            <boxGeometry args={[80, 20, 2]} />
            <meshStandardMaterial color="#2AABEC" transparent opacity={0.7} />

            <Html
              position={[0, 3, 1.1]}
              transform
              center
              distanceFactor={10}
              occlude
              className="question-wall"
            >
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '420px',
                maxWidth: '700px',
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
          />

          <Esphere
            position={[0, 15, 20]}
            onCollision={handleCollisionWithOption}
            disabled={answerLocked}
          />

          <DecorativeElements />
        </Physics>

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          enableRotate={true}
          minDistance={25}
          maxDistance={35}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.35}
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
            width: 'fit-content'
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
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  )
}

export default QuizGame3D
