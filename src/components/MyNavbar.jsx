import React, { useState } from "react";
import { Container, Nav, NavDropdown, Navbar, Form, Button, Modal } from "react-bootstrap";

export const MyNavbar = () => {
    const [show, setShow] = useState(false);

    const handleModal = () => setShow(!show);

    return (
        <Navbar expand="lg" className="myNav py-0">
            <Container>
                <Navbar.Brand href="#">
                    <i className="bi bi-linkedin blue fs-1"></i>
                </Navbar.Brand>
                <Form className="d-flex myForm">
                    <i className="bi bi-search fs-5"></i>
                    <Form.Control
                        type="search"
                        placeholder="Cerca"
                        className="me-2"
                        aria-label="Search"
                        id="mySearch"
                    />
                </Form>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
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
                            <img
                                src="http://placekitten.com/30/30"
                                alt=""
                                width="32"
                                className="mx-auto navImg"
                            />
                            <NavDropdown title="Tu" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">
                                    <div className="d-flex">
                                        <img
                                            src="http://placekitten.com/60/60"
                                            alt=""
                                            className="me-3 navImg"
                                            width="80"
                                            height="80"
                                        />
                                        <div>
                                            <p className="fw-bold">Nome Cognome</p>
                                            <p>Front-End dev</p>
                                        </div>
                                    </div>
                                    <div className="d-grid gap-2">
                                        <Button
                                            variant="outline-primary"
                                            size="sm"
                                            className="fw-bold mt-2 justify-content-center rounded-pill"
                                        >
                                            Visualizza Profilo
                                        </Button>
                                    </div>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    <p className="fw-bold">Account</p>
                                    <p>Impostazioni e Privacy</p>
                                    <p>Guida</p>
                                    <p>Lingua</p>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    <p className="fw-bold">Gestisci</p>
                                    <p>Post e Attività</p>
                                    <p>Account pe la pubblicazione di off..</p>
                                    <p>Lingua</p>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    <p>Esci</p>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </div>
                        <div id="navLinkGrid">
                            <i className="bi bi-grid-3x3-gap-fill"></i>
                            <NavDropdown
                                title="Lavoro"
                                id="navbarScrollingDropdown"
                                onClick={handleModal}
                            >
                                <Modal
                                    show={show}
                                    onHide={handleModal}
                                    backdrop="static"
                                    keyboard={false}
                                    id="myModal"
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title>Lavoro</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="fw-bold myModal mHeader">
                                            Scopri altri prodotti LinkedIn
                                        </div>
                                        <div className="myModal mBottom">
                                            <div className="row text-center">
                                                <div className="col">
                                                    <img
                                                        src="./modal_img/learning.png"
                                                        alt="learning"
                                                        width="50"
                                                        className="modalImg"
                                                    />
                                                    <p>Learning</p>
                                                </div>
                                                <div className="col">
                                                    <img
                                                        src="./modal_img/insights.png"
                                                        alt="insights"
                                                        width="50"
                                                        className="modalImg"
                                                    />
                                                    <p>Insights</p>
                                                </div>
                                                <div className="col">
                                                    <img
                                                        src="./modal_img/offerta.png"
                                                        alt="offerta"
                                                        width="50"
                                                        className="modalImg"
                                                    />
                                                    <p>Pubblica</p>
                                                </div>
                                                <div className="col">
                                                    <img
                                                        src="./modal_img/pubblicizza.png"
                                                        alt="pubblicizza"
                                                        width="50"
                                                        className="modalImg"
                                                    />
                                                    <p>Pubblicizza</p>
                                                </div>
                                                <div className="w-100"></div>
                                                <div className="col">
                                                    <img
                                                        src="./modal_img/lead.png"
                                                        alt="lead"
                                                        width="50"
                                                        className="modalImg"
                                                    />
                                                    <p>Trova lead</p>
                                                </div>
                                                <div className="col">
                                                    <img
                                                        src="./modal_img/gruppi.png"
                                                        alt="gruppi"
                                                        width="50"
                                                        className="modalImg"
                                                    />
                                                    <p>Gruppi</p>
                                                </div>
                                                <div className="col">
                                                    <img
                                                        src="./modal_img/market.png"
                                                        alt="market"
                                                        width="50"
                                                        className="modalImg"
                                                    />
                                                    <p>Marketplace</p>
                                                </div>
                                                <div className="col">
                                                    <img
                                                        src="./modal_img/salary.png"
                                                        alt="salary"
                                                        width="50"
                                                        className="modalImg"
                                                    />
                                                    <p>Salary</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="fw-bold myModal mHeader">
                                            Assistenza alle aziende di LinkedIn
                                        </div>
                                        <div className="myModal">
                                            <p>
                                                <span className="fw-bold">Talent Solutions</span>
                                                <br />
                                                <span>Trova, attrai, assumi</span>
                                            </p>
                                            <p>
                                                <span className="fw-bold">Sales Solutions</span>
                                                <br />
                                                <span>Sblocca nuove opportunità di vendita</span>
                                            </p>
                                            <p>
                                                <span className="fw-bold">
                                                    Pubblica offerta di lavoro gratuita
                                                </span>
                                                <br />
                                                <span>Pubblica offerta di lavoro gratuita</span>
                                            </p>
                                            <p>
                                                <span className="fw-bold">Marketing Solutions</span>
                                                <br />
                                                <span>
                                                    Acquisisci clienti e fai crescere la tua azienda
                                                </span>
                                            </p>
                                            <p>
                                                <span className="fw-bold">Learning Solutions</span>
                                                <br />
                                                <span>
                                                    Promuovi l'acquisizione di competenze nella tua
                                                    organizzazione
                                                </span>
                                            </p>
                                        </div>
                                        <div className="myModal mBottom">
                                            <p className="fw-bold">
                                                Crea una pagina aziendale{" "}
                                                <i class="bi bi-plus-lg"></i>
                                            </p>
                                        </div>
                                    </Modal.Body>
                                </Modal>
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
