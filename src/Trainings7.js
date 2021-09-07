import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import './App.css'

 

export default function Trainings7() {
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
            <Modal.Title className='cursive2'>Writing & Achieving Measurable Goals </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <p><strong>O</strong>nce systems/organizations access their current family engagement work, identify gaps and brainstorm solutions, this second strategic planning session helps them articulate a full plan with goals, timelines and leadership. In addition to this session, trainers can set up technical assistance webinars/calls to help guide your agency/organization through the process. </p> 
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