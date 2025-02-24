import Logofull from '../../components/Nav/Logofull'
import {Container, Row} from 'react-bootstrap'
const Home = () => {
    return(
        <>
            <Container >
                <Row className="justify-content-md-center logo">
                    <Logofull w="600" h="600" />
                </Row>
            </Container>
        </>
    )
}
//<img src={logo} className="logo react" alt="React logo" />

export default Home