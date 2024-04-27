import { Col, Container, Dropdown, Form, Row } from "react-bootstrap";
import profileImg from "../U2 W2 D5/assets/avatar.png";

const ProfileMain = function () {
  return (
    <main className="text-white">
      <Container className="container mt-5">
        <Row className="">
          <Col className="col-3 d-none d-lg-block"></Col>
          <Col className="col-7">
            <h1 className="border-bottom border-secondary pb-2">
              Edit Profile
            </h1>
          </Col>
          <Col className="col-2 d-none d-lg-block"></Col>
        </Row>
      </Container>
      <Container>
        <Row className="">
          <Col className="col-3 d-none d-lg-block"></Col>

          <Col className="col-2 me-3">
            <div className="position-relative">
              <img
                className="profileImg"
                src={profileImg}
                alt="profile img"
                style={{ width: "120px" }}
              />
              <a href="#">
                <svg
                  className="border rounded-circle p-1 miniLogo position-absolute"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                </svg>
              </a>
            </div>
          </Col>
          <Col className="col-5">
            <div className="pb-3">
              <input type="text" placeholder="Nome Cognome" />
            </div>
            <div className="dropdown border-bottom border-secondary pb-3">
              <h5 className="mb-1">Language:</h5>
              <Dropdown>
                <Dropdown.Toggle
                  style={{ backgroundColor: "black" }}
                  className=" border-light rounded-0"
                  id="dropdown-basic"
                >
                  English
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Italian</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Spanish</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">French</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="mt-2">
              <h5 className="pb-2">Maturity Setting:</h5>
              <button className="mb-2">ALL MATURYTY RATINGS</button>
            </div>
            <h6>Show titles of all maturity ratings for this profile.</h6>
            <div className="border-bottom border-secondary mb-2">
              <button
                type="button"
                className="btn btn-outline-secondary rounded-0 px-3 py-0 mb-3"
              >
                EDIT
              </button>
            </div>
            <div>
              <h5>Autoplay controls</h5>
            </div>
            <div>
              <div className="mb-3">
                <Form.Check
                  type={"checkbox"}
                  label={"Autoplay next episode in a series on all devices."}
                  checked
                />
              </div>
            </div>
            <div>
              <div className="mb-3">
                <Form.Check
                  type={"checkbox"}
                  label={"Autoplay previews while browsing on all devices."}
                  checked
                />
              </div>
            </div>
          </Col>
          <Col className="col-2 d-none d-lg-block"></Col>
        </Row>
      </Container>
      <Container>
        <Row className="">
          <Col className="col-3 d-none d-lg-block"></Col>
          <Col className="col-7 ">
            <div className="border-top border-secondary mt-2 pt-3">
              <button
                type="button"
                className="btn btn-light rounded-0 me-3 px-3"
              >
                SAVE
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary rounded-0 me-3 px-3"
              >
                CANCEL
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary rounded-0 px-3"
              >
                DELETE PROFILE
              </button>
            </div>
          </Col>
          <Col className="col-2 d-none d-lg-block"></Col>
        </Row>
      </Container>
    </main>
  );
};

export default ProfileMain;
