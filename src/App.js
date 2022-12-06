import Skills from './components/Skills/Skills';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import NavBar from './components/NavBar/NavBar';
import Rrss from './components/Rrss/Rrss';
import ScrollDown from './components/ScrollDown/ScrollDown';

const App = () => {
  return (
    <>
    <NavBar/>
    <Rrss/>
    <ScrollDown/>
    <About/>
    <Projects/>
    <Skills/>
    </>
  );
}

export default App;
