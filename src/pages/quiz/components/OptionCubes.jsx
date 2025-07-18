import { RigidBody } from '@react-three/rapier';
import { Html } from '@react-three/drei';

const OPTION_POSITIONS = [
  [-18, 8.5, -5], 
  [8, 9.5, -5],
  [-8, 2.5, 5],
  [8, 2.5, 5]
];

const COLORS = {
  default: '#6366f1',   
  correct: '#10b981',    
  incorrect: '#ef4444', 
  highlighted: '#f59e0b', 
  textBackground: 'rgba(255, 255, 255, 0.95)'
};

const OptionCubes = ({ options, currentQuestionId, userAnswers, highlightedOption, isCorrect }) => {
  return (
    <>
      {options.map((option, index) => {
        let color = COLORS.default;
        let borderColor = '#ffffff';
        let borderWidth = 0;
        let glowIntensity = 0;

        if (userAnswers[currentQuestionId]?.selectedAnswer === option) {
          color = userAnswers[currentQuestionId].isCorrect ? COLORS.correct : COLORS.incorrect;
          borderWidth = 0.2;
          glowIntensity = 1;
        } else if (highlightedOption === option) {
          color = isCorrect ? COLORS.correct : COLORS.incorrect;
          borderWidth = 0.2;
          glowIntensity = 0.5;
        }

        return (
          <RigidBody
            key={option}
            type="fixed"
            name={option}
            position={OPTION_POSITIONS[index % OPTION_POSITIONS.length]}
          >
            <mesh castShadow>
              <boxGeometry args={[6, 5, 6]} />
              <meshStandardMaterial 
                color={color} 
                metalness={0.5}
                roughness={0.3}
                emissive={color}
                emissiveIntensity={glowIntensity}
              />
            </mesh>
            
            <mesh>
              <boxGeometry args={[6.2, 5.2, 6.2]} />
              <meshStandardMaterial 
                color={borderColor}
                emissive={borderColor}
                emissiveIntensity={glowIntensity * 0.8}
                metalness={0.8}
                roughness={0.1}
                transparent
                opacity={borderWidth}
                wireframe
              />
            </mesh>

            <Html 
                position={[0, 0, 3.2]} 
                transform
                occlude
                distanceFactor={4} 
                style={{
                    width: '500px',
                    pointerEvents: 'none',
                    transform: 'translateZ(0.2px)',
                    userSelect: 'none',
                }}
                center
                >
                <div style={{
                    background: COLORS.textBackground,
                    padding: '20px 25px',
                    borderRadius: '12px',
                    fontWeight: 700,
                    fontSize: '56px',
                    lineHeight: '1.2',
                    textAlign: 'center',
                    boxShadow: '0 6px 18px rgba(0, 0, 0, 0.2)',
                    border: '2px solid rgba(0, 0, 0, 0.1)',
                    backdropFilter: 'blur(6px)',
                    color: '#111',
                    borderLeft: `6px solid ${color}`,
                    transition: 'all 0.3s ease',
                    maxWidth: '800px', 
                    wordBreak: 'break-word'
                }}>
                    {option}
                </div>
                </Html>
          </RigidBody>
        );
      })}
    </>
  );
};

export default OptionCubes;
