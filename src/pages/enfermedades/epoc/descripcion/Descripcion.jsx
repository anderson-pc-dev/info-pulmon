import './Descripcion.scss'; 
import { Canvas } from '@react-three/fiber';
import LungModel from "../models-3d/LungTrasparent";
import {
  Loader,
  //BakeShadows,
  //ContactShadows,
  OrbitControls,
  //SoftShadows,
} from "@react-three/drei";
import { Suspense } from "react";
import { Perf } from "r3f-perf";
import Lights from '../lights/Lights';  
import Soporte from '../models-3d/Soporte'; // Importa el componente Soporte

const Descripcion = () => {
  return (
    <div className="que-es-container">
      <header className="que-es-header">
        <h1 className="que-es-title">¿Qué es la EPOC?</h1>
      </header>

      <div className="que-es-sections">
        {/* Sección de Descripción */}
        <section className="que-es-section description-section">
          <div className="section-content">
            <h2 className="section-title">Descripción de la EPOC</h2>
            <div className="que-es-text">
              <p>
              La Enfermedad Pulmonar Obstructiva Crónica (EPOC) es una afección respiratoria de carácter 
              progresivo e irreversible que se caracteriza por una obstrucción persistente del flujo de aire en los pulmones, 
              lo que dificulta la respiración normal. Esta enfermedad deteriora significativamente la calidad de vida de quienes la padecen y 
              requiere un manejo médico constante.
              </p>
              <p>
              Se considera una de las principales causas de morbilidad y mortalidad a nivel mundial, afectando a millones de personas, 
              especialmente a aquellas expuestas a factores de riesgo como el humo del tabaco (tanto de fumadores activos como pasivos), 
              la contaminación ambiental, el uso prolongado de biomasa para cocinar o calefaccionar en espacios mal ventilados, y 
              la exposición a productos químicos o polvos en el entorno laboral.
              </p>
              <p>
              El diagnóstico de la EPOC se realiza principalmente mediante una prueba de función pulmonar conocida como espirometría, 
              que mide la cantidad de aire que una persona puede exhalar y la velocidad con la que lo hace. Este examen permite evaluar 
              el grado de obstrucción y establecer un plan de tratamiento adecuado.
              </p>
              <p>Es importante destacar que la EPOC no es una enfermedad única, sino un término general que agrupa dos condiciones pulmonares crónicas 
                que frecuentemente coexisten y afectan la capacidad respiratoria del paciente, <strong>las cuales podemos vizualizarlas en el modelo 3D</strong> y
                son:
              </p>

              <h3 className="subsection-title">Condiciones que abarca la EPOC</h3>
              <ul className="copd-conditions">
                <li>
                  <strong>Bronquitis crónica:</strong> Caracterizada por una inflamación prolongada de los bronquios, 
                  con aumento de la producción de moco, lo que provoca tos persistente y dificultad para respirar.
                </li>
                <li>
                  <strong>Enfisema pulmonar:</strong> implica la destrucción progresiva de los alvéolos, las pequeñas estructuras 
                  donde ocurre el intercambio de oxígeno y dióxido de carbono, lo que reduce la capacidad del pulmón para oxigenar la sangre.
                </li>
              </ul>
            </div>
          </div>

          <div className="que-es-3d-model">
            <Suspense fallback={<Loader />}>
              <Canvas
                camera={{ position: [0, 1, 5], fov: 50 }}
                shadows={true}>
                <Perf position="top-right" />
                <OrbitControls
                  /*target={[0, 1, 0]}
                  enableZoom
                  enablePan
                  minDistance={3}
                  maxDistance={10}
                  enableDamping
                  dampingFactor={0.05}*/
                />
                <Lights />
                <Soporte />
                <LungModel
                  scale={0.9}
                  position={[0, -3.5, -8]}
                  rotation={[0, -0.1, 0]}
                />
              </Canvas>
            </Suspense>
          </div>
        </section>

        

        {/* Sección de Causas */}
        <section className="que-es-section causes-section">
          <div className="section-content">
            <h2 className="section-title">Causas de la EPOC</h2>
            <div className="que-es-causes">
              <div className="cause-item">
                <h3>Tabaquismo</h3>
                <p>Principal causa (80-90% de los casos)</p>
                <p className="cause-detail">
                  El humo del tabaco contiene sustancias químicas que dañan las vías respiratorias
                  y los alvéolos pulmonares, provocando inflamación crónica.
                </p>
              </div>
              <div className="cause-item">
                <h3>Contaminación ambiental</h3>
                <p>Exposición prolongada a humos y partículas</p>
                <p className="cause-detail">
                  La exposición a contaminantes ambientales como humo de leña, polvo industrial
                  o gases tóxicos puede contribuir al desarrollo de EPOC.
                </p>
              </div>
              <div className="cause-item">
                <h3>Factores genéticos</h3>
                <p>Como la deficiencia de alfa-1 antitripsina</p>
                <p className="cause-detail">
                  Aunque menos común, algunos casos de EPOC son causados por una deficiencia
                  hereditaria de esta proteína protectora del pulmón.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Descripcion;