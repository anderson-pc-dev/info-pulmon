import './Prevencion.scss';
import FumarImg from '../../../../assets/Tabaquismo.jpg';
import ContaminacionImg from '../../../../assets/Contaminacion.jpg';
import VacunasImg from '../../../../assets/Vaccine.jpg';
import imagenTos from '../../../../assets/Prevencion.jpg';

const Prevencion = () => {
  return (
    <div className="prevencion-container">
      <header className="prevencion-header">
        <h1 className="prevencion-title">Prevención y Cuidados</h1>
      </header>

      <section className="intro-section">
        <div className="intro-content">
          <p className="intro-text">
            La EPOC es una enfermedad crónica y progresiva, pero se puede prevenir en gran medida y, 
            una vez diagnosticada, se pueden tomar medidas para frenar su avance y mejorar la calidad 
            de vida del paciente. La clave está en evitar los factores de riesgo, seguir un estilo de 
            vida saludable y cumplir con los tratamientos médicos recomendados.
          </p>
        </div>
      </section>

      <section className="medidas-section">
        <div className="section-header">
          <h2 className="section-title">Medidas Clave de Prevención</h2>
          <div className="section-divider"></div>
        </div>

        <div className="medidas-grid">
          <div className="medida-card">
            <div className="medida-image-container">
              <img src={FumarImg} alt="Dejar de fumar" className="medida-image" />
            </div>
            <div className="medida-content">
              <h3>1. Dejar de Fumar</h3>
              <p className="medida-subtitle">La prevención más efectiva</p>
              <div className="medida-details">
                <p>
                  El tabaquismo es la causa principal de la EPOC. Dejar de fumar es la mejor forma 
                  de prevenir la enfermedad o evitar que empeore.
                </p>
                <ul>
                  <li><strong>Beneficios:</strong> Ralentiza la progresión y mejora la función pulmonar</li>
                  <li><strong>Métodos efectivos:</strong> Terapia de reemplazo de nicotina, medicamentos (vareniclina, bupropión), terapia psicológica</li>
                  <li><strong>Evitar:</strong> Humo de segunda mano</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="medida-card">
            <div className="medida-image-container">
              <img src={ContaminacionImg} alt="Reducir contaminación" className="medida-image" />
            </div>
            <div className="medida-content">
              <h3>2. Reducir la Exposición a Contaminantes</h3>
              <p className="medida-subtitle">Protege tus pulmones</p>
              <div className="medida-details">
                <p>
                  La exposición a contaminantes del aire acelera el daño pulmonar y empeora la EPOC.
                </p>
                <ul>
                  <li><strong>En el trabajo:</strong> Usar mascarillas protectoras y asegurar ventilación adecuada</li>
                  <li><strong>En casa:</strong> Evitar cocinar con leña/carbón, usar purificadores de aire, ventilar habitaciones</li>
                  <li><strong>Exterior:</strong> Evitar zonas con alta contaminación atmosférica</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="medida-card">
            <div className="medida-image-container">
              <img src={VacunasImg} alt="Vacunación" className="medida-image" />
            </div>
            <div className="medida-content">
              <h3>3. Vacunación para Proteger los Pulmones</h3>
              <p className="medida-subtitle">Prevención de infecciones</p>
              <div className="medida-details">
                <p>
                  Las infecciones respiratorias pueden agravar la EPOC o acelerar su progresión.
                </p>
                <ul>
                  <li><strong>Vacuna antigripal:</strong> Anual para reducir riesgo de infecciones graves</li>
                  <li><strong>Vacuna neumocócica:</strong> Cada 5-10 años para prevenir neumonía</li>
                  <li><strong>Vacuna COVID-19:</strong> Esencial por riesgo de complicaciones</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="diagnostico-section">
        <div className="section-header">
          <h2 className="section-title">Recuerda cumplir lo siguiente</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="diagnostico-content">
          <div className="diagnostico-text">
            <div className="recomendacion-item">
              <h3 className="recomendacion-subtitle">Manejo del Estrés y la Ansiedad</h3>
              <p>
                Muchas personas con EPOC experimentan ansiedad y ataques de pánico debido a la dificultad para respirar.
              </p>
              <ul>
                <li><strong>Técnicas para reducir el estrés:</strong>
                  <ul className="sub-list">
                    <li>Ejercicios de respiración profunda y relajación</li>
                    <li>Terapias de mindfulness y meditación</li>
                    <li>Terapia psicológica o grupos de apoyo para pacientes con enfermedades respiratorias</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="recomendacion-item">
              <h3 className="recomendacion-subtitle">Cumplir con el Tratamiento Médico</h3>
              <ul>
                <li>Usar correctamente los inhaladores y medicamentos recetados</li>
                <li>Evitar automedicarse con medicamentos que puedan afectar la respiración (como algunos sedantes o betabloqueadores)</li>
                <li>Consultar al médico regularmente para evaluar la progresión de la enfermedad</li>
              </ul>
            </div>

            <div className="imagen-contenedor">
              <img 
                src={imagenTos} 
                alt="Ilustración de síntomas de EPOC"
                className="sintoma-imagen"
              />
            </div>

            <div className="recomendacion-item">
              <h3 className="recomendacion-subtitle">Uso Adecuado de Oxígeno (Si es Necesario)</h3>
              <ul>
                <li>En casos avanzados de EPOC, algunos pacientes requieren oxigenoterapia domiciliaria</li>
                <li>No fumar ni estar cerca de llamas mientras se usa oxígeno, ya que puede ser inflamable</li>
              </ul>
            </div>

            <div className="recomendacion-item">
              <h3 className="recomendacion-subtitle">Evitar Factores que Pueden Agravar la EPOC</h3>
              <ul>
                <li><strong>Evitar infecciones respiratorias:</strong> Lavarse las manos con frecuencia y usar mascarilla en lugares con alta contaminación</li>
                <li>Evitar cambios bruscos de temperatura, ya que el frío extremo o el calor excesivo pueden empeorar los síntomas</li>
                <li><strong>Descansar bien:</strong> Dormir al menos 7-8 horas por noche para mantener la energía y el sistema inmunológico fuerte</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="recomendacion-section">
        <div className="recomendacion-content">
          <div className="recomendacion-icon">ℹ️</div>
          <div>
            <h3 className="recomendacion-title">Recomendación Esencial</h3>
            <p>
              Si tienes antecedentes de tabaquismo o exposición prolongada a contaminantes, 
              consulta con un neumólogo incluso sin síntomas evidentes. La detección precoz 
              marca la diferencia en el pronóstico de la EPOC.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Prevencion;