import './Descripcion.scss'; 
import TabaquismoImg from '../../../../assets/Tabaquismo.jpg';
import ContaminacionImg from '../../../../assets/Contaminacion.jpg';
import GeneticoImg from '../../../../assets/Genetico.jpg';
import GraficoEPOC from './GraficoEPOC';
import PulmonEPOCImg from '../../../../assets/EPOC3.png';

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
          <div className="description-image">
                <img src={PulmonEPOCImg} alt="Pulmón afectado por EPOC" />
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
              <p className="estadisticas-text">
                Fuente: Datos estimados basados en informes de la Organización Mundial de la Salud (2022)
                </p>
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
                
                El humo del tabaco contiene miles de sustancias químicas, muchas de ellas tóxicas e irritantes. 
                Al inhalarlas de forma repetida, estas sustancias dañan progresivamente las vías respiratorias y los alvéolos pulmonares, 
                lo que genera una inflamación crónica, destrucción del tejido pulmonar
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
                Entre estos contaminantes se encuentran el humo de leña utilizado para cocinar o calentar hogares sin una ventilación adecuada, el polvo industrial y los gases tóxicos.
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