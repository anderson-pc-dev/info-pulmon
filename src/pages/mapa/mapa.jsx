import { Link } from 'react-router';
import './mapaStyles.scss';

const SiteMap = () => {
  return (
    <div className="sitemap-container">
      <header className="sitemap-header">
        <h1 className="sitemap-title">Mapa del Sitio</h1>
        <p className="sitemap-description">Explora todo el contenido disponible en nuestra plataforma</p>
      </header>
      
      <div className="sitemap-grid">
        <section className="sitemap-section main-pages">
          <h2 className="section-title">
            <span className="icon">🏠</span>
            Páginas Principales
          </h2>
          <ul className="sitemap-list">
            <li><Link to="/" className="sitemap-link">Inicio</Link></li>
            <li><Link to="/about" className="sitemap-link">Acerca de Nosotros</Link></li>
            <li><Link to="/enfermedades" className="sitemap-link">Enfermedades Respiratorias</Link></li>
            <li><Link to="/quiz" className="sitemap-link">Test de Conocimiento</Link></li>
            <li><Link to="/login" className="sitemap-link">Iniciar Sesión</Link></li>
          </ul>
        </section>

        <section className="sitemap-section diseases-section">
          <h2 className="section-title">
            <span className="icon">🩺</span>
            Enfermedades
          </h2>
          
          <div className="disease-cards">
            <div className="disease-card">
              <h3 className="disease-title">EPOC</h3>
              <ul className="disease-links">
                <li><Link to="/epoc/que-es" className="disease-link">¿Qué es la EPOC?</Link></li>
                <li><Link to="/epoc/sintomas" className="disease-link">Síntomas</Link></li>
                <li><Link to="/epoc/tratamiento" className="disease-link">Tratamiento</Link></li>
                <li><Link to="/epoc/prevencion" className="disease-link">Prevención</Link></li>
              </ul>
            </div>

            <div className="disease-card">
              <h3 className="disease-title">Asma</h3>
              <ul className="disease-links">
                <li><Link to="/asma/que-es" className="disease-link">¿Qué es el Asma?</Link></li>
                <li><Link to="/asma/sintomas" className="disease-link">Síntomas</Link></li>
                <li><Link to="/asma/tratamiento" className="disease-link">Tratamiento</Link></li>
                <li><Link to="/asma/prevencion" className="disease-link">Prevención</Link></li>
              </ul>
            </div>

            <div className="disease-card">
              <h3 className="disease-title">Tuberculosis</h3>
              <ul className="disease-links">
                <li><Link to="/tuberculosis/que-es" className="disease-link">¿Qué es la Tuberculosis?</Link></li>
                <li><Link to="/tuberculosis/sintomas" className="disease-link">Síntomas</Link></li>
                <li><Link to="/tuberculosis/tratamiento" className="disease-link">Tratamiento</Link></li>
                <li><Link to="/tuberculosis/prevencion" className="disease-link">Prevención</Link></li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SiteMap;