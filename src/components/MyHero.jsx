import { Component } from "react";
import { Container, Dropdown } from "react-bootstrap";
// import GalleryFirst from "./GalleryFirst";
// import GallerySecond from "./GallerySecond";
// import GalleryThird from "./GalleryThird";
import Gallery from "./Gallery";

class MyHero extends Component {
  render() {
    return (
      <Container fluid>
        <div className="d-flex justify-content-between ">
          <div className="d-flex align-items-center mb-4">
            <h2>TV Shows</h2>

            <Dropdown className="ms-4">
              <Dropdown.Toggle
                className="border border-white rounded-0 btn-sm"
                variant="success"
                id="dropdown-basic"
                style={{ backgroundColor: "#221f1f" }}
              >
                Genres
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Comedy</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Drama</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div>
            <i className="bi bi-grid icons"></i>
            <i className="bi bi-grid-3x3 icons"></i>
          </div>
        </div>
        <h4>Trending Now</h4>
        <Gallery film="harry potter" />
        <h4>Watch It Again</h4>
        <Gallery film="pirates of the caribbean" />
        <h4>New Releases</h4>
        <Gallery film="star wars" />
      </Container>
    );
  }
}
export default MyHero;
