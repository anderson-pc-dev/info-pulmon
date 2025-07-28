/* eslint-disable no-unused-vars */
import { useGLTF } from '@react-three/drei';
import { RigidBody, CuboidCollider } from '@react-three/rapier';
import { Html } from '@react-three/drei';

const COLORS = {
  default: '#a3d0ee',
  correct: '#10b981',
  incorrect: '#ef4444',
  highlighted: '#f59e0b',
  textBackground: 'rgba(255, 255, 255, 0.95)'
};

const DEFAULT_POSITIONS = [
  [-29, 0, -10],
  [-8, 0, -10],
  [10, 0, -10],
  [28, 0, -8]
];


const DEFAULT_ROTATIONS = [
  [0, 5.2, 0],
  [0, 4.8, 0],
  [0, 4.5, 0],
  [0, 4.2, 0]
];

const GOAL_COLLIDER_SIZE = [3, 2.5, 5];

function GoalModel({ color, ...props }) {
  const { nodes, materials } = useGLTF('/models-3d/football_net.glb');

  const customMaterials = {
    ...materials,
    Material: materials.Material.clone(),
    'Material.001': materials['Material.001'].clone(),
    Plane__0: materials.Plane__0.clone()
  };

  customMaterials.Material.color.set(color);
  customMaterials['Material.001'].color.set(color);
  customMaterials.Plane__0.color.set(color);

  return (
    <group {...props} dispose={null}>
      <group scale={0.011}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={[100, 301.134, 100]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_Material_0.geometry}
            material={customMaterials.Material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_Material_0_1.geometry}
            material={customMaterials.Material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_Material_0_2.geometry}
            material={customMaterials.Material}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_Material001_0.geometry}
          material={customMaterials['Material.001']}
          position={[99.502, 99.537, 0]}
          rotation={[Math.PI, 0, 0]}
          scale={[4.267, 4.267, 81.746]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane__0.geometry}
          material={customMaterials.Plane__0}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  );
}

const OptionGoals = ({
  options,
  currentQuestionId,
  userAnswers,
  highlightedOption,
  isCorrect,
  optionType = 'text',
  optionPositions,
  hideHtml = false
}) => {
  const positions = DEFAULT_POSITIONS;
  const rotations = DEFAULT_ROTATIONS;

  return (
    <>
      {options.map((option, index) => {
        let color = COLORS.default;
        let borderWidth = 0;
        let glowIntensity = 0;

        const optionKey = typeof option === 'string' ? option : option.value || option.label || index;

        let isSelected = false;
        if (userAnswers[currentQuestionId]) {
          if (typeof userAnswers[currentQuestionId].selectedAnswer === 'object') {
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

        const position = positions[index % positions.length];
        const rotation = rotations[index % rotations.length];

        return (
          <RigidBody
            key={optionKey}
            type="dynamic"
            name={optionKey}
            position={position}
            rotation={rotation}
            colliders={false}
          >
            <CuboidCollider
              args={GOAL_COLLIDER_SIZE}
              position={[0, 1.5, -2]}
            />

            <GoalModel
              color={color}
              scale={2.3}
              emissive={color}
              emissiveIntensity={glowIntensity}
            />

            <Html
              position={[0, 3, 0]}
              rotation={[0, 1.3, 0]}
              transform
              occlude
              distanceFactor={4}
              style={{
                width: '500px',
                pointerEvents: 'none',
                transform: 'translateZ(0.2px)',
                userSelect: 'none',
                zIndex: 100,
                visibility: hideHtml ? 'hidden' : 'visible',
              }}
              center
            >
              <div style={{
                background: COLORS.textBackground,
                padding: '24px 32px',
                borderRadius: '16px',
                fontWeight: 700,
                fontSize: '64px',
                lineHeight: '1.1',
                textAlign: 'center',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
                border: 'none',
                backdropFilter: 'blur(8px)',
                color: '#111',
                borderLeft: `8px solid ${color}`,
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                maxWidth: '1000px',
                width: '950px',
                wordBreak: 'break-word',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '150px',
                position: 'relative',
                overflow: 'hidden',
                margin: '0 auto',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: -5,
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '5px',
                  background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
                  opacity: 0.6,
                }} />

                {optionType === 'image' && option?.url ? (
                  <>
                    <img
                      src={option.url}
                      alt={option.alt || ''}
                      style={{
                        maxWidth: '160px',
                        maxHeight: '100px',
                        objectFit: 'contain',
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                        border: '1px solid rgba(0, 0, 0, 0.05)',
                      }}
                    />
                    {option.alt && (
                      <span style={{
                        marginLeft: '16px',
                        fontSize: '32px',
                        fontWeight: 600,
                        color: '#333',
                      }}>
                        {option.alt}
                      </span>
                    )}
                  </>
                ) : (
                  <span style={{
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    position: 'relative',
                    padding: '0 8px',
                  }}>
                    {optionKey}
                    <span style={{
                      position: 'absolute',
                      bottom: '-4px',
                      left: '8px',
                      right: '8px',
                      height: '3px',
                      background: color,
                      borderRadius: '3px',
                      opacity: 0.3,
                    }} />
                  </span>
                )}
              </div>
            </Html>
          </RigidBody>
        );
      })}
    </>
  );
};

useGLTF.preload('/models-3d/football_net.glb');

export default OptionGoals;
