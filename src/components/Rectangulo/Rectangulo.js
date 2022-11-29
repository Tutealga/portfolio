import { Box, Tongue, Pupil, Eyes } from '../../styles/styles';
import './Rectangulo.css';
import { useState } from 'react';

const Rectangulo = ({altura, anchura, bg, bs, jc, ai, m}) => {
const [mouth, setMouth] = useState(m);

  return (
<Box className="bounce" onMouseEnter={() => setMouth('surpriseMouth')} onMouseLeave={() => setMouth(m)} ai={ai} w={anchura} h={altura} bg={bg} bs={bs}>
      <Eyes className="blink" jc={jc} ai={ai}>
    <Pupil/>
  </Eyes>
  <div className={mouth}>
    <Tongue/>
  </div>
  </Box>   
  );
}

export default Rectangulo;