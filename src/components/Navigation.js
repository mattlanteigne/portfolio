import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Sling as Hamburger } from 'hamburger-react'




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

      <Navbar.Collapse className="text-right">
        <Nav className="ml-auto">
          <Nav.Link href="#home" className="navbar-link">Home</Nav.Link>
          <Nav.Link href="#home" className="navbar-link">Home</Nav.Link>
          <Nav.Link href="#home" className="navbar-link">Home</Nav.Link>
          <Nav.Link href="#home" className="navbar-link">Home</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
}
export default Navigation;