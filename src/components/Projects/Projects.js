import Rectangulo from '../Rectangulo/Rectangulo';
import {Container, Row, Col} from 'react-bootstrap';
import {styles} from '../../styles/styles';
import ProjectsContainer from './ProjectsContainer';
import './Projects.css'

const Projects = () => {
  return (
    <Container className="justify-content-center" fluid style={styles.sectionProjects}>
      <Col className="d-flex justify-content-center">
        <Container>
        <Row>
        <h2 id="projects" className="title text-center text-light">PROJECTS.</h2>
        </Row>
        <Row>
        <ProjectsContainer/>
        </Row>
        <Row className="justify-content-center">
        <Rectangulo {...styles.sectionProjects.character}/>
        </Row>
        </Container>
        </Col>
    </Container>
  );
}

export default Projects;