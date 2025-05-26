// LeaderboardPage.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import './LeaderboardPage.scss';

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
        setTopUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  if (loading) {
    return (
      <div className="leaderboard-container">
        <div className="loading-spinner"></div>
        <p>Cargando podio...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="leaderboard-container">
        <div className="error-message">
          <p>⚠️ {error}</p>
          <button onClick={() => window.location.reload()}>Reintentar</button>
        </div>
      </div>
    );
  }

  return (
    <div className="leaderboard-page">
      <div className="header">
        <h1>🏆 Podio de Campeones</h1>
        <p>Los mejores jugadores según su puntuación y tiempo</p>
      </div>

      <div className="podium-container">
        {/* Segundo lugar */}
        {topUsers[1] && (
          <div className="podium-item second-place">
            <div className="podium-position">2°</div>
            <div className="podium-avatar">
              <img 
                src={topUsers[1].photoURL || '/default-avatar.png'} 
                alt={topUsers[1].displayName} 
              />
            </div>
            <div className="podium-details">
              <h3>{topUsers[1].displayName}</h3>
              <p>{topUsers[1].bestScore}%</p>
              <small>Tiempo: {topUsers[1].averageTime}s</small>
            </div>
          </div>
        )}

        {/* Primer lugar */}
        {topUsers[0] && (
          <div className="podium-item first-place">
            <div className="podium-position">1°</div>
            <div className="podium-avatar">
              <img 
                src={topUsers[0].photoURL || '/default-avatar.png'} 
                alt={topUsers[0].displayName} 
              />
              <div className="crown">👑</div>
            </div>
            <div className="podium-details">
              <h3>{topUsers[0].displayName}</h3>
              <p>{topUsers[0].bestScore}%</p>
              <small>Tiempo: {topUsers[0].averageTime}s</small>
            </div>
          </div>
        )}

        {/* Tercer lugar */}
        {topUsers[2] && (
          <div className="podium-item third-place">
            <div className="podium-position">3°</div>
            <div className="podium-avatar">
              <img 
                src={topUsers[2].photoURL || '/default-avatar.png'} 
                alt={topUsers[2].displayName} 
              />
            </div>
            <div className="podium-details">
              <h3>{topUsers[2].displayName}</h3>
              <p>{topUsers[2].bestScore}%</p>
              <small>Tiempo: {topUsers[2].averageTime}s</small>
            </div>
          </div>
        )}
      </div>

      <div className="other-stats">
        <h3>Estadísticas del Podio</h3>
        <div className="stats-grid">
          <div className="stat-item">
            <span>Mejor puntuación</span>
            <strong>{topUsers[0]?.bestScore || '--'}%</strong>
          </div>
          <div className="stat-item">
            <span>Promedio del podio</span>
            <strong>
              {topUsers.length > 0 
                ? Math.round(topUsers.reduce((sum, user) => sum + user.bestScore, 0) / topUsers.length) 
                : '--'}%
            </strong>
          </div>
        </div>
      </div>

      <div className="action-buttons">
        <button onClick={() => navigate('/quiz')} className="play-button">
          Jugar Quiz
        </button>
        <button onClick={() => navigate('/')} className="home-button">
          Volver al Inicio
        </button>
      </div>
    </div>
  );
};

export default LeaderboardPage;