import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const TopNav = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand style={{fontSize: 30}}>Tian Qin</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" style={{fontSize: 20}}>
          <Nav.Link href="/">About</Nav.Link>
          <Nav.Link href="/exps">Experiences</Nav.Link>
          <Nav.Link href="/articles">Articles</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNav;

// <NavDropdown title="Articles" id="basic-nav-dropdown">
//   <NavDropdown.Item href="/articles/3.1">1</NavDropdown.Item>
//   <NavDropdown.Item href="/articles/3.2">2</NavDropdown.Item>
// </NavDropdown>
