import React from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

export const Experiences = () => {
    const dispatch = useDispatch();
    const experiences = useSelector((state) => state.user.experiences);
    return (
        <div className="mainDiv mb-1 ">
            <Container className="myContainer p-3">
                <h5 className="d-flex">
                    <b>Esperienza</b>{" "}
                    <div className="ms-auto">
                        <Button className="pencil_button fs-4" size="sm" variant="outline-light">
                            <i class="bi bi-plus-lg text-dark"></i>
                        </Button>
                        <Button className="pencil_button fs-4" size="sm" variant="outline-light">
                            <i className="bi bi-pencil text-dark"></i>
                        </Button>
                    </div>
                </h5>
                {experiences &&
                    experiences.map((experience) => (
                        <>
                            <div className="d-flex mt-3">
                                <img
                                    src="http://placekitten.com/200/200"
                                    width="50"
                                    height="50"
                                    alt=""
                                    className="sideImg"
                                />
                                <div>
                                    <span className="fw-bold">Role</span>
                                    <br />
                                    <span>Company</span>
                                    <br />
                                    <span>startDate, endDate</span>
                                    <p>description</p>
                                </div>
                            </div>
                            <div className="divider"></div>
                        </>
                    ))}
            </Container>
        </div>
    );
};
