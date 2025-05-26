import { useState, useCallback } from 'react';
import './Login.scss';
import Logo from '../../components/logos/Logo';
import Logonombre from '../../components/logos/LogoNombre';
import GoogleIcon from '../../assets/google-icon.png';
import lungsImage from '../../assets/EPOC-2.jpg';
import useAuthStore from "../../stores/use-auth-store";
import { useNavigate } from "react-router";

const Login = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { loginGoogleWithPopUp } = useAuthStore();
  const navigate = useNavigate();

  const handleLogin = useCallback(() => {
    loginGoogleWithPopUp()
      .then(() => navigate("/"))
      .catch(() => navigate("login"));
  }, [loginGoogleWithPopUp, navigate]);

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="logo-section">
          <Logo w="320" h="320" />
          <Logonombre w="350" h="110" />
        </div>
        
        <div className="login-content">
          <h1 className="login-title">Bienvenido</h1>
          <p className="login-slogan">
            Respira tranquilo, infórmate y cuida tu salud pulmonar
          </p>
          
          <button 
            className="google-button"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            type="button"
            title="Iniciar sesión con Google"
            onClick={handleLogin}
          >
            <img
              src={GoogleIcon}
              alt="Google logo"
              className="google-icon"
            />
            <span>Iniciar sesión con Google</span>
            <span className={`arrow ${isHovered ? 'hover' : ''}`}>→</span>
          </button>
        </div>
      </div>
      
      <div className="login-right">
        <div className="image-overlay"></div>
        <img
          src={lungsImage}
          alt="Pulmones saludables"
          className="lungs-image"
        />
      </div>
    </div>
  );
};

export default Login;