import './Enfermedades.scss';
import { NavLink } from 'react-router'; 
import { useEffect } from 'react';
import EPOCVideo from '../enfermedades/videos/VideoEPOCWrapper';
import TuberculosisVideo from '../enfermedades/videos/VideoTubercuWrapper';
import AsmaVideo from '../enfermedades/videos/VideoAsmaWrapper';

const Enfermedades = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    const createParticles = () => {
      const particlesContainer = document.querySelector('.particles-container');
      if (!particlesContainer) return;
      
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        const size = Math.random() * 15 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
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
        <div className="particles-container"></div>
        
        <div className="hero-content">
          <h1 className="animate-title">Enfermedades Pulmonares</h1>
          <p className="animate-description">Conoce más sobre las principales enfermedades que afectan los pulmones y cómo prevenirlas</p>
        </div>
      </section>
      
      <section className="diseases">
        <div className="container">
          <div className="disease-card animate-on-scroll">
            <div className="card-image">
              <div className="video-container">
                <TuberculosisVideo />
              </div>
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
              <div className="video-container">
                <EPOCVideo />
              </div>
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
              <div className="video-container">
                <AsmaVideo />
              </div>
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