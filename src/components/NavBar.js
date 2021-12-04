import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'



function NavBar() {
  return (
    <div className="navigatiobar">
      <Navbar collapseOnSelect className="navbar" expand="lg" variant="dark">
        <Container >
          <Navbar.Brand href="#intro" ><span className="brand-text">KERALA TOURISM</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>

              <NavDropdown title="More" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#explore">Explore</NavDropdown.Item>
                <NavDropdown.Item href="#destinations">Destination</NavDropdown.Item>
                <NavDropdown.Item href="#reviews">Reviews</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href='#help'>Help</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
