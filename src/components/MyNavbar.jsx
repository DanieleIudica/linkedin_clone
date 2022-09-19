import React from "react";
import { Container, Nav, NavDropdown, Navbar, Form } from "react-bootstrap";

export const MyNavbar = () => {
    return (
        <Navbar expand="lg" className="myNav">
            <Container>
                <Navbar.Brand href="#">
                    <i className="bi bi-linkedin blue fs-1"></i>
                </Navbar.Brand>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Cerca"
                        className="me-2 mySearch"
                        aria-label="Search"
                    />
                </Form>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1" id="navLink">
                            <i className="bi bi-house-door-fill"></i>
                            Home
                        </Nav.Link>
                        <Nav.Link href="#action2" id="navLink">
                            <i className="bi bi-people-fill"></i>
                            Rete
                        </Nav.Link>
                        <Nav.Link href="#action2" id="navLink">
                            <i className="bi bi-briefcase-fill"></i>
                            Lavoro
                        </Nav.Link>
                        <Nav.Link href="#action2" id="navLink">
                            <i className="bi bi-chat-left-dots-fill"></i>
                            Messaggistica
                        </Nav.Link>
                        <Nav.Link href="#action2" id="navLink">
                            <i className="bi bi-bell-fill"></i>
                            Notifiche
                        </Nav.Link>
                        <div id="navLink">
                            <img src="" alt="" width="24" />
                            <NavDropdown title="Tu" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                        </div>
                        <div id="navLink">
                            <i className="bi bi-grid-3x3-gap-fill"></i>
                            <NavDropdown title="Lavoro" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                        </div>
                        <Nav.Link href="#action2" id="navLink">
                            <i className="bi bi-signpost-fill"></i>
                            Pubblica offerta di lavoro gratuita
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
