import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { LeftFeed } from "./LeftFeed";
import { MainFeed } from "./MainFeed";
import { RightFeed } from "./RightFeed";

export const Feed = () => {
    const {postId} = useParams();
    return (
        <Container className="mt-4">
            <Row>
                <Col xs={3}>
                    <LeftFeed />
                </Col>

                <Col xs={6}>
                    <MainFeed />
                </Col>

                <Col xs={3}>
                    <RightFeed />
                </Col>
            </Row>
        </Container>
    );
};
