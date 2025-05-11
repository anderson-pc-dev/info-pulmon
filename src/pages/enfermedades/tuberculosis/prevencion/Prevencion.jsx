import  Accordion  from "react-bootstrap/Accordion";

const Sintomas = () => {
    return (
      <div className="que-es-container">
        <header className="que-es-header">
          <h1 className="que-es-title">Prevencion</h1>
        </header>
        <section className="que-es-section">
          <div className="section-content">
            <h2 className="section-title">Prevencion de la Tuberculosis</h2>
            <p className="section-description">
            La tuberculosis es una enfermedad prevenible si se toman las medidas adecuadas. 
            La prevención es clave para evitar la propagación de Mycobacterium tuberculosis, 
            especialmente en comunidades con alta incidencia de la enfermedad. Aquí te presentamos 
            una serie de estrategias fundamentales para reducir el riesgo de infección y proteger la salud.
            </p>
            <Accordion defaultActiveKey={['0', '1', '2', '3']} alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>1. Vacunación con BCG (Bacilo de Calmette y Guérin)</Accordion.Header>
                <Accordion.Body>
                La vacuna BCG es la única vacuna disponible contra la tuberculosis y se administra principalmente 
                en recién nacidos. Su función principal es proteger contra las formas más graves de tuberculosis , 
                como la meningitis tuberculosa y la TB miliar, que afecta principalmente a niños pequeños. 
                No previene la infección en sí, pero reduce significativamente la gravedad de la enfermedad si 
                la persona llega a contagiarse. La OMS recomienda su aplicación en países con alta incidencia 
                de TB.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>2. Uso de mascarillas en zonas de alto riesgo</Accordion.Header>
                <Accordion.Body>
                  Las mascarillas ayudan a prevenir la propagación de la TB, especialmente en hospitales, 
                  cárceles y lugares cerrados con poca ventilación. Si convive con una persona con TB activa, 
                  usar mascarilla reduce el riesgo de inhalar las partículas infecciosas suspendidas en el aire. 
                  Los pacientes en tratamiento deben usar mascarillas en espacios públicos hasta que dejen de 
                  ser contagiosos (generalmente después de unas semanas de tratamiento).
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>3. Fortalecimiento del sistema inmunológico</Accordion.Header>
                <Accordion.Body>
                Un sistema inmunológico fuerte ayuda a prevenir que una infección latente se active y se 
                convierta en TB activa. Mantener una dieta equilibrada, rica en proteínas, vitaminas y minerales, 
                ayuda a fortalecer las defensas del cuerpo. Alimentos clave para fortalecer el sistema inmunológico:
                Frutas y verduras ricas en vitamina C (naranjas, fresas, pimientos).
                Fuentes de zinc , como carnes magras, legumbres y frutos secos.
                Vitamina D , esencial para la inmunidad, obtenida de la exposición moderada al sol o de alimentos 
                como el pescado.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>4. Evitar factores de riesgo como el tabaquismo y el alcoholismo
                </Accordion.Header>
                <Accordion.Body>
                El humo daña los pulmones y aumenta la susceptibilidad a infecciones respiratorias como la 
                tuberculosis. El consumo excesivo de alcohol debilita el sistema inmunológico , haciendo que 
                las personas sean más propensas a desarrollar TB activa. Las personas con tuberculosis que fuman 
                o beben alcohol tienen peores respuestas al tratamiento y mayor riesgo de recaída.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <div className="disease-card">
            <h4>Recuerda</h4>
              <div className="symptoms">
                <p>La prevención y el autocuidado son herramientas fundamentales para evitar la propagación de la 
                  tuberculosis. Medidas como la vacunación, el diagnóstico temprano, el uso de mascarillas en zonas 
                  de riesgo y una alimentación adecuada pueden reducir significativamente el impacto de esta 
                  enfermedad. El conocimiento y la educación son clave para erradicar la tuberculosis a nivel 
                  global.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
    
    export default Sintomas