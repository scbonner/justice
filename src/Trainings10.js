import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import './App.css'

 

export default function Trainings10() {
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
            <Modal.Title className='cursive2'>Partnering with the Community to Achieve Goals  </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <p><strong>F</strong>amilies often distrust systems and they often have had experiences that create that distrust.  The experience may not even have occurred in your system or organization.  This distrust comes back to the long legacy of racial and ethnic disparities built into organizations and systems. Once participants attend Sessions 1-9 they will have a greater understanding of where that distrust comes from, accept it and then ideally want to strive to find solutions that dissolve the existing barriers. </p>  

<p>Partnering with family-centered organizations has proven to be a successful strategy. This session is designed to help agencies/organizations understand the common characteristics of such groups and develop strategies to build solid relationships with the groups.  
 </p> 
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