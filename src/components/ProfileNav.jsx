import { Container, Navbar } from "react-bootstrap";
import logo from "../assets/logo.png";
const ProfileNav = function () {
  return (
    <Navbar
      style={{
        backgroundColor: "#221f1f",
        boxShadow: "0px 26px 39px 22px rgba(0, 0, 0, 0.75) inset",
      }}
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="100px"
            height="55px"
            className="d-inline-block align-top"
            alt="Netflix logo"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
export default ProfileNav;
