import Rectangulo from '../Rectangulo/Rectangulo';
import {Container, Row, Col} from 'react-bootstrap';
import {styles} from '../../styles/styles';


const About = () => {
  return (
    <>
    <Container fluid className="p-5" style={styles.sectionAbout}>
    <Row>
      <Col className="d-flex justify-content-center align-items-center">
        <Rectangulo id="about" {...styles.sectionAbout.character}/>
        </Col>
      <Col>
        <Container className="pe-5">
        <p className="text-light">Hi, my name is</p>
        <h1 className="title text-light">Mateo Algañarás</h1>
        <p className="text-light">I'm a Front End/WordPress developer with knowles in SEO, focused on search intent and user experience.</p>
        </Container>
        </Col>
    </Row>
    </Container>
    </>
    
  );
}

export default About;