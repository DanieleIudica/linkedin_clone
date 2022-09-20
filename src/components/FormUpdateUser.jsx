import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateMeAction } from "../redux/action";

const FormUpdateUser = (props) => {
    const dispatch = useDispatch();
    const me = useSelector((state)=> state.user.me)

const [nome, setNome] = useState(me.name)
const [cognome,setCognome] = useState(me.surname)
const [nomeA, setNomeA] = useState(me.username)
const [sommario, setSommario]= useState(me.title)
const [località, setLocalità]= useState(me.area);
const [bio,setBio]= useState(me.bio);

const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit")
    let user = {
        name:nome,
        surname:cognome,
        username:nomeA,
        title:sommario,
        area:località,
        bio:bio,
        email: me.email,
        _id: me._id,
        image: me.image,
        _v:0

    }
    dispatch(updateMeAction(user));

}



  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Modifica Introduzione
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicNome">
        <Form.Label>Nome</Form.Label>
        <Form.Control onChange={(e)=>{setNome(e.target.value)}} value={nome} type="text" placeholder="Nome" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCognome">
        <Form.Label>Cognome</Form.Label>
        <Form.Control onChange={(e)=>{setCognome(e.target.value)}} value={cognome} type="text" placeholder="Cognome" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicNomeA">
        <Form.Label>Nome Aggiuntivo</Form.Label>
        <Form.Control onChange={(e)=>{setNomeA(e.target.value)}} value={nomeA} type="text" placeholder="Nome Aggiuntivo" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicSomm">
        <Form.Label>Sommario</Form.Label>
        <Form.Control onChange={(e)=>{setSommario(e.target.value)}} value={sommario} type="text" placeholder="Sommario" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicLocal">
        <Form.Label>Località</Form.Label>
        <Form.Control onChange={(e)=>{setLocalità(e.target.value)}} value={località} type="text" placeholder="Città,Regione,Stato" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicLocal">
        <Form.Label>Bio</Form.Label>
        <Form.Control onChange={(e)=>{setBio(e.target.value)}} value={bio} as="textarea" placeholder="Qualcosa di te..." />
      </Form.Group>
      <Button  variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FormUpdateUser;
