import React, { useEffect } from "react";
import { Col, Container } from "react-bootstrap";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMyLastCommentsAction } from "../redux/action";

export const Attivita = () => {
    const theme = useSelector((state) => state.user.theme);
    const styles = useSelector((state) => state.user.styles);
    const comments = useSelector((state) => state.comments.allComments);
    const dispatch = useDispatch();
    const me = useSelector((state) => state.user.me);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getMyLastCommentsAction(me._id));
    }, []);

    return (
        <div className="mainDiv mb-1" style={theme ? styles.light : styles.dark}>
            <Container className="myContainer p-3">
                <h5 className="d-flex">
                    <b>Attività</b>{" "}
                </h5>
                {comments.map((comment, i) => (
                    <div key={i}>
                        <div className="d-flex mt-3">
                            <Col xs={2}>
                                <img
                                    src={comment.image}
                                    width="100"
                                    height="100"
                                    alt=""
                                    className="attivitaImg mt-2"
                                />
                            </Col>

                            <Col xs={10}>
                                <div onClick={() => navigate("/feed/" + comment._id)}>
                                    <span>
                                        Pubblicato da: <b>{comment.user.username}</b>
                                    </span>
                                    <br />
                                    <span className="small">
                                        <Moment format="DD-MM-YY HH:mm">{comment.updatedAt}</Moment>
                                    </span>
                                    <p>{comment.text}</p>
                                </div>
                            </Col>
                        </div>
                        <div className="divider"></div>
                    </div>
                ))}
            </Container>
        </div>
    );
};
