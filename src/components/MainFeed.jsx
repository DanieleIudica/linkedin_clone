import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import FeedModal from "./FeedModal";

export const MainFeed = () => {
    const me = useSelector((state) => state.user.me);
    const theme = useSelector((state) => state.user.theme);
    const styles = useSelector((state) => state.user.styles);
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <FeedModal show={modalShow} onHide={() => setModalShow(false)} />
            <div className="feedDiv" style={theme ? styles.light : styles.dark}>
                <Row>
                    <Col xs={1}>
                        <img src={me?.image} alt="" className="navImg " width="50" height="50" />
                    </Col>
                    <Col xs={11} className="ps-4">
                        <Form.Control
                            type="text"
                            readOnly={true}
                            placeholder="Avvia un post"
                            className="rounded-pill mt-2 p-2 ps-3 newPostInput"
                            onClick={() =>setModalShow(true) }
                        />
                    </Col>
                </Row>
                <Row className="text-center mt-3 fw-bold text-secondary">
                    <Col xs={2}>
                        <div className="mainFeedHover">
                            <i className="bi bi-image fs-5"></i> Foto
                        </div>
                    </Col>
                    <Col xs={2}>
                        <div className="mainFeedHover">
                            <i className="bi bi-play-btn-fill fs-5"></i> Video
                        </div>
                    </Col>
                    <Col xs={4}>
                        <div className="mainFeedHover">
                            <i className="bi bi-briefcase-fill fs-5"></i> Offerta di lavoro
                        </div>
                    </Col>
                    <Col xs={4}>
                        <div className="mainFeedHover">
                            <i className="bi bi bi-file-text-fill fs-5"></i> Scrivi un articolo
                        </div>
                    </Col>
                </Row>
            </div>

            <div className="divider mb-2"></div>

            <div className="feedDiv" style={theme ? styles.light : styles.dark}>
                <Row>
                    <Col xs={1}>
                        <img src={me.image} alt="" className="navImg " width="50" height="50" />
                    </Col>
                    <Col xs={10} className="ps-4">
                        <span>{me.name}</span>
                        <br />
                        <span>{me.title}</span>
                        <br />
                        <span>Data</span>
                    </Col>
                    <Col xs={1}>
                        <Button className="pencil_button" size="sm" variant="outline-light">
                            <i className="bi bi-three-dots text-dark fs-5"></i>
                        </Button>
                    </Col>
                </Row>
            </div>
        </>
    );
};
