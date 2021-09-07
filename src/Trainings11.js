import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import './App.css'

 

export default function Trainings11() {
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
            <Modal.Title className='cursive2'>Vicarious Trauma and Self-Care </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <p><strong>T</strong>his training is designed for professionals that work with young people and their 
          families and experience vicarious trauma that can lead to 'burn-out' and high rates of staff turn over. The training provides participates with concrete opportunities to Learn how to manage vicarious trauma and practice effective self-care strategies with limited time and the resources available.</p> 
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