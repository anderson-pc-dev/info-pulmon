import './Tratamiento.scss';
import TabaquismoImg from '../../../../assets/broncodilatador.png';
import ContaminacionImg from '../../../../assets/Cortisoides.jpg';
import GeneticoImg from '../../../../assets/antibioticos.jpg';

const Tratamiento = () => {
  return (
    <div className="tratamiento-container">
      <header className="tratamiento-header">
          <h1 className="tratamiento-title">Tratamiento</h1>
      </header>

      <section className="intro-section">
        <div className="intro-content">
          <p className="intro-text">
            Para controlar efectivamente la Enfermedad Pulmonar Obstructiva Crónica (EPOC), 
            es fundamental realizar cambios significativos en el estilo de vida y seguir 
            un tratamiento médico adecuado. Este abordaje integral incluye:
          </p>
        </div>
      </section>

      <section className="lifestyle-section">
        <div className="section-header">
          <h2 className="section-title">Transforma tu estilo de vida</h2>
        </div>
        
        <div className="cards-grid">
          <div className="treatment-card card">
            <div className="card-header">
              <div className="card-icon">🚭</div>
              <h3 className="card-title">Dejar de fumar</h3>
            </div>
            <div className="card-content">
              <p>La medida más efectiva para frenar el avance de la enfermedad.</p>
              <ul>
                <li>Reduce la inflamación pulmonar</li>
                <li>Disminuye la progresión del daño</li>
                <li>Mejora la función respiratoria en semanas</li>
              </ul>
            </div>
            <div className="card-footer">
              <span className="tag essential">Prioritario</span>
            </div>
          </div>

          <div className="treatment-card card">
            <div className="card-header">
              <div className="card-icon">🏋️</div>
              <h3 className="card-title">Ejercicio y rehabilitación</h3>
            </div>
            <div className="card-content">
              <p>Programas diseñados para fortalecer tu capacidad respiratoria.</p>
              <ul>
                <li>Mejora la tolerancia al esfuerzo</li>
                <li>Fortalece músculos respiratorios</li>
                <li>Reduce la sensación de falta de aire</li>
              </ul>
            </div>
            <div className="card-footer">
              <span className="tag recommended">Recomendado</span>
            </div>
          </div>

          <div className="treatment-card card">
            <div className="card-header">
              <div className="card-icon">🍎</div>
              <h3 className="card-title">Nutrición especializada</h3>
            </div>
            <div className="card-content">
              <p>Alimentación adaptada a tus necesidades pulmonares.</p>
              <ul>
                <li>Mantiene peso ideal</li>
                <li>Proporciona energía sostenida</li>
                <li>Refuerza el sistema inmunológico</li>
              </ul>
            </div>
            <div className="card-footer">
              <span className="tag complementary">Complementario</span>
            </div>
          </div>
        </div>
      </section>

      <section className="medicamentos-section">
        <div className="section-header">
          <h2 className="section-title">Medicamentos Esenciales</h2>
          <div className="section-divider"></div>
        </div>

        <div className="medicamentos-grid">
          <div className="medicamento-card">
            <div className="medicamento-image-container">
              <img src={TabaquismoImg} alt="Broncodilatadores" className="medicamento-image" />
            </div>
            <div className="medicamento-content">
              <h3>Broncodilatadores</h3>
              <p className="medicamento-subtitle">Abren las vías respiratorias</p>
              <div className="medicamento-details">
                <p>
                  Los broncodilatadores son medicamentos que ayudan a abrir las vías respiratorias y se administran 
                  mediante inhaladores o nebulizadores. Existen dos tipos principales:
                </p>
                <ul>
                  <li><strong>Acción corta:</strong> Alivian rápidamente los síntomas (Salbutamol, Ipratropio)</li>
                  <li><strong>Acción prolongada:</strong> Mantienen las vías abiertas (Tiotropio, Formoterol, Salmeterol)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="medicamento-card">
            <div className="medicamento-image-container">
              <img src={ContaminacionImg} alt="Corticosteroides" className="medicamento-image" />
            </div>
            <div className="medicamento-content">
              <h3>Corticosteroides</h3>
              <p className="medicamento-subtitle">Reducen la inflamación</p>
              <div className="medicamento-details">
                <p>
                  Los corticosteroides inhalados reducen la inflamación de las vías respiratorias y se utilizan 
                  principalmente en casos avanzados o en combinación con broncodilatadores.
                </p>
                <ul>
                  <li>Efectivos para controlar síntomas persistentes</li>
                  <li>Ejemplos comunes: Budesonida, Fluticasona</li>
                  <li>Pueden combinarse con broncodilatadores en un mismo inhalador</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="medicamento-card">
            <div className="medicamento-image-container">
              <img src={GeneticoImg} alt="Antibióticos" className="medicamento-image" />
            </div>
            <div className="medicamento-content">
              <h3>Antibióticos</h3>
              <p className="medicamento-subtitle">Para infecciones respiratorias</p>
              <div className="medicamento-details">
                <p>
                  Se utilizan en pacientes con EPOC propensos a desarrollar infecciones respiratorias como 
                  neumonía o bronquitis.
                </p>
                <ul>
                  <li>Tratan infecciones bacterianas que pueden empeorar la EPOC</li>
                  <li>Ejemplos: Amoxicilina, Azitromicina</li>
                  <li>En casos virales pueden usarse antivirales específicos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="emergency-section">
        <div className="emergency-content">
          <div className="emergency-icon">⚠️</div>
          <div>
            <h3 className="emergency-title">Señales de alerta que requieren atención urgente</h3>
            <p>Reconoce los síntomas de una exacerbación que necesita atención médica inmediata:</p>
            <ul className="emergency-list">
              <li>Aumento repentino de dificultad para respirar</li>
              <li>Cambio en el color o cantidad de esputo</li>
              <li>Hinchazón en piernas o abdomen</li>
              <li>Labios o uñas azuladas (cianosis)</li>
              <li>Confusión o somnolencia inusual</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tratamiento;