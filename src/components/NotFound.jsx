import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    // navigate è una funzione
    // serve a redirezionare l'utente ad una nuova rotta via codice

    return (
        <Container>
            <Row className="justify-content-center mt-4">
                <Col md={6} className="text-center">
                    <h2 className="text-danger">404 - Page Not Found</h2>
                    <Button
                        className="m-3"
                        onClick={() => {
                            setTimeout(() => {
                                navigate("/");
                            }, 1000);
                        }}
                    >
                        Back to Home
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default NotFound;
