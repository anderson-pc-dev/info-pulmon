import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import './FullLeaderboard.scss';

const FullLeaderboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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

      for (let i = 0; i < 500; i++) {
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

  useEffect(() => {
    const fetchFullLeaderboard = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}quiz-scores/leaderboard?limit=100`
        );

        if (!response.ok) {
          throw new Error('Error al cargar la tabla de posiciones');
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFullLeaderboard();
  }, []);

  const formatTime = (seconds) => {
    if (!seconds) return '--';
    return seconds < 60
      ? `${Math.round(seconds)}s`
      : `${Math.floor(seconds / 60)}m ${Math.round(seconds % 60)}s`;
  };

  if (error) {
    return (
      <div className="full-leaderboard-container error">
        <p>⚠️ {error}</p>
        <button onClick={() => window.location.reload()}>Reintentar</button>
      </div>
    );
  }

  return (
    <div className="quiz-intro-page">
      <div className="particles-container"></div>
      <div className="full-leaderboard-page">
        <div className="header">
          <h1>📊 Tabla de Posiciones</h1>
          <p>Mejores puntuaciones de todos los usuarios</p>
        </div>

        <div className="leaderboard-table-container fixed-height">
          <table className="leaderboard-table">
            <thead>
              <tr>
                <th>Posición</th>
                <th>Usuario</th>
                <th>Mejor Puntuación</th>
                <th>Tiempo</th>
                <th>Intentos</th>
                <th>Último Intento</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="6" className="loading-message">Cargando tabla de posiciones...</td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan="6" className="error-message">
                    ⚠️ {error}
                    <br />
                    <button onClick={() => window.location.reload()}>Reintentar</button>
                  </td>
                </tr>
              ) : users.length > 0 ? (
                users.map((user, index) => (
                  <tr key={user._id || index} className={index < 3 ? `top-${index + 1}` : ''}>
                    <td>{index + 1}°</td>
                    <td className="user-info">
                      <div className="user-name">{user.displayName || 'Anónimo'}</div>
                      <div className="user-email">{user.email || ''}</div>
                    </td>
                    <td>{user.bestScore}%</td>
                    <td>{formatTime(user.bestTime)}</td>
                    <td>{user.attempts || 1}</td>
                    <td>{new Date(user.lastAttempt).toLocaleDateString()}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="no-results">No hay resultados disponibles</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {!loading && !error && (
          <div className="action-buttons">
            <button onClick={() => navigate('/leaderboard')} className="back-button">
              Ver Podio
            </button>
            <button onClick={() => navigate('/quiz')} className="play-button">
              Jugar Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );

};

export default FullLeaderboard;