import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteNews, getAllCommentsAction, setMeAction } from "../redux/action";
import Moment from "react-moment";
import FeedModal from "./FeedModal";

export const MainFeed = () => {
    const me = useSelector((state) => state.user.me);
    const theme = useSelector((state) => state.user.theme);
    const styles = useSelector((state) => state.user.styles);
    const dispatch = useDispatch();
    const comments = useSelector((state) => state.comments.allComments);
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        dispatch(setMeAction());
        dispatch(getAllCommentsAction());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <FeedModal show={modalShow} onHide={() => setModalShow(false)} />
            {me && (
                <div className="feedDiv" style={theme ? styles.light : styles.dark}>
                    <Row>
                        <Col xs={1}>
                            <img src={me.image} alt="" className="navImg " width="50" height="50" />
                        </Col>
                        <Col xs={11} className="ps-4">
                            <Form.Control
                                type="text"
                                placeholder="Avvia un post"
                                className="rounded-pill mt-2 p-2 ps-3 newPostInput"
                                readOnly={true}
                                onClick={() => setModalShow(true)}
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
            )}

            <div className="divider mb-2"></div>

            {console.log(comments)}
            {comments &&
                comments.map((comment, i) => {
                    if (i < 4) console.log(comment);
                    return (
                        comment.user?._id === me._id && (
                            <div
                                key={i}
                                className="feedDiv"
                                style={theme ? styles.light : styles.dark}
                            >
                                <Row>
                                    <Col xs={1}>
                                        {comment.user?._id === me._id ? (
                                            <img
                                                src={me.image}
                                                alt=""
                                                className="navImg "
                                                width="50"
                                                height="50"
                                            />
                                        ) : (
                                            <img
                                                src="http://placekitten.com/100/100"
                                                alt=""
                                                className="navImg "
                                                width="50"
                                                height="50"
                                            />
                                        )}
                                    </Col>
                                    <Col xs={8} className="ps-4">
                                        <span className="fw-bold">{comment.username}</span>
                                        <br />
                                        <Moment format="DD-MM-YY HH:mm">{comment.createdAt}</Moment>
                                    </Col>
                                    <Col xs={3} className="text-end">
                                        {comment.user?._id === me._id && (
                                            <>
                                                <Button
                                                    className="pencil_button"
                                                    size="sm"
                                                    variant={theme ? "outline-light" : "secondary"}
                                                >
                                                    <i className="bi bi-pencil text-dark fs-5"></i>
                                                </Button>
                                                <Button
                                                    className="pencil_button"
                                                    size="sm"
                                                    variant={theme ? "outline-light" : "secondary"}
                                                    onClick={() => {
                                                        dispatch(deleteNews(comment._id));
                                                    }}
                                                >
                                                    <i className="bi bi-trash3 text-dark fs-5 "></i>
                                                </Button>
                                            </>
                                        )}
                                        <Button
                                            className="pencil_button"
                                            size="sm"
                                            variant={theme ? "outline-light" : "secondary"}
                                        >
                                            <i className="bi bi-three-dots text-dark fs-5"></i>
                                        </Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p>{comment.text}</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="text-center">
                                        <img
                                            src="http://placekitten.com/600/300"
                                            alt=""
                                            width="100%"
                                        />
                                    </Col>
                                </Row>
                                <Row className="text-secondary mt-1">
                                    <Col>
                                        <p>
                                            <i className="bi bi-hand-thumbs-up-fill text-primary"></i>{" "}
                                            32.998
                                        </p>
                                    </Col>
                                    <Col className="text-end">
                                        <p>672 commenti - 425 condivisioni</p>
                                    </Col>
                                </Row>
                                <div className="divider"></div>
                                <Row className="text-center mt-3 fw-bold text-secondary">
                                    <Col xs={3}>
                                        <div className="mainFeedHover">
                                            <i className="bi bi-hand-thumbs-up fs-4"></i> Consiglia
                                        </div>
                                    </Col>
                                    <Col xs={3}>
                                        <div className="mainFeedHover">
                                            <i className="bi bi-chat-text fs-4"></i> Commenta
                                        </div>
                                    </Col>
                                    <Col xs={3}>
                                        <div className="mainFeedHover">
                                            <i className="bi bi-arrow-90deg-right fs-4"></i>{" "}
                                            Condividi
                                        </div>
                                    </Col>
                                    <Col xs={3}>
                                        <div className="mainFeedHover">
                                            <i className="bi bi bi-send-fill fs-4"></i> Invia
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        )
                    );
                })}
        </>
    );
};
