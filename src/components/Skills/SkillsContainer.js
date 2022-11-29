import SkillsList from './SkillsList';
import {Row} from 'react-bootstrap';
import data from './data.js';

const SkillsContainer = () => {
  return (
    <>
    <Row>
     <SkillsList skills={data.skills1}/>
    </Row>
    <Row>
     <SkillsList skills={data.skills2}/>
    </Row>
    <Row>
        <SkillsList skills={data.skills3}/>
    </Row>
    <Row>
        <SkillsList skills={data.skills4}/>
    </Row>
    </>  
  );
}

export default SkillsContainer;