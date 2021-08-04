import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';

function RacialJustice() {
    
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          RACIAL JUSTICE
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body> WHAT IS IT? Valuing families means respecting all families. It means supporting universal healthcare, the right to marry who you love, childcare supports for all families who need them, a living wage, meaningful job opportunities for young people and public safety strategies that prioritize family connection and respect familial rights.

            Getting there: ‘Family values’ have been defined by conservatives in ways that actually undermine family stability. The criminal justice system has penalized and punished families, tearing them apart and undermining their capacity to support each other which is why our work is necessary.
            </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  

export default RacialJustice

