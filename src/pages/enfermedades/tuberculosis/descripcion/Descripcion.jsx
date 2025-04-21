//import '../../../home/Home.scss';
const Descripcion = () => {
    return (
      <div className="que-es-container">
        <header className="que-es-header">
          <h1 className="que-es-title">¿Qué es la Tuberculosis?</h1>
        </header>
        <section className="que-es-section">
          <div className="section-content">
            <h2 className="section-title">Descripción de la Tuberculosis</h2>
            <p className="section-description">
              La tuberculosis (TB) es una enfermedad infecciosa causada por la bacteria Mycobacterium tuberculosis. Principalmente afecta a los pulmones, 
              pero también puede dañar otros órganos como los riñones, la columna vertebral y el cerebro. 
              Es una enfermedad potencialmente mortal, pero tratable si se detecta a tiempo.
              La tuberculosis se transmite a través del aire cuando una persona infectada tose, estornuda o habla. 
              A pesar de los avances en la medicina, sigue siendo una de las enfermedades infecciosas más mortales del mundo, 
              especialmente en regiones con sistemas de salud deficientes.
            </p>
            <h3 className="subsection-title">Tipos principales de Tuberculosis:</h3>
            <div className="que-es-causes">
              <div className="cause-item">
                <h3>Tuberculosis Latente: </h3>
                {/* <p>Principal causa (80-90% de los casos)</p> */}
                <p className="cause-detail">
                  La bacteria está en el cuerpo, pero el sistema inmunológico la mantiene inactiva. 
                  No hay síntomas y no es contagiosa, pero puede activarse en el futuro.
                </p>
              </div>
              <div className="cause-item">
                <h3>Tuberculosis Activa:</h3>
                {/* <p>Exposición prolongada a humos y partículas</p> */}
                <p className="cause-detail">
                  La bacteria se multiplica y causa síntomas. Es altamente contagiosa.
                </p>
              </div>
              <div className="cause-item">
                <h3>Tuberculosis Multirresistente (TB-MDR):</h3>
                {/* <p>Como la deficiencia de alfa-1 antitripsina</p> */}
                <p className="cause-detail">
                  Una forma grave de la enfermedad resistente a los medicamentos comunes, lo que dificulta su tratamiento.
                </p>
              </div>
            </div>
            <h3 className="subsection-title">Estadisticas de la Tuberculosis:</h3>
            <ul className="copd-conditions">
              <li>
                Según la Organización Mundial de la Salud (OMS), la tuberculosis es una de las 10 principales causas de muerte en el mundo.
              </li>
              <li>
                En 2022, se reportaron aproximadamente 10.6 millones de casos en todo el mundo.
              </li>
              <li>
               1.3 millones de personas murieron por tuberculosis en 2022.
              </li>
              <li>
                1 de cada 4 personas en el mundo tiene TB latente, sin síntomas.
              </li>
              <li>
                La tuberculosis multirresistente afecta a más de 500,000 personas cada año.
              </li>
            </ul>
          </div>
        </section>
        <section className="diseases-section">
          <div className="section-content">
            <h2 className="section-title">Causas de la Tuberculosis</h2>
          </div>
          {/* <div className="symptoms">
            <h4>Síntomas más comunes:</h4>
            <ul>
              <li>Dificultad para respirar</li>
              <li>Silbidos al respirar</li>
              <li>Tos persistente (especialmente de noche)</li>
            </ul>
          </div> */}
          <div className="disease-card">
            <p>La tuberculosis es causada por la bacteria Mycobacterium tuberculosis, 
              un microorganismo de crecimiento lento con una pared celular gruesa y 
              resistente que le permite sobrevivir en el cuerpo humano durante largos períodos.</p>
            <div className="symptoms">
              <ul>
                <li>Se transmite de persona a persona a través del aire, mediante pequeñas gotas que contienen 
                  la bacteria y que se liberan cuando una persona infectada tose, estornuda, habla o canta.</li>
                <li>Una vez inhaladas, las bacterias llegan a los pulmones y pueden permanecer en estado latente 
                  (sin causar síntomas) o activarse y multiplicarse, generando la enfermedad.</li>
              </ul>
            </div>
          </div>
          <div className="disease-card">
              <h4>Formas de afectación</h4>
            <p>La tuberculosis no afecta a todas las personas por igual. Existen diversos factores que pueden 
              aumentar el riesgo de desarrollar la enfermedad, ya sea porque facilitan la infección inicial o 
              porque favorecen la reactivación de la bacteria en personas con tuberculosis latente.</p>
            <div className="symptoms">
              <h4>Factores del Sistema Inmunológico:</h4>
              <ul>
                <li>VIH/SIDA: Las personas con VIH tienen entre 20 y 30 veces más riesgo de desarrollar tuberculosis 
                  activa debido a la debilitación de su sistema inmunológico. De hecho, la tuberculosis es una de las 
                  principales causas de muerte en personas con VIH.</li>
                <li>Diabetes: Reduce la capacidad del sistema inmunológico para combatir infecciones, aumentando el riesgo 
                  de desarrollar TB.</li>
                <li>Desnutrición y deficiencias vitamínicas: La falta de nutrientes esenciales, como las vitaminas A, C y D, 
                  disminuye la resistencia del organismo ante la bacteria.</li>
                <li>Tratamientos inmunosupresores: Medicamentos como los corticosteroides, la quimioterapia o los fármacos 
                  usados en trasplantes pueden debilitar el sistema inmune, facilitando la activación de la TB.</li>
                <li>Enfermedades renales crónicas: Pacientes con insuficiencia renal tienen mayor riesgo de desarrollar TB, 
                  ya que su sistema inmunológico suele estar comprometido.</li>
              </ul>
            </div>
          </div>
          <div className="disease-card">
            <h4>Condiciones de Vida y Medioambiente</h4>
            <div className="symptoms">
              <ul>
                <li>Hacinamiento y malas condiciones de vivienda: La tuberculosis es más frecuente en lugares donde muchas 
                  personas viven juntas en espacios reducidos y mal ventilados, como prisiones, refugios para personas sin 
                  hogar o campamentos de refugiados.</li>
                <li>Acceso limitado a la atención médica: En países con sistemas de salud deficientes, muchas personas con 
                  tuberculosis no reciben diagnóstico ni tratamiento a tiempo, lo que facilita la propagación de la enfermedad.</li>
                <li>Pobreza extrema: Las personas en situación de pobreza tienen mayor riesgo de tuberculosis debido a la 
                  malnutrición, la falta de acceso a servicios médicos y las condiciones de vida precarias.</li>
                <li>Tabaquismo: Fumar daña los pulmones y aumenta en un 50% el riesgo de desarrollar tuberculosis activa. 
                  Además, el humo del tabaco puede reducir la efectividad del tratamiento.</li>
                <li>Consumo excesivo de alcohol: El alcoholismo debilita el sistema inmunológico y está asociado con un 
                  mayor riesgo de desarrollar tuberculosis y de presentar complicaciones graves.</li>
                <li>Drogas intravenosas: El consumo de drogas inyectables, especialmente en personas con VIH, aumenta 
                  significativamente el riesgo de tuberculosis.</li>
              </ul>
            </div>
          </div>
          <div className="disease-card">
            <h4>Grupos de Población con Mayor Riesgo de Tuberculosis</h4>
            <p>Algunas poblaciones son especialmente vulnerables a la tuberculosis debido a sus condiciones de vida, estado de salud o 
              acceso limitado a servicios médicos.</p>
            <div className="symptoms">
              <ul>
                <li>Personas con VIH/SIDA.</li>
                <li>Trabajadores de la salud en contacto con pacientes infectados.</li>
                <li>Personas en situación de pobreza extrema o sin hogar.</li>
                <li>Prisioneros y personas en centros de detención.</li>
                <li>Personas desnutridas o con sistemas inmunológicos debilitados.</li>
                <li>Individuos en países con alta prevalencia de TB, como India, China y Sudáfrica.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  };
    
    export default Descripcion