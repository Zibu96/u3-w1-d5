import { Component } from "react";
import { Alert, Col, Figure, Spinner } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    let settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <Slider {...settings} className="ms-5 me-5">
        {this.state.isLoading && <Spinner animation="border" variant="info" />}
        {this.state.isError && (
          <Alert variant="danger">
            Ci scusciamo ma non siamo in grado di caricare i contenuti
          </Alert>
        )}
        {this.state.films.map((film) => {
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
      </Slider>
    );
  }
}
export default Gallery;
