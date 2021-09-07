import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import './App.css'

 

export default function Trainings2() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
      <br />
      <br />
        <Button variant="dark" onClick={handleShow}>
          Learn More »
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className='cursive2'>Family Engagement Continuum</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <p><strong>T</strong>o achieve “genuine and meaningful” engagement and partnership with families, it is important to understand the big picture.  Many professionals that work in child-serving agencies believe they engage families but there is an important difference between interacting, engaging and partnership.  Participants will hear from families that have engaged and partnered with a juvenile justice agency and how that relationship helped families and ultimately, helped the agency achieve long sought-after reforms.</p></Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
          <br />
        <br />
          <hr />
      
        </Modal>
       
      </>

      
    );
  }
