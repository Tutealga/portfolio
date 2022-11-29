import ProjectsList from './ProjectsList';
import data from './data.js';
import {Container } from 'react-bootstrap';

const ProjectsContainer = () => {
  return (
    <Container className="d-flex mb-4">
    <ProjectsList projects={data}/>
    </Container>
  );
}

export default ProjectsContainer;