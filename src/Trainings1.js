import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';

import './App.css'



 

export default function Trainings1() {
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
            <Modal.Title className='cursive2'>Family Engagement</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <p><strong>W</strong>hile this topic may seem too basic and not needed for most professionals, the content is presented in a distinctive manner meant to help participants make connections between their own families and the families they work with.  Defining family could be as easy as opening up a dictionary and reading the definition.  However, this type of learning doesn’t provide the participant with the opportunity to recognize the many facets of relationship building essential to “genuine and meaningful” engagement and partnership.  This session also provides research-based reasons why family engagements benefits systems, workforce and community safety as well as individual youth and family outcomes.</p></Modal.Body>
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
  




