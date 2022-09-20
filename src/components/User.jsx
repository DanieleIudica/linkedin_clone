import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllExperiencesAction, setMeAction } from "../redux/action";
import MainUser from "./MainUser";
import { Sidebar } from "./Sidebar";

export const User = () => {
    const dispatch = useDispatch();
    const me = useSelector((state) => state.user.me);

    useEffect(() => {
       dispatch(setMeAction());      
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(()=>{
      if(me)
      dispatch(getAllExperiencesAction(me._id));
    },[me])

    return (
        <Container className="mt-4">
            {me && (
                <Row>
                    <Col xs={8}>
                        <MainUser />
                    </Col>

                    <Col xs={4}>
                        <Sidebar />
                    </Col>
                </Row>
            )}
        </Container>
    );
};
