/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { RigidBody } from '@react-three/rapier';
import { Html } from '@react-three/drei';



// Si se pasa optionPositions, usarlo, si no, usar 4 por defecto

const COLORS = {
  default: '#a3d0ee',   
  correct: '#10b981',    
  incorrect: '#ef4444', 
  highlighted: '#f59e0b', 
  textBackground: 'rgba(255, 255, 255, 0.95)'
};


// optionType: 'text' | 'image' (default: 'text')
const DEFAULT_POSITIONS = [
  [-15, 5, -10],
  [-5, 5, -10],
  [5, 5, -10],
  [15, 5, -10]
];

const OptionCubes = ({ options, currentQuestionId, userAnswers, highlightedOption, isCorrect, optionType = 'text', optionPositions }) => {
  const positions = optionPositions || DEFAULT_POSITIONS;
  return (
    <>
      {options.map((option, index) => {
        let color = COLORS.default;
        let borderColor = '#ffffff';
        let borderWidth = 0;
        let glowIntensity = 0;

        // Para image-match, option puede ser string (ej: 'EPOC'), para multiple-choice igual
        const optionKey = typeof option === 'string' ? option : option.value || option.label || index;

        // Para image-match, userAnswers[currentQuestionId]?.selectedAnswer puede ser un objeto
        let isSelected = false;
        if (userAnswers[currentQuestionId]) {
          if (typeof userAnswers[currentQuestionId].selectedAnswer === 'object') {
            // image-match: nunca se selecciona un cubo, el feedback es por highlight
            isSelected = false;
          } else {
            isSelected = userAnswers[currentQuestionId].selectedAnswer === optionKey;
          }
        }

        if (isSelected) {
          color = userAnswers[currentQuestionId].isCorrect ? COLORS.correct : COLORS.incorrect;
          borderWidth = 0.2;
          glowIntensity = 1;
        } else if (highlightedOption === optionKey) {
          color = isCorrect == null ? COLORS.highlighted : (isCorrect ? COLORS.correct : COLORS.incorrect);
          borderWidth = 0.2;
          glowIntensity = 0.7;
        }

        return (
          <RigidBody
            key={optionKey}
            type="fixed"
            name={optionKey}
            position={positions[index % positions.length]}
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
                wordBreak: 'break-word',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '80px',
              }}>
                {optionType === 'image' && option?.url ? (
                  <img src={option.url} alt={option.alt || ''} style={{ maxWidth: '120px', maxHeight: '80px', objectFit: 'contain', borderRadius: '8px' }} />
                ) : (
                  optionKey
                )}
              </div>
            </Html>
          </RigidBody>
        );
      })}
    </>
  );
};

export default OptionCubes;
