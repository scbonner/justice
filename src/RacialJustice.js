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
          READ MORE »
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title variant="secondary">Racial Justice</Modal.Title>
          </Modal.Header>
             <Modal.Body> <p> What is it? “the proactive reinforcement of policies, practices, attitudes and actions that produce equitable power, opportunities, and treatment for all” --Rinku Sen</p>


            <p>Getting There: A principle way in which institutional racism is maintained is through the criminal justice system, ICE and Homeland Security systems which collectively constitute a  discriminatory punishment system.  Justice Reinvestment, or the reallocation of resources away from these systems and toward systems of support for youth and families, will help unlock the power of communities to achieve racial justice.</p> 
             </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <br />
      </>
     
    );
  }
  

export default RacialJustice

