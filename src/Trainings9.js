import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import './App.css'

 

export default function Trainings9() {
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
            <Modal.Title className='cursive2'>Reflective Supervision </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <p><strong>Y</strong>our plan will only be as successful as the people that carry it out.  New plans often bring out the resistance of staff to something new.  Not all staff will be resistant but we have found it is quiet common.  This session is designed to help supervisors understand and embrace the values and behaviors associated with effective and productive family engagement and structure their supervisory practice to mentor, coach and lead the change among all staff.</p> 
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