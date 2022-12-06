import { Container, Nav, Navbar } from 'react-bootstrap';
import './NavBar.css';
import { Link } from "react-scroll";


const NavBar = () => {
  return (
    <Container fluid className="navBarDiv">
<Navbar bg="transparent" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
          <Link activeClass="active" spy={true} smooth={true} offset={-70} duration={500} role="button" className="fs-5 text-light nav-link" to="about">About</Link>
          <Link activeClass="active" spy={true} smooth={true} offset={-70} duration={500} role="button" className="fs-5 text-light nav-link" to="projects">Projects</Link>
          <Link activeClass="active" spy={true} smooth={true} offset={-70} duration={500} role="button" className="fs-5 text-light nav-link" to="skills">Skills</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Container>
  );
}

export default NavBar;
