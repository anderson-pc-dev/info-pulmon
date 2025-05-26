import { useCallback, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { Navbar, Nav, Container } from 'react-bootstrap'; 
import Logo from '../logos/Logo';
import Logonombre from '../logos/LogoNombre';
import './Head.scss';
import useAuthStore from '../../stores/use-auth-store';

const Head = () => {
  const { user: userLooged, logout } = useAuthStore();
  const navigate = useNavigate();
  useEffect(() => {
  console.log('Usuario actualizado:', userLooged);
}, [userLooged]);


  const handleLogout = useCallback(() => {
    logout().then(() => navigate('/'));
  }, [logout, navigate]);

  useEffect(() => {
    if (!userLooged) return;

    const fetchData = async () => {
      const { displayName, email } = userLooged;
      const data = { displayName, email };

      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}users`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          }
        );
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        await response.json(); // Puedes usar la respuesta si necesitas
      } catch (error) {
        console.error('Error creating user:', error);
      }
    };

    fetchData();
  }, [userLooged]);

  return (
    <Navbar expand="lg" className="navbar-custom" fixed="top">
      <Container>
        {/* Logo y nombre de la marca */}
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <Logo w="50" h="50" />
          <Logonombre w="150" h="50" />
        </Navbar.Brand>

        {/* Botón hamburguesa para móvil */}
        <Navbar.Toggle aria-controls="navbar-nav" className="navbar-toggler-custom" />

        {/* Contenido colapsable */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto mb-2 mb-lg-0 align-items-center">
            <Nav.Item>
              <NavLink className="nav-link" to="/" end>
                Inicio
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink className="nav-link" to="/enfermedades">
                Enfermedades
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink className="nav-link" to="/about">
                Sobre Nosotros
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink className="nav-link" to="/quiz">
                Quiz
              </NavLink>
            </Nav.Item>

            {/* Botón de sesión: cambia dinámicamente */}
            <Nav.Item className="d-flex align-items-center gap-3 ms-3">
              {userLooged ? (
                <>
                  {userLooged.photoURL && (
                    <img
                      src={userLooged.photoURL}
                      alt={`Foto de perfil de ${userLooged.displayName}`}
                      className="profile-img"
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                      }}
                    />
                  )}
                  <span className="user-name">{userLooged.displayName}</span>
                  <button onClick={handleLogout} className="btn-head" title="Cerrar sesión">
                    Cerrar sesión
                  </button>
                </>
              ) : (
                <NavLink to="/login" className="btn-head">
                  Ingresar
                </NavLink>
              )}
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Head;
