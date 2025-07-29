import './Loader3D.scss';
import PropTypes from 'prop-types';

const Loader3D = ({ message = "Cargando modelo 3D..." }) => {
  return (
    <div className="loader-3d">
      <div className="loader-content">
        <div className="pulse-animation">
          <div className="pulse-ring pulse-ring-1"></div>
          <div className="pulse-ring pulse-ring-2"></div>
          <div className="pulse-ring pulse-ring-3"></div>
          <div className="lung-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M12 2c-1.5 0-3 .5-4 1.5S6 6 6 7.5v9c0 1.5 1 3 2 4s2.5 1.5 4 1.5 3-.5 4-1.5 2-2.5 2-4v-9c0-1.5-1-2.5-2-3.5S13.5 2 12 2z" 
                fill="currentColor"
                opacity="0.6"
              />
              <path 
                d="M8 8c-.5 0-1 .5-1 1v6c0 .5.5 1 1 1s1-.5 1-1V9c0-.5-.5-1-1-1zm8 0c-.5 0-1 .5-1 1v6c0 .5.5 1 1 1s1-.5 1-1V9c0-.5-.5-1-1-1z" 
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
        <div className="loader-text">{message}</div>
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
      </div>
    </div>
  );
};

Loader3D.propTypes = {
  message: PropTypes.string
};

export default Loader3D;
