import Project from './Project';

const ProjectsList = ({projects}) =>{
return (
    projects.map(project => <Project project={project}/>)    
 );
}

export default ProjectsList;