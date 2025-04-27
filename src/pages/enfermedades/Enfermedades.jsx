import './Enfermedades.scss';
import { NavLink } from 'react-router'; 
import { useEffect } from 'react';
import TuberculosisImg from '../../assets/tuberculosis2.png';
import EPOCImg from '../../assets/EPOC2.png';
import AsmaImg from '../../assets/asma2.png';

const Enfermedades = () => {
  useEffect(() => {
    // Animación para que los elementos aparezcan al hacer scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    // Observar todos los elementos con clase "animate-on-scroll"
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    // Animación para las partículas de fondo en el hero
    const createParticles = () => {
      const particlesContainer = document.querySelector('.particles-container');
      if (!particlesContainer) return;
      
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Posición aleatoria
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Tamaño aleatorio
        const size = Math.random() * 15 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Animación aleatoria
        particle.style.animationDuration = `${Math.random() * 20 + 10}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        particlesContainer.appendChild(particle);
      }
    };
    
    createParticles();
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="enfermedades-page">
      <section className="diseases-hero">
        {/* Fondo de partículas animadas */}
        <div className="particles-container"></div>
        
        <div className="hero-content">
          <h1 className="animate-title">Enfermedades Pulmonares</h1>
          <p className="animate-description">Conoce más sobre las principales enfermedades que afectan los pulmones y cómo prevenirlas</p>
        </div>
      </section>
      
      {/* Grid de Enfermedades */}
      <section className="diseases">
        <div className="container">
          <div className="disease-card animate-on-scroll">
            <div className="card-image">
              <img src={TuberculosisImg} alt="Tuberculosis Pulmonar" />
            </div>
            <div className="card-content">
              <NavLink to="/tuberculosis/que-es" className="learn-more-btn">
                <h2>Tuberculosis</h2>
                <span className="details-link">Ver detalles <span className="arrow-icon">→</span></span>
              </NavLink>
            </div>
          </div>
          
          <div className="disease-card animate-on-scroll">
            <div className="card-image">
              <img src={EPOCImg} alt="Enfermedad Pulmonar Obstructiva Crónica" />
            </div>
            <div className="card-content">
              <NavLink to="/epoc/que-es" className="learn-more-btn">
                <h2>EPOC</h2>
                <span className="details-link">Ver detalles <span className="arrow-icon">→</span></span>
              </NavLink>
            </div>
          </div>
          
          <div className="disease-card animate-on-scroll">
            <div className="card-image">
              <img src={AsmaImg} alt="Asma Bronquial" />
            </div>
            <div className="card-content">
              <NavLink to="/asma/que-es" className="learn-more-btn">
                <h2>Asma</h2>
                <span className="details-link">Ver detalles <span className="arrow-icon">→</span></span>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enfermedades;