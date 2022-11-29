import Skill from './Skill';

const SkillsList = ({skills}) =>{
return (
    skills.map(skill => <Skill skill={skill}/>)    
 );
}

export default SkillsList;