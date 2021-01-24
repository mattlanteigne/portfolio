import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Sling as Hamburger } from 'hamburger-react';

import { Link, animateScroll as scroll } from "react-scroll";
 


export const Navigation = () => {
    return (
      <Navbar expand="lg">
        <Navbar.Brand />
        <Navbar.Toggle style={{
          border: "none",
          padding: 0,
          lineHeight: 0,
          borderRadius: 0,
          fontSize: 0,
        }} className="hamburgerMenu">             
          <Hamburger color="#E5E5E5"/>
        </Navbar.Toggle>

      <Navbar.Collapse bg="dark" className="text-right">
        <Nav className="ml-auto">
        <Nav.Link bsPrefix="link">
            <Link to="about" smooth={true} offset={-50} duration={500}>About</Link>
          </Nav.Link>
          <Nav.Link bsPrefix="link">
            <Link to="projects" smooth={true} offset={-50} duration={500}>Projects</Link>
          </Nav.Link>
        <Nav.Link bsPrefix="link">
            <Link to="contact" smooth={true} duration={500}>Contact</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
}
export default Navigation;