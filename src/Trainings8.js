import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import './App.css'

 

export default function Trainings8() {
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
            <Modal.Title className='cursive2'>Maintaining a Family-Engagement Focused Workforce </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <p><strong>N</strong>ow that your system/organization has a plan and has decided who will be responsible, it’s time to implement your plan. This session is designed to help groups assess current professional development needs, develop an ongoing professional development plan which will include family voice and input, identifying staff with leadership potential and nurturing their leadership and embrace family leaders as part of your ongoing approach to development. </p> 
          </Modal.Body>
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