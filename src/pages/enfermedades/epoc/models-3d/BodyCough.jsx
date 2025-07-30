import { useCallback, useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { Canvas } from '@react-three/fiber';
import {OrbitControls,Html,PositionalAudio} from "@react-three/drei";
import { Suspense } from "react";
import Lights from '../lights/Lights';  
import Soporte from '../models-3d/SoporteBody'; 
import Staging from '../staging/Staging';
import Text from '../texts/TextSintoma'; 
import Loader3D from '../../../../components/Loader'; 

function BodyCough(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/models-3d/Body-Cough.glb')
    const { actions } = useAnimations(animations, group)
    const [isAudioPlaying, setIsAudioPlaying] = useState(false) 
    const [showMessage, setShowMessage] = useState(false)
    const audioRef = useRef()



    const toggleCoughSound = useCallback(() => {
      if (!audioRef.current) return
      
      if (isAudioPlaying) {
        audioRef.current.stop()
      } else {
        audioRef.current.stop() 
        audioRef.current.play()
      }
      
      setIsAudioPlaying(!isAudioPlaying) 
    }, [isAudioPlaying])

    useEffect(() => {
      const action = actions.Cough;
      if (action) {
        action.play();
        return () => action.stop();
      }
    }, [actions.Cough]);

    useEffect(() => {
      const handleKeyDown = (event) => {
        if (event.key.toLowerCase() === 'a') {
          toggleCoughSound()
        }
        if (event.key.toLowerCase() === 'c') {
          setShowMessage(prev => !prev)
        }
      }

      window.addEventListener('keydown', handleKeyDown)

      return () => {
        window.removeEventListener('keydown', handleKeyDown)
      }
    }, [toggleCoughSound])
  

  return (
    <group ref={group} {...props} dispose={null}>
      <PositionalAudio
          ref={audioRef}
          url="/sounds/coughing.mp3" 
          loop
          autoplay={false}
        />
      {showMessage && (
        <Html
        position={[-1.8, -4, -1.5]}
        zIndexRange={[100, 0]}
      >
        <div style={{
          background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
          padding: '20px',
          borderRadius: '15px',
          color: '#2c3e50',
          width: '320px',
          textAlign: 'center',
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          border: '1px solid rgba(255,255,255,0.3)'
        }}>
          <h3 style={{
            margin: '0 0 15px 0',
            color: '#3498db',
            fontSize: '1.5em',
            fontWeight: '600'
          }}>¡Bienvenido/a!</h3>
          
          <p style={{
            marginBottom: '15px',
            lineHeight: '1.5'
          }}>
            Gracias por continuar navegando. A continuación, encontrarás los síntomas más comunes de la EPOC. 
            Esperamos que esta información te sea útil para identificar señales tempranas de la enfermedad y buscar atención médica oportuna si experimenta
            alguno de los sintomas. <nr/>
            <strong>Haz Click en el entorno para cambiar el ambiente.</strong>
          </p>
        </div>
      </Html>
      )}
      <group name="Scene">
        <group name="Armature">
          <skinnedMesh
            name="Body"
            castShadow
            geometry={nodes.Body.geometry}
            material={materials.BodyMaterial}
            skeleton={nodes.Body.skeleton}
            
          />
          <skinnedMesh
            name="EyeLeft"
            castShadow
            geometry={nodes.EyeLeft.geometry}
            material={materials.EyeLeftMaterial}
            skeleton={nodes.EyeLeft.skeleton}
            morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
          />
          <skinnedMesh
            name="EyeRight"
            castShadow
            geometry={nodes.EyeRight.geometry}
            material={materials.EyeRightMaterial}
            skeleton={nodes.EyeRight.skeleton}
            morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
          />
          <skinnedMesh
            name="Hair"
            castShadow
            geometry={nodes.Hair.geometry}
            material={materials.HairModel}
            skeleton={nodes.Hair.skeleton}
          />
          <skinnedMesh
            name="Head_1"
            castShadow
            geometry={nodes.Head_1.geometry}
            material={materials.HeadModel}
            skeleton={nodes.Head_1.skeleton}
            morphTargetDictionary={nodes.Head_1.morphTargetDictionary}
            morphTargetInfluences={nodes.Head_1.morphTargetInfluences}
          />
          <skinnedMesh
            name="Pants"
            castShadow
            geometry={nodes.Pants.geometry}
            material={materials.PantsMaterial}
            skeleton={nodes.Pants.skeleton}
          />
          <skinnedMesh
            name="Shirt"
            castShadow
            geometry={nodes.Shirt.geometry}
            material={materials.ShirtModel}
            skeleton={nodes.Shirt.skeleton}
          />
          <skinnedMesh
            name="Shoes"
            castShadow
            geometry={nodes.Shoes.geometry}
            material={materials.ShoesModel}
            skeleton={nodes.Shoes.skeleton}
          />
          <skinnedMesh
            name="Teeth"
            castShadow
            geometry={nodes.Teeth.geometry}
            material={materials.TeethModel}
            skeleton={nodes.Teeth.skeleton}
            morphTargetDictionary={nodes.Teeth.morphTargetDictionary}
            morphTargetInfluences={nodes.Teeth.morphTargetInfluences}
          />
          <primitive object={nodes.Hips} />
        </group>
      </group>
    </group>
  )
}
useGLTF.preload('/models-3d/Body-Cough.glb')

export default function Scene() {
    return (
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <Suspense fallback={<Loader3D message="Cargando cuerpo con tos..." />}>
          <Canvas
            camera={{ position: [0, 1, 5], fov: 50 }}  
            shadows={true}
          >
          <OrbitControls
            enableRotate={false}
            enableZoom={false}       
            enablePan={false}      
            target={[0, 0, 0]}   
            maxPolarAngle={Math.PI / 2} 
            minPolarAngle={0}    

          />
          <Lights />
          <Text textSintoma={"Tos persistente"} />
          <Soporte/>
          <Staging/>
          <BodyCough
            scale={1.5}            
            position={[0, 0, -2]}   
            rotation={[1.5, 0, 0]}  
          />
        </Canvas>
        <div
        style={{
          position: "absolute",
          bottom: "18px",
          right: "19px",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          color: "white",
          padding: "0.4rem 1rem",
          borderRadius: "0.5rem",
          fontSize: "0.9rem",
          zIndex: 10,
        }}
      >
        💡 Presiona la tecla "C" <br />
      </div>

      <div
        style={{
          position: "absolute",
          top: "18px",
          left: "19px",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          color: "white",
          padding: "0.4rem 1rem",
          borderRadius: "0.5rem",
          fontSize: "0.9rem",
          zIndex: 10,
        }}
      >
        💡 Presiona la tecla "A", para activar el sonido
      </div>
      </Suspense>
      </div>
    );
  }