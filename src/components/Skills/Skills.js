import Rectangulo from '../Rectangulo/Rectangulo';
import {Container, Row, Col} from 'react-bootstrap';
import {styles} from '../../styles/styles';
import SkillsContainer from './SkillsContainer';

const Skills = () => {
  return (
    <Container className="p-5" fluid style={styles.sectionSkills}>
    <Row>
      <Col>
        <Container>
        <h1 id="skills" className="title text-center text-light mb-4">SKILLS.</h1>
        <SkillsContainer/>
        </Container>
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
        <Rectangulo {...styles.sectionSkills.character}/>
        </Col>
    </Row>
    </Container>
  );
}

export default Skills;