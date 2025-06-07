import { useEffect, useState } from 'react';
import './UserBadge.scss';

const UserBadge = ({ user, position, className, timeFormatter }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, position * 300);
    return () => clearTimeout(timer);
  }, [position]);

  const positionStyles = {
    1: { top: '5%', left: '50%', transform: 'translateX(-50%)', zIndex: 3 },
    2: { top: '20%', left: '19%', zIndex: 2 },
    3: { top: '25%', right: '19%', zIndex: 1 }
  };

  return (
    <div 
      className={`user-badge ${className} ${isVisible ? 'visible' : ''}`}
      style={positionStyles[position]}
    >
      <div className="badge-position">{position}°</div>
      <div className="badge-avatar">
        {position === 1 && <div className="crown">👑</div>}
        {position === 2 && <div className="silver">🥈</div>}
        {position === 3 && <div className="bronze">🥉</div>}
      </div>
      <div className="badge-details">
        <h3>{user.displayName || 'Usuario'}</h3>
        <p className="score">{user.bestScore}%</p>
        <small className="time">⏱️ {timeFormatter(user.bestTime)}</small>
        {user.attempts > 1 && (
          <small className="attempts">{user.attempts} intentos</small>
        )}
      </div>
    </div>
  );
};

export default UserBadge;