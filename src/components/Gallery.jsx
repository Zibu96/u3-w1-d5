import { Component } from "react";
import { Alert, Col, Figure, Row, Spinner } from "react-bootstrap";

class Gallery extends Component {
  state = {
    films: [],
    isLoading: false,
    isError: false,
  };

  GalleryFetch = () => {
    this.setState({ isLoading: true });
    fetch("http://www.omdbapi.com/?apikey=e65097ca&s=" + this.props.film)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella richiesta dei film al server");
        }
      })
      .then((films) => {
        console.log(films.Search);

        this.setState({ films: films.Search });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ isError: true });
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  componentDidMount() {
    this.GalleryFetch();
  }
  render() {
    return (
      <Row xs={1} sm={2} md={4} lg={6}>
        {this.state.isLoading && <Spinner animation="border" variant="info" />}
        {this.state.isError && (
          <Alert variant="danger">
            Ci scusciamo ma non siamo in grado di caricare i contenuti
          </Alert>
        )}
        {this.state.films.slice(0, 6).map((film) => {
          return (
            <Col key={`film n ${film.imdbID}  `}>
              <Figure>
                <Figure.Image
                  width={171}
                  height={180}
                  alt="171x180"
                  src={film.Poster}
                />
              </Figure>
            </Col>
          );
        })}
      </Row>
    );
  }
}
export default Gallery;
