import { Container, Row, Col, Navbar } from 'react-bootstrap';
import { Link } from 'react-router';
import Logo from '../logos/Logo';
import './Footer.scss';
import Logonombre from '../logos/LogoNombre';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col lg={4} md={12} className="footer-logo-section">
                        <Navbar.Brand href="/" className="d-flex align-items-center">
                            <Logo w="50" h="50" />
                            <Logonombre w="150" h="50" />
                        </Navbar.Brand>
                        <p className="footer-tagline">Información clara sobre salud pulmonar</p>
                    </Col>

                    <Col lg={4} md={6} className="footer-links">
                        <h5>Enlaces rápidos</h5>
                        <ul>
                            <li><Link to="/">Inicio</Link></li>
                            <li><Link to="/enfermedades">Enfermedades</Link></li>
                            <li><Link to="/about">Sobre Nosotros</Link></li>
                            <li><Link to="/quiz">Quiz</Link></li>
                        </ul>
                    </Col>

                    <Col lg={4} md={6} className="footer-contact">
                        <h5>Contacto a Desarrolladores</h5>
                        <ul>
                            <li><a target='_blank' href="https://github.com/paelsam">Elkin Angulo (paelsam)</a></li>
                            <li><a target='_blank' href="https://github.com/MiguelSalcedo225">Miguel Ángel Salcedo</a></li>
                            <li><a target='_blank' href="https://github.com/anderson-pc-dev">Anderson Pantoja</a></li>
                        </ul>
                    </Col>
                </Row>

                <div className="footer-divider"></div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} InfoPulmon. Todos los derechos reservados.</p>
                    <div className="footer-legal">
                        <li><a target='_blank' href='https://github.com/anderson-pc-dev/info-pulmon'>Link del repositorio</a></li>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;