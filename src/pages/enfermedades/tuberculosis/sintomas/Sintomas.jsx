import  Accordion  from "react-bootstrap/Accordion";

const Sintomas = () => {
    return (
      <div className="que-es-container">
        <header className="que-es-header">
          <h1 className="que-es-title">Sintomas</h1>
        </header>
        <section className="que-es-section">
          <div className="section-content">
            <h2 className="section-title">Sintomas de la Tuberculosis</h2>
            <p className="section-description">
              La tuberculosis (TB) es una enfermedad infecciosa causada por la bacteria Mycobacterium 
              tuberculosis, que afecta principalmente los pulmones, aunque también puede comprometer otros órganos 
              (tuberculosis extrapulmonar). Los síntomas varían según la etapa de la enfermedad (latente o activa) y 
              la localización de la infección. A continuación, se detallan los síntomas más comunes:
            </p>
            <Accordion defaultActiveKey={['0', '1', '2']} alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>1. Tuberculosis pulmonar (afecta los pulmones)</Accordion.Header>
                <Accordion.Body>
                  <p>Es la forma más común de la enfermedad. Los síntomas incluyen:</p>
                <ul>
                  <li>Tos persistente: Dura más de 2-3 semanas. Inicialmente puede ser seca, pero con el 
                    tiempo puede producir esputo (flema) o incluso sangre (hemoptisis).</li> 
                  <li>Dolor en el pecho: Puede empeorar al toser o respirar profundamente.</li>
                  <li>Fiebre: Generalmente baja (alrededor de 37.5°C a 38.5°C) y más frecuente por la tarde o noche.</li>
                  <li>Sudores nocturnos: Sudoración excesiva durante la noche, a menudo acompañada de escalofríos.</li>
                  <li>Pérdida de peso involuntaria: Debido a la falta de apetito y al esfuerzo metabólico del cuerpo para combatir la infección.</li>
                  <li>Fatiga y debilidad: Sensación de cansancio extremo incluso después de descansar.</li>
                  <li>Pérdida de apetito: Disminución del deseo de comer.</li>
                  <li>Dificultad para respirar: En casos avanzados, cuando la infección afecta una gran parte del tejido pulmonar.</li>
                </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>2. Tuberculosis extrapulmonar (afecta otros órganos)</Accordion.Header>
                <Accordion.Body>
                <p>Cuando la bacteria se disemina fuera de los pulmones, los síntomas dependen del órgano afectado:</p>
                <ul>
                  <li>Tuberculosis ganglionar: Inflamación de los ganglios linfáticos, especialmente en el cuello, que pueden volverse dolorosos y supurar.</li>
                  <li>Tuberculosis ósea: Dolor en los huesos o articulaciones, hinchazón y, en casos graves, fracturas.</li>
                  <li>Tuberculosis meníngea: Infección de las membranas que cubren el cerebro y la médula espinal,  
                  causando dolor de cabeza intenso, rigidez en el cuello, fiebre y  alteraciones neurológicas.</li>
                  <li>Tuberculosis genitourinaria: Dolor al orinar, sangre en la orina, dolor pélvico o infertilidad.</li>
                  <li>Tuberculosis gastrointestinal: Dolor abdominal, diarrea, sangrado rectal o dificultad para tragar.</li>
                  <li>Tuberculosis cutánea: Lesiones en la piel, como úlceras o nódulos.</li>
                </ul>

                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>3. Tuberculosis latente</Accordion.Header>
                <Accordion.Body>
                  En esta etapa, la  bacteria está presente en el cuerpo pero no causa síntomas ni es  contagiosa. 
                  Sin embargo, puede reactivarse y convertirse en tuberculosis activa si el sistema inmunológico se debilita 
                  (por ejemplo, por VIH,  diabetes o tratamientos inmunosupresores).
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </section>
      </div>
    );
  };
    
    export default Sintomas