import { Container, Nav, NavDropdown } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Navbar from "react-bootstrap/Navbar";

const MyNavbar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="secondary" variant="light">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/Main">
                <Nav.Link>Main</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/About">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Contact">
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Users">
                <Nav.Link>Users</Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
