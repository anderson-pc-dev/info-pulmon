import React from 'react';
import './Descripcion.scss'; 
import TabaquismoImg from '../../../../assets/Tabaquismo.jpg';
import ContaminacionImg from '../../../../assets/Contaminacion.jpg';
import GeneticoImg from '../../../../assets/Genetico.jpg';
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
import GraficoEPOC from './GraficoEPOC';

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
                  position={[0, -6.5, -8]}
                  rotation={[0, -0.1, 0]}
                />
              </Canvas>
            </Suspense>
          </div>
        </section>

        <section className="informacionEstadistica-section">
          <div className="section-content">
            <h2 className="section-title">Información Estadística sobre la EPOC</h2>
            <div className="que-es-text estadisticas-content">
              <p className="intro-text">
                La Enfermedad Pulmonar Obstructiva Crónica (EPOC) es una afección respiratoria progresiva que representa una amenaza creciente para 
                la salud pública mundial. Sus consecuencias no solo impactan a quienes la padecen, sino también a los sistemas de salud por el elevado 
                costo de su tratamiento a largo plazo.
              </p>
              <div className="grafico-seccion">
                <GraficoEPOC />
              </div>
              <div className="estadisticas-grid">
                <div className="estadistica-item">
                  <div className="estadistica-icon">🔹</div>
                  <div className="estadistica-text">
                    <h3>Una de las principales causas de muerte a nivel mundial</h3>
                    <p>Según la Organización Mundial de la Salud (OMS), la EPOC ocupa el tercer lugar entre las principales causas de muerte en el mundo, solo detrás de enfermedades cardiovasculares y accidentes cerebrovasculares.</p>
                  </div>
                </div>

                <div className="estadistica-item">
                  <div className="estadistica-icon">🔹</div>
                  <div className="estadistica-text">
                    <h3>Prevalencia global en aumento</h3>
                    <p>Se calcula que más de 300 millones de personas viven con EPOC en todo el mundo, y esta cifra continúa creciendo debido al envejecimiento de 
                      la población y la exposición continua a factores de riesgo.</p>
                  </div>
                </div>

                <div className="estadistica-item">
                  <div className="estadistica-icon">🔹</div>
                  <div className="estadistica-text">
                    <h3>Desigualdad en el impacto</h3>
                    <p>Cerca del 90% de las muertes relacionadas con la EPOC ocurren en países de ingresos bajos y medianos, donde el acceso a diagnóstico temprano, 
                      tratamiento adecuado y servicios de salud preventiva es limitado.</p>
                  </div>
                </div>

                <div className="estadistica-item">
                  <div className="estadistica-icon">🔹</div>
                  <div className="estadistica-text">
                    <h3>Tabaquismo: el principal culpable</h3>
                    <p>El tabaquismo está directamente asociado con más del 70% de los casos de EPOC. No obstante, no es el único factor: personas expuestas a humo de 
                      biomasa o contaminación también tienen mayor riesgo.</p>
                  </div>
                </div>

                <div className="estadistica-item">
                  <div className="estadistica-icon">🔹</div>
                  <div className="estadistica-text">
                    <h3>Diagnóstico subestimado</h3>
                    <p>Se estima que hasta el 50% de los casos de EPOC no están diagnosticados, especialmente en etapas tempranas, ya que los síntomas suelen confundirse 
                      con signos normales del envejecimiento.</p>
                  </div>
                </div>

                <div className="estadistica-item">
                  <div className="estadistica-icon">🔹</div>
                  <div className="estadistica-text">
                    <h3>Cargas económicas y sociales</h3>
                    <p>La EPOC representa una carga significativa para los sistemas de salud debido a su tratamiento crónico, hospitalizaciones frecuentes y disminución 
                      en la calidad de vida del paciente.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Causas */}
        <section className="causes-section">
          <div className="section-content">
            <h2 className="section-title">Causas de la EPOC</h2>
            <div className="que-es-causes">
              <div className="cause-item">
                <div className="card-image">
                  <img src={TabaquismoImg} alt="Asma Bronquial" />
                </div>
                <h3>Tabaquismo</h3>
                <p>Principal causa (80-90% de los casos)</p>
                <p className="cause-detail">
                Es la causa más frecuente de EPOC, siendo responsable de aproximadamente el 80-90% de los casos. 
                El humo del tabaco contiene miles de sustancias químicas, muchas de ellas tóxicas e irritantes. 
                Al inhalarlas de forma repetida, estas sustancias dañan progresivamente las vías respiratorias y los alvéolos pulmonares, 
                lo que genera una inflamación crónica, destrucción del tejido pulmonar y un estrechamiento de las vías aéreas. 
                Esto afecta la capacidad del pulmón para intercambiar gases de forma adecuada, provocando dificultad para respirar y tos persistente. 
                No solo el fumador activo está en riesgo, también los fumadores pasivos pueden desarrollar EPOC al estar expuestos de forma continua al humo del tabaco.
                </p>

              </div>
              <div className="cause-item">
              <div className="card-image">
                  <img src={ContaminacionImg} alt="Asma Bronquial" />
                </div>
                <h3>Contaminación ambiental</h3>
                <p>Exposición prolongada a humos y partículas</p>
                <p className="cause-detail">
                La exposición prolongada a contaminantes del aire, tanto en el entorno laboral como en el doméstico, también puede contribuir al desarrollo de la EPOC. 
                Entre estos contaminantes se encuentran el humo de leña utilizado para cocinar o calentar hogares sin una ventilación adecuada, el polvo industrial, 
                los humos de combustión y los gases tóxicos. Este tipo de exposición es más común en países en vías de desarrollo o en zonas rurales, donde el uso de biomasa 
                como fuente de energía es frecuente. Las partículas contaminantes inhaladas provocan inflamación crónica de las vías respiratorias, daño estructural y 
                reducción progresiva de la función pulmonar.
                </p>
              </div>
              <div className="cause-item">
              <div className="card-image">
                  <img src={GeneticoImg} alt="Asma Bronquial" />
                </div>
                <h3>Factores genéticos</h3>
                <p>Como la deficiencia de alfa-1 antitripsina</p>
                <p className="cause-detail">
                Aunque representa un pequeño porcentaje de los casos, algunas personas pueden desarrollar EPOC debido a una predisposición genética. La causa genética más 
                conocida es la deficiencia de alfa-1 antitripsina, una proteína que protege al tejido pulmonar del daño causado por enzimas liberadas durante procesos inflamatorios.
                 Las personas con esta deficiencia presentan un mayor riesgo de desarrollar EPOC a una edad temprana, especialmente si fuman o están expuestas a 
                 contaminantes ambientales. Este tipo de EPOC puede ser difícil de diagnosticar si no se considera la historia familiar y genética del paciente.
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