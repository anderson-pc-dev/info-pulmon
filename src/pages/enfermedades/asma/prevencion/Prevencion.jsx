import './Prevencion.scss';

import AmbienteSaludable from '../../../../assets/ambiente_saludable.png';
import EvitarDesencadenantes from '../../../../assets/desencadenantes.png';
import MonitoreoSintomas from '../../../../assets/monitoreo_sintomas.png';
import PlanAccionEmergencia from '../../../../assets/plan_accion_prevesion.png';
import CuidarSalud from '../../../../assets/cuidar_salud.png';
import Tratamiento from '../../../../assets/tratamiento.png';

const Prevencion = () => {
  return (
    <div className="prevencion-container">
      <header className="prevencion-header">
        <h1 className="prevencion-title">Prevención y Cuidados</h1>
      </header>

      <div className="prevencion-sections">
        <section className="evitar-section">
          <div className="section-content">
            <h2 className="section-title">Evita los desencadenantes:</h2>
            <div className="prevencion-text">
              <p>
                Identificar y evitar las cosas que provocan tus síntomas es esencial. 
                Entre los desencadenantes más comunes están:
              </p>
            </div>
            
            <div className="info-box-container">
              <div className="info-box">
                <ul>
                  <li><strong>Alérgenos ambientales:</strong> Polvo, ácaros, polen, moho y pelo de animales. Mantén tu hogar limpio, usa fundas antialérgicas en almohadas y colchones.</li>
                  <li><strong>Irritantes:</strong> Humo de cigarro, contaminación, olores fuertes como perfumes, productos de limpieza con químicos irritantes o pinturas. Intenta usar productos sin fragancia y evita el contacto con el humo.</li>
                  <li><strong>Cambios climáticos:</strong> El frío intenso o los cambios bruscos de temperatura pueden afectar tus vías respiratorias. Usa bufandas para cubrir tu nariz y boca en clima frío.</li>
                  <li><strong>Ejercicio:</strong> Aunque es cierto que el ejercicio es importante, en algunas personas puede desencadenar síntomas asmáticos. Haz calentamiento antes de comenzar y usa el medicamento preventivo si tu médico lo recomienda.</li>
                </ul>
              </div>
              <div className="imagen-contenedor">
                <div className="imagen-placeholder evitar-triggers">
                  <img src={EvitarDesencadenantes} alt="Evitar Desencadenantes" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="tratamiento-section">
          <div className="section-content">
            <h2 className="section-title">Cumple con tu tratamiento:</h2>
            <div className="prevencion-text">
              <p>
                Tomar tus medicamentos de forma adecuada es una parte crucial del control del asma.
              </p>
            </div>
            
            <div className="info-box-container">
              <div className="info-box">
                <ul>
                  <li><strong>Inhaladores de mantenimiento:</strong> Estos reducen la inflamación y ayudan a prevenir crisis. Debes usarlos diariamente, incluso si te sientes bien.</li>
                  <li><strong>Inhaladores de rescate:</strong> Ayudan a aliviar los síntomas en momentos de crisis, como falta de aire o silbidos al respirar. Asegúrate de llevarlo siempre contigo.</li>
                  <li><strong>Revisiones médicas:</strong> Asiste a controles periódicos con tu médico, incluso si tus síntomas están controlados. Así se puede ajustar el tratamiento si es necesario.</li>
                </ul>
              </div>
              <div className="imagen-contenedor">
                <div className="imagen-placeholder tratamiento-medicamentos">
                  <img src={Tratamiento} alt="Tratamiento y Medicamentos" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="monitoreo-section">
          <div className="section-content">
            <h2 className="section-title">Conoce y monitorea tus síntomas:</h2>
            <div className="prevencion-text">
              <p>
                Llevar un registro de tus síntomas te ayudará a identificar patrones y a saber cuándo debes buscar ayuda. Algunos signos de advertencia incluyen:
              </p>
            </div>
            
            <div className="info-box-container">
              <div className="info-box">
                <ul>
                  <li><strong>Tos persistente,</strong> especialmente en la noche o temprano en la mañana.</li>
                  <li><strong>Dificultad para respirar</strong> o sensación de falta de aire al respirar.</li>
                  <li><strong>Silbidos al respirar (sibilancias).</strong></li>
                  <li><strong>Necesidad frecuente de usar el inhalador de rescate.</strong></li>
                </ul>
              </div>
              <div className="imagen-contenedor">
                <div className="imagen-placeholder sintomas-monitoreo">
                  <img src={MonitoreoSintomas} alt="Monitoreo de Síntomas" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ambiente-section">
          <div className="section-content">
            <h2 className="section-title">Mantén un ambiente saludable:</h2>
            <div className="prevencion-text">
              <p>
                Crear un entorno favorable ayuda a evitar las crisis asmáticas:
              </p>
            </div>
            
            <div className="info-box-container">
              <div className="info-box">
                <ul>
                  <li><strong>Limpieza frecuente:</strong> Aspira el polvo en lugar de barrer y usa trapos húmedos para limpiar. Lava sábanas y cortinas con agua caliente cada semana.</li>
                  <li><strong>Control de humedad:</strong> Usa deshumidificadores si la humedad es alta, ya que favorece el crecimiento de moho.</li>
                  <li><strong>Evita animales con pelo o plumas:</strong> Si eres alérgico a las mascotas, intenta no tenerlas dentro de casa o mantén áreas libres de ellos.</li>
                </ul>
              </div>
              <div className="imagen-contenedor">
                <div className="imagen-placeholder ambiente-saludable">
                  <img src={AmbienteSaludable} alt="Ambiente Saludable" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="salud-general-section">
          <div className="section-content">
            <h2 className="section-title">Cuida tu salud general:</h2>
            <div className="prevencion-text">
              <p>
                Fortalecer tu sistema respiratorio y tu bienestar general también ayuda a controlar el asma:
              </p>
            </div>
            
            <div className="info-box-container">
              <div className="info-box">
                <ul>
                  <li><strong>Hidratación:</strong> Bebe suficiente agua para mantener tus vías respiratorias húmedas y facilitar la respiración.</li>
                  <li><strong>Alimentación saludable:</strong> Consume frutas y alimentos ricos en antioxidantes para fortalecer tu sistema inmune.</li>
                  <li><strong>Ejercicio moderado:</strong> Mantente activo, pero consulta a tu médico sobre qué tipo de actividades son más adecuadas. Deportes como natación suelen ser recomendados para personas asmáticas.</li>
                  <li><strong>Prevención de infecciones:</strong> Las gripes y resfriados pueden empeorar el asma. Lava tus manos con frecuencia, usa cubrebocas en temporada de enfermedades y mantén tus vacunas al día.</li>
                </ul>
              </div>
              <div className="imagen-contenedor">
                <div className="imagen-placeholder salud-general">
                  <img src={CuidarSalud} alt="Cuidar la Salud General" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="plan-accion-section">
          <div className="plan-accion-header">
            <h2 className="plan-accion-title">Plan de acción</h2>
          </div>
          
          <div className="plan-content">
            <h3 className="section-title">Ten un plan de acción para emergencias:</h3>
            <div className="prevencion-text">
              <p>
                Es importante que sepas qué hacer si tus síntomas empeoran:
              </p>
            </div>
            
            <div className="info-box-container">
              <div className="info-box plan-emergencia">
                <ul>
                  <li><strong>Identifica signos de alerta:</strong> Como dificultad extrema para respirar, labios o uñas azulados, o si el inhalador de rescate no funciona.</li>
                  <li><strong>Sigue un plan de acción:</strong> Tu médico puede ayudarte a crear un plan detallado con instrucciones sobre qué hacer y qué medicamentos usar en cada etapa de tus síntomas.</li>
                  <li><strong>Comunica el plan:</strong> Asegúrate de que las personas cercanas a ti sepan qué hacer en caso de una crisis asmática, especialmente si alguna vez llegas a necesitar asistencia.</li>
                </ul>
              </div>
              <div className="imagen-contenedor">
                <div className="imagen-placeholder plan-accion-img">
                  <img src={PlanAccionEmergencia} alt="Plan de Acción de Emergencia" />
                </div>
              </div>
            </div>
            
            <div className="mensaje-final">
              <p>
                El asma, si se maneja adecuadamente, no debería limitar tus actividades diarias ni tu calidad de vida. Con cuidados constantes y un buen control, puedes llevar una vida plena y activa.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Prevencion;