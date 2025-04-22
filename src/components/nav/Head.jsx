import { NavLink } from 'react-router';
import { Navbar, Nav, Container } from 'react-bootstrap'; 
import Logo from '../logos/Logo';
import Logonombre from '../logos/LogoNombre';
import './Head.scss';

const Head = () => {
  return (
    <Navbar expand="lg" className="navbar-custom" fixed="top">
      <Container>
        {/* Logo y nombre de la marca */}
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <Logo w="50" h="50" />
          <Logonombre w="150" h="50" />
        </Navbar.Brand>

        {/* Botón de hamburguesa para pantallas pequeñas */}
        <Navbar.Toggle aria-controls="navbar-nav" className="navbar-toggler-custom" />

        {/* Contenido colapsable */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto mb-2 mb-lg-0">
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


            {/* Botón Sign Up dentro del Nav */}
            <Nav.Item>
              <NavLink
                to="/signup"
                className="btn-head"
              >
                Ingresar
              </NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Head;
