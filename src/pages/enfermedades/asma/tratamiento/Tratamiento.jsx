import { Container, Row, Col, Card } from 'react-bootstrap';
import './Tratamiento.scss';

import termoplastiaImg from '../../../../assets/termoplastia.png';
import teofilinaImg from '../../../../assets/teofilina.png';
import inhaladoresImg from '../../../../assets/inhaladores.png';
import broncodilatadoresImg from '../../../../assets/broncodilatadores.png';
import anticolinergicosImg from '../../../../assets/anticolinergicos.png';
import inmunoterapiaImg from '../../../../assets/inmunoterapia.png';
import biologicosImg from '../../../../assets/biologicos.png';
import planPulmonarImg from '../../../../assets/plan-pulmonar.png';
import cortiesteroides from '../../../../assets/corticosteroides.png';
import leucotrienos from '../../../../assets/leucotrienos.jpeg';



const Tratamiento = () => {
  return (
    <div className="tratamiento-detail">
      <Container>
        <Row>
          <Col>
            <h2 className="tratamiento-title">Tratamiento</h2>
          </Col>
        </Row>

        {/* Introducción */}
        <Row className="mt-4">
          <Col>
            <Card className="tratamiento-card">
              <Card.Body>
                <p className="intro-text">
                  La prevención y el control a largo plazo son la clave para detener los ataques de asma antes de que comiencen. El tratamiento suele
                  consistir en aprender a reconocer los factores desencadenantes, tomar medidas para evitarlos y hacer un seguimiento de la
                  respiración para asegurarse de que los medicamentos mantienen bajo control los síntomas del asma. En caso de un brote de asma, es posible
                  que tengas que utilizar un inhalador de alivio rápido.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Termoplastia bronquial */}
        <Row className="mt-4">
          <Col>
            <Card className="tratamiento-card">
              <Card.Header className="tratamiento-header">
                <h3>Termoplastia bronquial</h3>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col md={8}>
                    <p>
                      Este tratamiento se utiliza para tratar el asma grave que no mejora con los
                      corticosteroides inhalados u con otros medicamentos para el asma a largo
                      plazo. No es ampliamente disponible y no se usa extensamente.
                    </p>
                    <p>
                      Durante la termoplastia bronquial, el médico calienta con un electrodo el
                      interior de las vías respiratorias en los pulmones. El calor reduce el músculo
                      liso dentro de las vías respiratorias. Esto limita la capacidad de las vías
                      respiratorias para contraerse y, por ende, facilita la respiración y reduce los
                      ataques de asma. El procedimiento se realiza en tres sesiones durante las
                      visitas ambulatorias.
                    </p>
                  </Col>
                  <Col md={4}>
                    <div className="treatment-image">
                      <img src={termoplastiaImg} alt="Ilustración de termoplastia bronquial" className="medication-item" />
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Medicamentos */}
        <Row className="mt-4">
          <Col>
            <Card className="tratamiento-card">
              <Card.Header className="tratamiento-header">
                <h3>Medicamentos</h3>
              </Card.Header>
              <Card.Body>
                <p className="mb-4">
                  Los medicamentos adecuados para ti dependen de una serie de cuestiones, como tu edad, tus síntomas, los
                  desencadenantes del asma y lo que sea más efectivo para mantener el asma bajo control.
                </p>

                {/* Medicamentos para el control del asma a largo plazo */}
                <div className="medication-section">
                  <h4 className="section-subtitle">Los medicamentos para el control del asma a largo plazo:</h4>

                  <Row className="medication-item align-items-center">
                    <Col md={8}>
                      <h5>Corticosteroides inhalados:</h5>
                      <p>Reducen la hinchazón y la mucosidad en las vías respiratorias. Con frecuencia es necesario usarlos durante meses para obtener su máximo beneficio.</p>
                    </Col>
                    <Col md={4} className="text-center">
                      <img src={cortiesteroides} alt="Corticosteroides inhalados" className="medication-image" />
                    </Col>
                  </Row>

                  <Row className="medication-item align-items-center">
                    <Col md={8}>
                      <h5>Modificadores de leucotrienos:</h5>
                      <p>Bloquean efectos de los leucotrienos, sustancias inmunitarias que causan síntomas. Su efecto puede durar hasta 24 horas.</p>
                    </Col>
                    <Col md={4} className="text-center">
                      <img src={leucotrienos} alt="Modificadores de leucotrienos" className="medication-image" />
                    </Col>
                  </Row>

                  <Row className="medication-item align-items-center">
                    <Col md={8}>
                      <h5>Inhaladores combinados:</h5>
                      <p>Contienen corticosteroide preventivo y medicamento de rescate, lo que simplifica el tratamiento y mejora el control.</p>
                    </Col>
                    <Col md={4} className="text-center">
                      <img src={inhaladoresImg} alt="Inhaladores combinados" className="medication-image" />
                    </Col>
                  </Row>

                  <Row className="medication-item align-items-center">
                    <Col md={8}>
                      <h5>Teofilina:</h5>
                      <p>Píldora diaria que relaja los músculos alrededor de las vías respiratorias. Se usa menos frecuentemente y requiere monitoreo.</p>
                    </Col>
                    <Col md={4} className="text-center">
                      <img src={teofilinaImg} alt="Teofilina" className="medication-image" />
                    </Col>
                  </Row>
                </div>

                {/* Medicamentos de alivio rápido */}
                <div className="medication-section mt-4">
                  <h4 className="section-subtitle">Los medicamentos de alivio rápido (de rescate):</h4>

                  <Row className="medication-item align-items-center">
                    <Col md={8}>
                      <h5>Agonistas beta de acción rápida:</h5>
                      <p>Broncodilatadores que actúan en minutos para relajar los músculos de las vías respiratorias durante un ataque.</p>
                    </Col>
                    <Col md={4} className="text-center">
                      <img src={broncodilatadoresImg} alt="Broncodilatadores de acción rápida" className="medication-image" />
                    </Col>
                  </Row>

                  <Row className="medication-item align-items-center">
                    <Col md={8}>
                      <h5>Agentes anticolinérgicos:</h5>
                      <p>Como ipratropio y tiotropio, ayudan a abrir las vías respiratorias y mejoran la respiración rápidamente.</p>
                    </Col>
                    <Col md={4} className="text-center">
                      <img src={anticolinergicosImg} alt="Agentes anticolinérgicos" className="medication-image" />
                    </Col>
                  </Row>

                  <Row className="medication-item align-items-center">
                    <Col md={8}>
                      <h5>Corticosteroides orales e intravenosos:</h5>
                      <p>Utilizados para tratar inflamaciones graves durante ataques agudos de asma.</p>
                    </Col>
                    <Col md={4}></Col>
                  </Row>
                </div>

                {/* Medicamentos contra la alergia */}
                <div className="medication-section mt-4">
                  <h4 className="section-subtitle">Los medicamentos contra la alergia:</h4>

                  <Row className="medication-item align-items-center">
                    <Col md={8}>
                      <h5>Inmunoterapia:</h5>
                      <p>Reduce gradualmente la reacción del sistema inmunológico frente a alérgenos específicos a través de inyecciones.</p>
                    </Col>
                    <Col md={4} className="text-center">
                      <img src={inmunoterapiaImg} alt="Inmunoterapia" className="medication-image" />
                    </Col>
                  </Row>

                  <Row className="medication-item align-items-center">
                    <Col md={8}>
                      <h5>Productos biológicos:</h5>
                      <p>Medicamentos como omalizumab, mepolizumab, etc., para casos de asma grave persistente.</p>
                    </Col>
                    <Col md={4} className="text-center">
                      <img src={biologicosImg} alt="Productos biológicos" className="medication-image" />
                    </Col>
                  </Row>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>


        {/* Plan de acción */}
        <Row className="mt-4">
          <Col>
            <Card className="tratamiento-card">
              <Card.Header className="tratamiento-header">
                <h3>Plan de acción</h3>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col md={8}>
                    <p>
                      Colabora con el médico para elaborar un plan de acción para el asma que detalle cuándo tomar medicamentos, cuándo ajustar dosis y cómo evitar desencadenantes.
                    </p>
                    <p>
                      Puedes usar un medidor de flujo espiratorio regularmente para verificar la efectividad del tratamiento.
                    </p>
                  </Col>
                  <Col md={4}>
                    <div className="treatment-image">
                      <img src={planPulmonarImg} alt="Plan de acción para el asma" className="medication-item" />
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Tratamiento;
