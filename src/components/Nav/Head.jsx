import { NavLink } from 'react-router';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'; 
import Logo from './Logo';
import Logonombre from './Logonombre';
import './Head.css';

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
                Home
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink className="nav-link" to="/quiz">
                Quiz
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </Nav.Item>

            {/* Menú desplegable de Features */}
            <NavDropdown title="Features" id="features-dropdown" className="nav-link">
              <NavDropdown.Item href="#enfermedad1">Enfermedad 1</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#enfermedad2">Enfermedad 2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#enfermedad3">Enfermedad 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#enfermedad4">Enfermedad 4</NavDropdown.Item>
            </NavDropdown>

            {/* Botón Sign Up dentro del Nav */}
            <Nav.Item>
              <NavLink
                to="/signup"
                className="btn btn-primary btn-gradient ms-lg-3 mt-3 mt-lg-0"
              >
                Sign Up
              </NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Head;
