import './Sintomas.scss'; 
import imagenTos from '../../../../assets/Sintomas.png';

const Sintomas = () => {
  return (
    <div className="sintomas-container">
      <header className="sintomas-header">
        <h1 className="sintomas-title">Síntomas</h1>
      </header>

      <div className="sintomas-sections">
        <section className="que-es-section description-section">
          <div className="section-content">
            <h2 className="section-title">Síntomas Frecuentes</h2>
            <div className="sintomas-text">
              <p>
              La EPOC es una enfermedad progresiva y crónica, lo que significa que sus síntomas aparecen gradualmente y empeoran con el tiempo. En las primeras etapas, 
              muchas personas pueden no notar signos evidentes, pero a medida que avanza la enfermedad, los síntomas se vuelven más severos e 
              incapacitantes. Los síntomas principales de la EPOC incluyen:
              </p>
            </div>
          </div>
        </section>

        <section className="Sintomas-Epoc">
          <div className="Sintomas">
            <h3>1. Falta de aire o dificultad para respirar (Disnea) y Tos persistente:</h3>
            <ul>
              <li>
              Al principio, la disnea ocurre solo durante el ejercicio o esfuerzos físicos.
              </li>
              <li>
              A medida que la enfermedad progresa, la falta de aire se presenta incluso en actividades cotidianas como caminar, subir escaleras o vestirse.
              </li>
              <li>
              En las etapas más avanzadas, los pacientes pueden experimentar disnea incluso en reposo.
              </li>  
              <li>
              Personas con EPOC avanzada pueden sentirse como si respiraran a través de una pajilla todo el tiempo.
              </li>
              <li>Puede comenzar como una tos ocasional, pero con el tiempo se vuelve constante y molesta. 
                Se agrava en la mañana o al estar expuesto a humo, polvo o contaminación.</li>
            </ul>
          </div>
          <div className="Sintomas">
            <h3>2. Sibilancias (Sonido Agudo al Respirar):</h3>
            <ul>
              <li>Son ruidos silbantes o chillidos que ocurren al respirar, especialmente al exhalar.
                Se deben a que las vías respiratorias están estrechas e inflamadas.</li>
              <li>Pueden aumentar con infecciones respiratorias o exposición a alérgenos como polvo, humo o polen.</li>
              <li> No siempre es un dolor intenso, pero puede sentirse como una sensación de &quot;apretón&quot; o congestión.</li>
              <li>Se agrava durante crisis respiratorias o infecciones pulmonares.</li>
            </ul>
          </div>
          <div className="imagen-contenedor">
            <img 
              src={imagenTos} 
              alt="Ilustración de síntomas de EPOC"
              className="sintoma-imagen"
            />
          </div>
          <div className="Sintomas">
            <h3>3. Fatiga Extrema y Debilidad:</h3>
            <ul>
              <li> El cuerpo gasta más energía para respirar, lo que produce agotamiento constante.</li>
              <li>Las personas con EPOC suelen sentirse cansadas incluso después de actividades simples como bañarse o vestirse.
              La fatiga puede empeorar con el tiempo, afectando la calidad de vida y la movilidad.
              </li>
              <li>El cuerpo usa mucha energía para respirar, lo que causa desgaste muscular y pérdida de masa corporal.
                También puede haber pérdida de apetito debido a la fatiga y dificultad para respirar mientras se come.</li>
            </ul>
          </div>
          <div className="Sintomas">
            <h3>4. Cianosis (Coloración Azulada en la Piel y Labios):</h3>
            <ul>
              <li> Ocurre cuando el nivel de oxígeno en la sangre es demasiado bajo y el cuerpo no puede oxigenar adecuadamente los tejidos.</li>
              <li>Se observa principalmente en los labios, uñas, dedos de las manos y pies, y en casos más graves, también en la cara o las orejas.
              </li>
              <li>Es un signo de insuficiencia respiratoria grave que requiere atención médica urgente, ya que indica que el oxígeno no está llegando correctamente a los órganos vitales.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sintomas;