import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';

function HumanRights() {
    
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          HUMAN RIGHTS
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body> What are they?  Human rights are basic rights derived from being human including ‘civil and political’ rights, like due process and the right to a fair trial, ‘economic and social’ rights, such as the right to education, housing, health; and work.  All of these ‘rights’ must be fought for. <br /> <br />

            Getting Their Human Rights treaties provide a blueprint for the creation of a equitable and effective juvenile justice systems that supports the development of youth and respects the rights of families.  Removing the criminal justice system as an obstacle to civic engagement will help advance families as a whole.
            </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            {/* <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button> */}
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  

export default HumanRights

