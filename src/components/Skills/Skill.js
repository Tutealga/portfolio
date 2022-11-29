import {Col} from 'react-bootstrap';
import {styles} from '../../styles/styles';

const Skill = ({skill}) =>{
    return (
        <Col className="mb-5">
    <div style={styles.sectionSkills.skills} className="mx-auto d-flex flex-column justify-content-center align-items-center">
      <img style={{width:'35px', height:'35px'}} src={skill.url} alt={skill.title}/>
      <div>
        <h5 style={{fontSize:14}} className="text-light mt-2">{skill.title}</h5>
      </div>
    </div>
        </Col>  
     );
}

export default Skill;