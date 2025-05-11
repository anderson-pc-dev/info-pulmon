import  Accordion  from "react-bootstrap/Accordion";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Tratamiento = () => {
    return (
      <div className="que-es-container">
        <header className="que-es-header">
          <h1 className="que-es-title">Tratamiento</h1>
        </header>
        <section className="que-es-section">
          <div className="section-content">
            <h2 className="section-title">Tratamiento de la Tuberculosis</h2>
            <p className="section-description">
              El tratamiento de la tuberculosis es un proceso prolongado que puede durar entre 6 y 24 meses, 
              dependiendo del tipo de tuberculosis y su resistencia a los medicamentos. Se basa en una 
              combinación de antibióticos específicos que eliminan la bacteria Mycobacterium tuberculosis y 
              evitan su propagación.
              El tratamiento se divide en dos fases principales:
              <ul>
                <li>Tratamiento Estándar para la Tuberculosis Sensible a los Fármacos(Fase 1 y 2)</li>
                <li>Tratamiento para Tuberculosis Multirresistente (TB-MDR)</li>
              </ul>
            </p>
            <Accordion defaultActiveKey={['0', '1']} alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Tratamiento Estándar</Accordion.Header>
                <Accordion.Body>
                <Row>
                  <Col>
                    <h3 className="subsection-title">Primer fase:</h3>
                    <p>Fase Intensiva (2 meses)
                    Durante los primeros 60 días, el paciente debe tomar cuatro medicamentos combinados diariamente:</p>
                    <ul>
                      <li>Isoniazida (INH)</li>
                      <li>Rifampicina (RIF)</li>
                      <li>Pirazinamida (PZA)</li>
                      <li>Etambutol (EMB)</li>
                    </ul>
                    <p>Estos medicamentos son esenciales para eliminar la bacteria y prevenir la resistencia a los fármacos.</p>
                    <p>La persona puede dejar de ser contagiosa después de 2-4 semanas de tratamiento adecuado. </p>
                  </Col>
                  <Col>
                    <h3 className="subsection-title">Segunda fase:</h3>
                    <p>Fase de Continuación (4 meses), 
                    una vez reducida la infección activa, se eliminan algunos fármacos y se continúan solo dos:</p>
                    <ul>
                      <li>Isoniazida (INH)</li>
                      <li>Rifampicina (RIF)</li>
                    </ul>
                    <p>Se toman durante 4 meses para eliminar las bacterias restantes y evitar recaídas.</p>
                    <p>Saltarse dosis o abandonar el tratamiento puede hacer que la TB reaparezca con mayor resistencia a los antibióticos.</p>
                  </Col>

                </Row>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Tratamiento para Tuberculosis Multirresistente (TB-MDR)</Accordion.Header>
                <Accordion.Body>
                <p>Cuando la tuberculosis se vuelve resistente a los medicamentos principales, es mucho más difícil de tratar. 
                  Este tipo de tuberculosis no responde a la isoniazida ni a la rifampicina, los dos fármacos esenciales del 
                  tratamiento estándar.</p>
                <p>Esquema de Tratamiento para TB-MDR
                Los pacientes reciben una combinación de medicamentos menos comunes, como:</p>  
                <ul>
                  <li>Bedaquilina (BDQ), Aprobada recientemente para TB-MDR, ayuda a reducir la mortalidad.</li>
                  <li>Linezolid (LZD), Un antibiótico de última línea, potente pero con efectos secundarios severos.</li>
                  <li>Levofloxacina (LFX) o Moxifloxacina (MXF), Pertenece a la familia de las fluoroquinolonas, 
                  usadas contra bacterias resistentes.</li>
                  <li>Cicloserina (Cs) o Terizidona (Trd), Antibióticos 
                  alternativos en casos graves.</li>
                  <li>Clofazimina (CFZ), Se usa en la lepra y en la TB resistente 
                  para reforzar el tratamiento.</li>
                  <li>Delamanid (DLM), Similar a la bedaquilina, ayuda a pacientes con 
                  resistencia extrema.</li>
                </ul>
                <p>Duración: Entre 18 y 24 meses, dependiendo de la respuesta del paciente.</p>
                <p>Efectos Secundarios del Tratamiento de TB-MDR</p>
                <ul>
                  <li>Náuseas, vómitos y pérdida de apetito.</li>
                  <li>Pérdida de audición (por antibióticos como la amikacina o capreomicina).</li>
                  <li>Problemas neurológicos como depresión o psicosis (debido a la cicloserina).</li>
                  <li>Daño hepático o insuficiencia renal.</li>
                  <li> Prolongación del intervalo QT (riesgo de arritmias cardíacas con bedaquilina).</li>
                </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </section>
      </div>
    );
  };
    
  export default Tratamiento