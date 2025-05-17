import './Sintomas.scss'; 
import imagenAsma from '../../../../assets/ataqueasma.jpg';
import { Card, Row, Col } from 'react-bootstrap';

const SintomasAsma = () => {
  return (
    <div className="sintomas-container">
      <header className="sintomas-header">
        <h1 className="sintomas-title">Síntomas</h1>
      </header>

      <div className="sintomas-sections">
        <section className="descripcion-section description-section">
          <div className="section-content">
            <h2 className="section-title">Síntomas Frecuentes</h2>
            <div className="sintomas-text">
              <p>
                Los síntomas del asma son el resultado de la inflamación y el estrechamiento de las vías respiratorias (bronquios), 
                lo que dificulta el paso del aire hacia los pulmones. Estos síntomas pueden variar en intensidad y frecuencia, 
                dependiendo de la gravedad de la enfermedad y de la exposición a factores desencadenantes. 
                A continuación, se detallan los síntomas más comunes del asma:
              </p>
            </div>
          </div>
        </section>

        <section className="sintomas-principales">
          <div className="sintoma-box">
            <h3>Síntomas Comunes</h3>
            <ul>
              <li>
                <strong>Dificultad para respirar (disnea)</strong>: Sensación de falta de aire o incapacidad para respirar adecuadamente.
              </li>
              <li>
                <strong>Tos</strong>: Generalmente seca y persistente, especialmente por la noche o temprano en la mañana.
              </li>
              <li>
                <strong>Sibilancias</strong>: Sonido silbante que se produce al respirar, principalmente al exhalar.
              </li>
              <li>
                <strong>Opresión en el pecho</strong>: Sensación de presión o constricción en la zona torácica.
              </li>
            </ul>
          </div>

          <div className="imagen-contenedor">
            <img 
              src={imagenAsma} 
              alt="Ilustración de síntomas de asma"
              className="sintoma-imagen"
            />
          </div>
        </section>

        <section className="gravedad-section">
          <h2 className="section-title">Síntomas de gravedad</h2>
          <div className="sintomas-text">
            <p>
              Los síntomas del asma pueden variar desde leves hasta graves, y su intensidad puede cambiar con el tiempo. 
              Se clasifican en:
            </p>
          </div>

          <div className="niveles-gravedad">
            <Row xs={1} md={2} className="g-4">
              <Col>
                <Card className="nivel-asma nivel-intermitente">
                  <Card.Body>
                    <Card.Title as="h3">Asma leve intermitente:</Card.Title>
                    <Card.Text>
                      Síntomas leves que ocurren menos de dos veces por semana.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              
              <Col>
                <Card className="nivel-asma nivel-leve">
                  <Card.Body>
                    <Card.Title as="h3">Asma leve persistente:</Card.Title>
                    <Card.Text>
                      Síntomas más de dos veces por semana, pero no todos los días.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              
              <Col>
                <Card className="nivel-asma nivel-moderada">
                  <Card.Body>
                    <Card.Title as="h3">Asma moderada persistente:</Card.Title>
                    <Card.Text>
                      Síntomas diarios que afectan la actividad diaria.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              
              <Col>
                <Card className="nivel-asma nivel-grave">
                  <Card.Body>
                    <Card.Title as="h3">Asma grave persistente:</Card.Title>
                    <Card.Text>
                      Síntomas continuos que limitan las actividades físicas.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </section>

        <section className="ataque-section">
          <h2 className="section-title">Ataque de Asma</h2>
          <div className="sintomas-text">
            <p>
              Un ataque de asma ocurre cuando los síntomas empeoran repentinamente debido a la inflamación 
              y el estrechamiento severo de las vías respiratorias. Los síntomas incluyen:
            </p>
          </div>

          <div className="sintoma-box crisis">
            <ul>
              <li>Dificultad respiratoria extrema.</li>
              <li>Sibilancias intensas.</li>
              <li>Tos incontrolable.</li>
              <li>Opresión en el pecho severa.</li>
              <li>Dificultad para hablar o caminar.</li>
              <li>Coloración azulada en labios o uñas (cianosis), lo que indica falta de oxígeno.</li>
              <li>Ansiedad o pánico debido a la dificultad para respirar.</li>
            </ul>
          </div>

          <div className="alerta-emergencia">
            <p><strong>Importante:</strong> Un ataque de asma grave es una emergencia médica y requiere atención inmediata.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SintomasAsma;