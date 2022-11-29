import Rectangulo from '../Rectangulo/Rectangulo';
import {Container, Row, Col} from 'react-bootstrap';
import Rrss from '../Rrss/Rrss';
import {styles} from '../../styles/styles';
import ScrollDown from '../ScrollDown/ScrollDown';

const About = () => {
  return (
    <>
    <Rrss/>
    <ScrollDown/>
    <Container fluid className="pt-5" style={styles.sectionAbout}>
    <Row>
      <Col className="d-flex justify-content-center align-items-center">
        <Rectangulo id="about" {...styles.sectionAbout.character}/>
        </Col>
      <Col>
        <Container>
        <p className="text-light">Hi, I'm Mateo Algañaras</p>
        <h1 className="title text-light">FRONT END<br/>DEVELOPER.</h1>
        </Container>
        </Col>
    </Row>
    </Container>
    </>
    
  );
}

export default About;