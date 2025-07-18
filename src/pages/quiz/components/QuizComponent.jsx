import { Canvas } from '@react-three/fiber'
import { Physics, RigidBody } from '@react-three/rapier'
import { Html, Float, OrbitControls, Text, Sky, Stars, Sparkles } from '@react-three/drei'
import { useQuizLogic } from './QuizLogic'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import Esphere from './Esphere'
import OptionCubes from './OptionCubes'

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
      <mesh key={x} position={[x, 5, -10]} castShadow>
        <cylinderGeometry args={[1, 1, 10, 16]} />
        <meshStandardMaterial color="#ffeb3b" metalness={0.8} roughness={0.2} />
      </mesh>
    ))}
    {[...Array(10)].map((_, i) => (
      <Float key={i} speed={i % 2 ? 0.5 : 1} floatIntensity={0.5}>
        <mesh position={[
          Math.sin(i) * 30,
          5 + Math.cos(i * 2) * 5,
          Math.cos(i) * 30
        ]}>
          <icosahedronGeometry args={[0.5, 0]} />
          <meshStandardMaterial 
            color={i % 2 ? '#ff5722' : '#2196f3'} 
            emissive={i % 2 ? '#ff5722' : '#2196f3'}
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
    if (userAnswers[currentQuestion.id] || answerLocked) return

    const isCorrect = targetName === currentQuestion.correctAnswer
    setHighlightedOption(targetName)
    setIsCorrectAnswer(isCorrect)
    setAnswerLocked(true)

    setTimeout(() => {
      handleAnswerSelect(targetName)
      setHighlightedOption(null)
      setIsCorrectAnswer(null)
      setAnswerLocked(false)
    }, 5000)
  }

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
            <meshStandardMaterial color="#8bc34a" transparent opacity={0.7} />
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
          enablePan={true} 
          enableZoom={true}
          enableRotate={true}
          minDistance={15} 
          maxPolarAngle={Math.PI} 
          minPolarAngle={0} 
          maxDistance={50}
          enableDamping
        />
      </Canvas>

      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '400px',
        padding: '30px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        pointerEvents: 'none',
        background: 'linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0) 100%)'
      }}>


        {user && (
          <div style={{
            background: 'rgba(255,255,255,0.15)',
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

        <div style={{
          background: 'rgba(255,255,255,0.12)',
          color: 'white',
          padding: '30px',
          borderRadius: '20px',
          backdropFilter: 'blur(8px)',
          boxShadow: `
            0 8px 32px rgba(0,0,0,0.3),
            0 0 0 1px rgba(255,255,255,0.1),
            inset 0 0 20px rgba(100,150,255,0.15)
          `,
          border: '1px solid rgba(255,255,255,0.15)',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column'
        }}>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '25px',
            paddingBottom: '15px',
            borderBottom: '1px solid rgba(255,255,255,0.1)'
          }}>
            <div style={{ fontSize: '18px', opacity: 0.8 }}>Pregunta {currentQuestionIndex + 1}/{totalQuestions}</div>
            <div style={{ 
              background: 'rgba(100,150,255,0.3)',
              padding: '6px 12px',
              borderRadius: '20px',
              fontSize: '16px',
              fontWeight: '600'
            }}>
              ⏱️ {timeLeft}s
            </div>
          </div>

          <div style={{
            fontSize: '28px',
            fontWeight: '700',
            lineHeight: '1.4',
            marginBottom: '20px',
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            {currentQuestion.question}
          </div>

          <div style={{
            background: 'rgba(0,0,0,0.3)',
            borderRadius: '10px',
            padding: '15px',
            marginTop: 'auto'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '8px',
              fontSize: '16px'
            }}>
              <span>Progreso</span>
              <span style={{ fontWeight: '600' }}>{score} / {maxScore} puntos</span>
            </div>
            <div style={{
              height: '8px',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '4px',
              overflow: 'hidden'
            }}>
              <div style={{
                width: `${(score / maxScore) * 100}%`,
                height: '100%',
                background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
                borderRadius: '4px',
                transition: 'width 0.5s ease'
              }} />
            </div>
          </div>
        </div>
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
