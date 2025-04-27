import './Descripcion.scss';
import InflamacionCronica from '../../../../assets/inflamacion-cronica.png';
import HiperreactividadBronquial from '../../../../assets/hiperreactividad-bronquial.png';
import ObstruccionAire from '../../../../assets/obstruccion-aire.png';

const Descripcion = () => {
  return (
    <div className="que-es-container">
      <header className="que-es-header">
        <h1 className="que-es-title">¿Qué es el Asma?</h1>
      </header>


      <div className="que-es-sections">
        <section className="descripcion-asma">
          <p>
            El asma es una enfermedad crónica que afecta las vías respiratorias, específicamente los bronquios, que son los conductos que llevan el aire hacia los pulmones. Esta condición se caracteriza por:
          </p>
        </section>

        <section className="caracteristicas-asma">
          <div className="caracteristica">
            <img src={InflamacionCronica} alt="Inflamación crónica" />
            <p>
              <span>Inflamación crónica:</span> Las vías respiratorias se inflaman y se vuelven más sensibles a ciertos estímulos, como alérgenos, irritantes o infecciones.
            </p>
          </div>

          <div className="caracteristica">
            <img src={HiperreactividadBronquial} alt="Hiperreactividad bronquial" />
            <p>
              <span>Hiperreactividad bronquial:</span> Las vías respiratorias reaccionan de manera exagerada a factores desencadenantes, lo que provoca su estrechamiento.
            </p>
          </div>

          <div className="caracteristica">
            <img src={ObstruccionAire} alt="Obstrucción variable del flujo de aire" />
            <p>
              <span>Obstrucción variable del flujo de aire:</span> El estrechamiento de las vías respiratorias puede variar en intensidad y es reversible, ya sea de manera espontánea o con tratamiento.
            </p>
          </div>
        </section>

        <section className="causas-asma">
          <h2>Causas</h2>

          <div className="causa">
            <h3>1. Factores genéticos:</h3>
            <ul>
              <li>
                <strong>Predisposición hereditaria:</strong> El asma tiene un componente hereditario. Si uno o ambos padres tienen asma, alergias o enfermedades atópicas (como dermatitis atópica o rinitis alérgica), aumenta el riesgo de que sus hijos desarrollen asma.
              </li>
              <li>
                <strong>Genes asociados:</strong> Se han identificado varios genes relacionados con la inflamación de las vías respiratorias, la respuesta inmunológica y la hiperreactividad bronquial. Por ejemplo, variantes en los genes ADAM33, ORM1D3 y GSDMB están asociadas con un mayor riesgo de asma.
              </li>
            </ul>
          </div>

          <div className="causa">
            <h3>2. Factores ambientales:</h3>
            <ul>
              <li>Alérgenos</li>
              <li>Contaminantes del aire</li>
              <li>Infecciones respiratorias</li>
              <li>Clima y condiciones meteorológicas</li>
            </ul>
          </div>

          <div className="causa">
            <h3>3. Factores relacionados con el estilo de vida:</h3>
            <ul>
              <li><strong>Obesidad:</strong> La obesidad está asociada con un mayor riesgo de asma, ya que puede causar inflamación sistémica y reducir la función pulmonar.</li>
              <li><strong>Dieta:</strong> Una dieta baja en antioxidantes, vitaminas y ácidos grasos omega-3 puede aumentar el riesgo de inflamación y asma.</li>
              <li><strong>Ejercicio:</strong> En algunas personas, la actividad física intensa puede desencadenar asma inducido por el ejercicio.</li>
              <li><strong>Estrés emocional:</strong> El estrés y la ansiedad pueden empeorar los síntomas del asma.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Descripcion;