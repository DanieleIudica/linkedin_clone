import React, { useState } from "react";
import { Button, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { delteteExperienceAction, setExpIdAction } from "../redux/action";
import FormAddExperience from "./FormAddExperience";
import FormEditExperience from "./FormEditExperience";
import Moment from "react-moment";

export const Experiences = () => {
    const dispatch = useDispatch();
    const [modalShow, setModalShow] = useState(false);
    const [editModalShow, setEditModalShow] = useState(false);
    const me = useSelector((state) => state.user.me);
    const experiences = useSelector((state) => state.user.experiences);
    const theme = useSelector((state) => state.user.theme);
    const styles = useSelector((state) => state.user.styles);
    return (
        <div className="mainDiv mb-1" style={theme ? styles.light : styles.dark}>
            <Container className="myContainer p-3">
                <h5 className="d-flex">
                    <b>Esperienza</b>{" "}
                    <div className="ms-auto">
                        <Button
                            className="rounded-pill fs-4"
                            size="sm"
                            variant={theme ? "outline-light" : "light"}
                            onClick={() => setModalShow(true)}
                        >
                            <i className="bi bi-plus-lg text-dark"></i>
                        </Button>
                    </div>
                </h5>
                {experiences &&
                    experiences.map((experience, i) => (
                        <div key={i}>
                            <div className="d-flex mt-3" key={i}>
                                <Col xs={2}>
                                    <img
                                        src="http://placekitten.com/200/200"
                                        width="50"
                                        height="50"
                                        alt=""
                                        className="sideImg"
                                    />
                                </Col>

                                <Col xs={10}>
                                    <span className="fw-bold d-flex">
                                        {experience.role}
                                        <div className="ms-auto">
                                            <Button
                                                className="rounded-pill ms-auto"
                                                size="sm"
                                                variant={theme ? "outline-light" : "secondary"}
                                                onClick={() => {
                                                    dispatch(setExpIdAction(experience._id));
                                                    setEditModalShow(true);
                                                }}
                                            >
                                                <i className="bi bi-pencil text-dark fs-5"></i>
                                            </Button>
                                            <Button
                                                className="rounded-pill ms-auto"
                                                size="sm"
                                                variant={theme ? "outline-light" : "secondary"}
                                                onClick={() => {
                                                    dispatch(
                                                        delteteExperienceAction(
                                                            me._id,
                                                            experience._id
                                                        )
                                                    );
                                                }}
                                            >
                                                <i class="bi bi-trash3 text-dark fs-5 "></i>
                                            </Button>
                                        </div>
                                    </span>

                                    <span>{experience.company}</span>
                                    <br />
                                    <span>
                                        <Moment format="DD-MM-YY HH:mm">
                                            {experience.startDate}
                                        </Moment>{" "}
                                        -{" "}
                                        <Moment format="DD-MM-YY HH:mm">
                                            {experience.endDate}
                                        </Moment>
                                    </span>
                                    <p>{experience.description}</p>
                                </Col>
                            </div>
                            <div className="divider"></div>
                        </div>
                    ))}
            </Container>
            <FormAddExperience show={modalShow} onHide={() => setModalShow(false)} />
            <FormEditExperience show={editModalShow} onHide={() => setEditModalShow(false)} />
        </div>
    );
};
