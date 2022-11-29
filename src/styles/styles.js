import glamorous from 'glamorous';

export const Box = glamorous.div(
  {
  display: 'flex',
  justifyContent: 'center',
  alignItems:'center',
  flexDirection:'column',
  gap:'1rem',
  borderRadius: '0.5em 0.5em 0.5em 0.5em / 0.6em 0.6em 0.4em 0.4em',
  '&:hover': {
    transform: 'scale(0.976)',
  }
},
props => ({
  width: props.w,
  backgroundColor: props.bg,
  height: props.h,
  boxShadow: props.bs,
})
);

export const Tongue = glamorous.div({
  width: '100%',
  height: 10,
  backgroundColor: '#ff8080',
  borderTopLeftRadius: '50%',
  borderTopRightRadius: '50%',
})

export const Pupil = glamorous.div({
  width: 50,
  height: 50,
  backgroundColor: '#1A1A1A',
  borderRadius: '50%',  
})

export const Eyes = glamorous.div ({
  width: 80,
  height: 80,
  backgroundColor: '#fff',
  display: 'flex',
  padding: 1,
  borderRadius: '100%',
  boxShadow: '0.03em 0.35em rgba(0,0,0,0.1)',
},
props => ({
  justifyContent: props.jc,
  alignItems: props.ai,
})
)

export const styles = {
  sectionAbout: {
    backgroundColor: '#E0004D', 
    height: '100vh',
    alignItems: 'center',
    display:'grid',
    character: {
      jc: "right", 
      ai: "center", 
      bs: `-10px 10px 30px -10px rgba(0,0,0,0.35), 
      inset -15px 15px 30px -10px rgba(255,90,150,0.5), 
      inset 15px -15px 30px -10px rgba(80,0,30,0.5)`, 
      bg: "#E0004D", 
      altura: 450, 
      anchura: 300,
      m:'normalMouth',
    }
  },
  sectionProjects: {
    backgroundColor: '#FFCD00', 
    height: '100vh',
    alignItems: 'center',
    display:'grid',
    character: {
      jc:'center',
      ai: "flex-start", 
      bs:`10px 10px 30px -10px rgba(0,0,0,0.35), 
      inset 15px 15px 30px -10px rgba(255,242,187,0.5), 
      inset -15px -15px 30px -10px rgba(155,125,0,0.5)`, 
      bg:"#FFCD00", 
      altura:300,
      anchura:"450px !important",
      m:'normalMouth',
    }
  },
  sectionSkills: {
    backgroundColor: '#6D2077', 
    height: '100vh',
    alignItems: 'center',
    display:'grid',
    character: {
      ai: "center", 
      jc:'left', 
      bs:`-10px 10px 30px -10px rgba(0,0,0,0.35), 
      inset -15px 15px 30px -10px rgba(160,45,170,0.5), 
      inset 15px -15px 30px -10px rgba(50,15,50,0.5)`, 
      bg:"#6D2077", 
      altura:450, 
      anchura:300,
      m:'normalMouth',
    },
  },
}