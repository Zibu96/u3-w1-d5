import { Button, Col, Container, Row } from "react-bootstrap";
import img from "../U2 W2 D5/assets/avatar.png";

const SettingsHero = function () {
  return (
    <main className="bg-white">
      <Container>
        <Row>
          <Col>
            <div className="border-bottom">
              <h1>Account</h1>
            </div>
          </Col>
        </Row>
        <Row className="border-bottom mt-2">
          <Col>
            <h3>MEMBERSHIP & BILLING</h3>
            <Button variant="secondary">Cancel Membership</Button>
          </Col>
          <Col>
            <div className="border-bottom">
              <div className="d-flex justify-content-between">
                <p>student@strive.school</p>
                <a className="link" href="#">
                  Change account email
                </a>
              </div>
              <div className="d-flex justify-content-between">
                <p>Password: ********</p>
                <a className="link" href="#">
                  Change password
                </a>
              </div>
              <div className="d-flex justify-content-between">
                <p>Phone: 321 044 1279</p>
                <a className="link" href="#">
                  Change phone number
                </a>
              </div>
            </div>
            <div className="border-bottom d-flex justify-content-between mt-2">
              <div>
                <p>
                  <i className="bi bi-paypal"></i>
                  admin@strive.school
                </p>
              </div>
              <div>
                <div>
                  <a className="link" href="#">
                    Update payment info
                  </a>
                </div>
                <div>
                  <a className="link" href="#">
                    Billing details
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="text-end mt-2">
                <a className="link" href="#">
                  Redeem gift card or promo code
                </a>
              </div>
              <div className="text-end">
                <a className="link" href="#">
                  Where to buy gift cards
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="border-bottom my-2">
          <Col>
            <h3>PLAN DETAILS</h3>
          </Col>
          <Col>
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <p className="me-2">Premium</p>
                <Button variant="dark p-0">ULTRA HD</Button>
              </div>
              <div>
                <a className="link" href="#">
                  Change plan
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="border-bottom mt-2">
          <Col>
            <div>
              <h3>SETTINGS</h3>
            </div>
          </Col>
          <Col>
            <div>
              <a className="link" href="#">
                Parental controls
              </a>
            </div>
            <div>
              <a className="link" href="#">
                Test participation
              </a>
            </div>
            <div>
              <a className="link" href="#">
                Manage download devices
              </a>
            </div>
            <div>
              <a className="link" href="#">
                Activate a device
              </a>
            </div>
            <div>
              <a className="link" href="#">
                Recent device streaming activity
              </a>
            </div>
            <div>
              <a className="link" href="#">
                Sign out of all devices
              </a>
            </div>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <div>
              <h3>MY PROFILE</h3>
            </div>
          </Col>
          <Col>
            <div className="d-flex ">
              <img width={40} height={40} src={img} alt="" />
              <p className="ms-2">Strive Student</p>
            </div>
          </Col>
          <Col>
            <div className="text-end">
              <div>
                <a className="link" href="#">
                  Manage profiles
                </a>
              </div>
              <div>
                <a className="link" href="#">
                  Add profile email
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <div>
              <a className="link" href="#">
                Language
              </a>
            </div>
            <div>
              <a className="link" href="#">
                Playback settings
              </a>
            </div>
            <div>
              <a className="link" href="#">
                Subtitle appearance
              </a>
            </div>
          </Col>
          <Col>
            <div>
              <a className="link" href="#">
                Viewing activity
              </a>
            </div>
            <div>
              <a className="link" href="#">
                Ratings
              </a>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </main>
  );
};

export default SettingsHero;
