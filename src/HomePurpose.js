import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';



export default function HomePurpose() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="success" onClick={handleShow}>
          PURPOSE >>
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className='cursive2'>Our Purpose</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <p><strong>J</strong>ustice for Families raises the visibility of meaningful family engagement, and demonstrates  the success and importance of constituent-led organizing strategies.</p></Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>

      
    );
  }
  


