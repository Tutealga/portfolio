import {Card} from 'react-bootstrap';

const Project = ({project}) => {
    if(project.github) {
        return (
            <Card className="mx-1" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={project.img} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Link className="btn btn-danger" href={project.github} target="_blank">Github</Card.Link>
                <Card.Link className="btn btn-danger" href={project.demo} target="_blank">Demo</Card.Link>
              </Card.Body>
            </Card>
          );
    } else {
        return (
            <Card className="mx-1" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={project.img} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Link className="btn btn-danger" href={project.demo} target="_blank">Demo</Card.Link>
              </Card.Body>
            </Card>
          );
    } 
}

export default Project;