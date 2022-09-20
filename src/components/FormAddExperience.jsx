import { useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { postNewExperiencesAction } from "../redux/action"


const FormAddExperience = (props) =>{

 const dispatch = useDispatch()
    const [role, setRole] = useState("")
const [company,setCompany] = useState("")
const [startDate, setStartDate] = useState("")
const [endDate, setEndDate]= useState("")
const [description, setDescription]= useState("");
const [area,setArea]= useState("");


const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit")
    let experience = {
        role:role,
        company:company,
        startDate:startDate,
        endDate: endDate,
        area: area,
        description: description,

    }
    dispatch(postNewExperiencesAction(experience));

}

    return(
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Aggiungi Esperienza
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicNome">
        <Form.Label>Role</Form.Label>
        <Form.Control onChange={(e)=>{setRole(e.target.value)}} value={role} type="text" placeholder="Role" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCognome">
        <Form.Label>Start Date</Form.Label>
        <Form.Control onChange={(e)=>{setStartDate(e.target.value)}} value={startDate} type="date" placeholder="Start Date" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicNomeA">
        <Form.Label>End Date</Form.Label>
        <Form.Control onChange={(e)=>{setEndDate(e.target.value)}} value={endDate} type="date" placeholder="End Date" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicSomm">
        <Form.Label>Area</Form.Label>
        <Form.Control onChange={(e)=>{setArea(e.target.value)}} value={area} type="text" placeholder="Area" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicLocal">
        <Form.Label>Company</Form.Label>
        <Form.Control onChange={(e)=>{setCompany(e.target.value)}} value={company} type="text" placeholder="Company" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicLocal">
        <Form.Label>Description</Form.Label>
        <Form.Control onChange={(e)=>{setDescription(e.target.value)}} value={description} as="textarea" placeholder="Description..." />
      </Form.Group>
      <Button onClick={props.onHide} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    )
}

export default FormAddExperience;