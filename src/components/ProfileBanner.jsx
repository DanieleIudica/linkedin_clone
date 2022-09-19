import { Button, Col, Container, Row } from "react-bootstrap";
import Carousel from "better-react-carousel";

const ProfileBanner = ({user}) => {
  return (
    <div className="mainDiv ">
      <div className="firstDiv">
        <div className="banner">
          <div className="bg_image">
            <div className="bg_image_container">
              <img src="http://placekitten.com/700/200" width="100%" alt="" />
            </div>
          </div>
          <Container className="myContainer">
            <div className="personal_information">
              <div className="profile_foto d-flex mb-4">
                <div className="profile_foto_container">
                  <img
                    className="profile_foto_image"
                    src={user.image}
                    width="52%"
                    alt=""
                  />
                </div>
                <div className="d-flex section_icon">
                  <div className="icona_Profilo">Ic 1</div>
                  <div className="icona_Profilo">Ic 2</div>
                </div>
              </div>
              <div className="info_contatto">
                <Row>
                  <Col>
                    <div>
                      <h2>{user.name} {user.surname}</h2>
                      <h5>{user.title}</h5>
                    </div>
                  </Col>
                  <Col>
                    {/* <h4>Sezione icona Epicode</h4> */}
                  </Col>
                </Row>

                <div className="d-flex mb-3">
                  <span className="me-3">{user.area} </span>{" "}
                  <span>
                    {" "}
                    <a href="">Informazioni di contatto</a>
                  </span>
                </div>
                <div className="mb-3">
                  <a href="">150 Collegamenti</a>
                </div>

                <div className="d-flex ">
                  <Button className=" mx-2 profilo_btn" variant="primary">
                    Disponibile per
                  </Button>

                  <Button className="mx-2 profilo_btn" variant="outline-info">
                    Aggiungi sezione del profilo
                  </Button>

                  <Button className="mx-2 profilo_btn" variant="outline-dark">
                    Altro
                  </Button>
                </div>

                <div className="my-3">
                  <Carousel
                    className="justify-content-center"
                    cols={2}
                    rows={1}
                    gap={5}
                    loop
                    scrollSnap
                  >
                    <Carousel.Item>
                      <div className="element">
                        <p>
                          <b>Disponibile a lavorare</b>
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                        <a href="">
                          {" "}
                          <b> Vedi tutti i dettagli </b>{" "}
                        </a>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className="element">
                        <p>
                          <b>Fai sapere che stai facendo selezione</b>
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                        <a href="">
                          {" "}
                          <b> Inizia </b>{" "}
                        </a>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className="element">
                        <p>
                          <b>Titolo</b>
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                        <a href="">Link</a>
                      </div>
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
