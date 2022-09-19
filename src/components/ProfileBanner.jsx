import { Button, Col, Container, Row } from "react-bootstrap";
import Carousel from "better-react-carousel";

const ProfileBanner = ({ user }) => {
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
                  <div className="icona_Profilo">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      width="70%"
                      height="48px"
                    >
                      <path
                        fill="#0288D1"
                        d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                      />
                      <path
                        fill="#FFF"
                        d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                      />
                    </svg>
                  </div>
                  <div className="icona_Profilo">
                    <Button className="pencil_button" size="sm" variant="outline-light">

                    <img  src="./icons/icons8-matita-48.png" width="50%" alt="" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="info_contatto">
                <Row>
                  <Col>
                    <div>
                      <h2>
                        {user.name} {user.surname}
                      </h2>
                      <h5>{user.title}</h5>
                    </div>
                  </Col>
                  <Col>{/* <h4>Sezione icona Epicode</h4> */}</Col>
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
