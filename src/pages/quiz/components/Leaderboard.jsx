import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import './LeaderboardPage.scss';
import ThreeDPodium from '../../enfermedades/epoc/models-3d/3DPodium';
import UserBadge from '../components/UserBadge';

const LeaderboardPage = () => {
  const [topUsers, setTopUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}quiz-scores/leaderboard?limit=3`
        );

        if (!response.ok) {
          throw new Error('Error al cargar el podio');
        }

        const data = await response.json();
        const paddedData = [...data, ...Array(3 - data.length).fill(null)];
        setTopUsers(paddedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

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
  
        // Limpiar partículas existentes
        particlesContainer.innerHTML = '';
  
        for (let i = 0; i < 300; i++) {
          const particle = document.createElement('div');
          particle.classList.add('particle');
  
          // Posición inicial aleatoria
          particle.style.left = `${Math.random() * 100}%`;
          particle.style.top = `${Math.random() * 100}%`;
  
          // Tamaño variable para las burbujas
          const size = Math.random() * 20 + 8;
          particle.style.width = `${size}px`;
          particle.style.height = `${size}px`;
  
          // Duración y delay aleatorios
          const duration = Math.random() * 25 + 15;
          particle.style.animationDuration = `${duration}s`;
          particle.style.animationDelay = `${Math.random() * 8}s`;
  
          // Asignar diferentes tipos de animación
          const animationType = Math.random();
          if (animationType < 0.6) {
            particle.style.animationName = 'float';
          } else if (animationType < 0.8) {
            particle.style.animationName = 'bubbleFloat';
          } else {
            particle.style.animationName = 'pulse, float';
          }
  
          // Agregar algunas burbujas con movimiento lateral
          if (i % 7 === 0) {
            particle.style.animationName += ', wobble';
            particle.style.animationDuration = `${duration}s, 3s`;
          }
  
          particlesContainer.appendChild(particle);
        }
  
        // Crear algunas burbujas grandes ocasionales
        for (let i = 0; i < 100; i++) {
          const bigBubble = document.createElement('div');
          bigBubble.classList.add('particle');
          
          bigBubble.style.left = `${Math.random() * 100}%`;
          bigBubble.style.top = `${Math.random() * 100}%`;
          
          const bigSize = Math.random() * 40 + 30;
          bigBubble.style.width = `${bigSize}px`;
          bigBubble.style.height = `${bigSize}px`;
          
          bigBubble.style.animationDuration = `${Math.random() * 35 + 20}s`;
          bigBubble.style.animationDelay = `${Math.random() * 10}s`;
          bigBubble.style.animationName = 'float, pulse';
          bigBubble.style.opacity = '0.3';
          
          particlesContainer.appendChild(bigBubble);
        }
      };
  
      createParticles();
  
      return () => {
        observer.disconnect();
      };
    }, []);
  

  const formatTime = (seconds) => {
    if (!seconds) return '--';
    return seconds < 60
      ? `${Math.round(seconds)}s`
      : `${Math.floor(seconds / 60)}m ${Math.round(seconds % 60)}s`;
  };

  if (loading) {
    return <div className="leaderboard-container loading">Cargando podio...</div>;
  }

  if (error) {
    return (
      <div className="leaderboard-container error">
        <p>⚠️ {error}</p>
        <button onClick={() => window.location.reload()}>Reintentar</button>
      </div>
    );
  }

  return (
    <div className="leaderboard-intro-page">
      <div className="particles-container"></div>
      <div className="leaderboard-page">
        <div className="header">
          <h1>🏆 Podio de Campeones</h1>
          <p>Los mejores jugadores según su puntuación</p>
        </div>

        <div className="podium-container">
          <div className="podium-3d">
            <ThreeDPodium topUsers={topUsers.filter(u => u)} />
          </div>

          <div className="user-badges">
            {topUsers.map((user, index) => (
              user ? (
                <UserBadge
                  key={user._id || index}
                  user={user}
                  position={index + 1}
                  className={`position-${index + 1}`}
                  timeFormatter={formatTime}
                />
              ) : (
                <div key={index} className="empty-badge position-${index + 1}">
                  <div className="badge-position">{index + 1}°</div>
                  <div className="empty-avatar">👤</div>
                  <div className="badge-details">
                    <h3>Vacante</h3>
                    <p>--%</p>
                    <small>Tiempo: --</small>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>

        <div className="stats-section">
          {topUsers[0] && (
            <div className="champion-stats">
              <h3>🥇 Campeón Actual</h3>
              <p>{topUsers[0].displayName} con {topUsers[0].bestScore}%</p>
              <p>Tiempo récord: {formatTime(topUsers[0].bestTime)}</p>
            </div>
          )}
        </div>

        <div className="action-buttons">
          <button onClick={() => navigate('/leaderboard/full')} className="back-button">
            Ver Tabla de posiciones
          </button>
          <button onClick={() => navigate('/quiz')} className="play-button">
            Volver al quiz
          </button>
        </div>

      </div>
    </div>
  );
};

export default LeaderboardPage;