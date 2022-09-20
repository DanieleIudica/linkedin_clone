import React, { useState } from "react";
import { Button, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setExpIdAction } from "../redux/action";
import FormAddExperience from "./FormAddExperience";
import FormEditExperience from "./FormEditExperience";

export const Experiences = () => {
    const dispatch = useDispatch();
    const [modalShow, setModalShow] = useState(false);
    const [editModalShow, setEditModalShow] = useState(false);

    const experiences = useSelector((state) => state.user.experiences);
    return (
        <div className="mainDiv mb-1 ">
            <Container className="myContainer p-3">
                <h5 className="d-flex">
                    <b>Esperienza</b>{" "}
                    <div className="ms-auto">
                        <Button
                            className="pencil_button fs-4"
                            size="sm"
                            variant="outline-light"
                            onClick={() => setModalShow(true)}
                        >
                            <i className="bi bi-plus-lg text-dark"></i>
                        </Button>
                        <Button className="pencil_button fs-4" size="sm" variant="outline-light">
                            <i className="bi bi-pencil text-dark"></i>
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
                                        <Button
                                            className="pencil_button ms-auto"
                                            size="sm"
                                            variant="outline-light"
                                            onClick={() => {
                                                dispatch(setExpIdAction(experience._id));
                                                setEditModalShow(true);
                                            }}
                                        >
                                            <i className="bi bi-pencil text-dark fs-5"></i>
                                        </Button>
                                    </span>

                                    <span>{experience.company}</span>
                                    <br />
                                    <span>
                                        {experience.startDate}, {experience.endDate}
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
