import React from "react";
import { Col, Container } from "react-bootstrap";
import Moment from "react-moment";
import { useSelector } from "react-redux";

export const Attivita = () => {
    const theme = useSelector((state) => state.user.theme);
    const styles = useSelector((state) => state.user.styles);
    return (
        <div className="mainDiv mb-1" style={theme ? styles.light : styles.dark}>
            <Container className="myContainer p-3">
                <h5 className="d-flex">
                    <b>Attività</b>{" "}
                </h5>
                {/* map */}
                <div>
                    <div className="d-flex mt-3">
                        <Col xs={2}>
                            <img
                                src="http://placekitten.com/100/100"
                                width="100"
                                height="100"
                                alt=""
                                className="attivitaImg mt-2"
                            />
                        </Col>

                        <Col xs={10}>
                            {/* div in cui mette onClick */}
                            <div>
                                <span>
                                    Pubblicato da: <b>Nome Cognome</b>
                                </span>
                                <br />
                                <span className="small">
                                    <Moment format="DD-MM-YY HH:mm">quando</Moment> -{" "}
                                    <Moment format="DD-MM-YY HH:mm">quando</Moment>
                                </span>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                                    itaque porro a dolor repellendus, assumenda voluptatum! Rem
                                    maxime, voluptates temporibus suscipit provident molestias in
                                    consequuntur et error, eum aperiam aliquid!
                                </p>
                            </div>
                        </Col>
                    </div>
                    <div className="divider"></div>
                </div>
            </Container>
        </div>
    );
};
