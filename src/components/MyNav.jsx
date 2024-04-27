import { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/logo.png";
class MyNav extends Component {
  render() {
    return (
      <Navbar
        expand="lg"
        style={{ backgroundColor: "#221f1f" }}
        data-bs-theme="dark"
      >
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="100px"
              height="55px"
              className="d-inline-block align-top"
              alt="Netflix logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="text-light" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="text-light" href="#link">
                TV Shows
              </Nav.Link>
              <Nav.Link className="text-light" href="#link">
                Movies
              </Nav.Link>
              <Nav.Link className="text-light" href="#link">
                Recently Added
              </Nav.Link>
              <Nav.Link className="text-light" href="#link">
                My List
              </Nav.Link>
            </Nav>
            <div className="d-flex align-items-center ms-auto">
              <i className="bi bi-search icons"></i>
              <div id="kids" className="fw-bold">
                KIDS
              </div>
              <i className="bi bi-bell icons"></i>
              <i className="bi bi-person-circle icons"></i>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default MyNav;
