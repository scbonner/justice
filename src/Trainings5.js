import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import './App.css'

 

export default function Trainings5() {
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
            <Modal.Title className='cursive2'>Adolescent Brain Development</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <p><strong>M</strong>any agencies and organizations have incorporated trainings on adolescent brain development however, it can be hard to bring the science into everyday practices and policies that actually work.  This session helps participants see how what we know about adolescent brain from research looks when we see it in the young people and how what we do, say or even believe can affect the outcome.  The content provides practical tools and strategies for everyone that works with youth and their families.  Youth development and family engagement are linked and understanding that link provides professionals with an innovative strategy to successfully engage and partner with families. </p> 
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
