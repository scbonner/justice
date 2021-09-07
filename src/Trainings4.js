import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import './App.css'

 

export default function Trainings4() {
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
            <Modal.Title className='cursive2'>Equity, Wealth, Race and Racism</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <p><strong>O</strong>f all the challenges and dilemmas that folks like us might come together to discuss and debate, there is none as shamefully defining of our nation’s justice systems, nor as seemingly resistant to change, as the continued and, in many places, growing racial disparities.  We work in a system that—like so many human enterprises—suffers from numerous shortcomings.  The persistence of these problems, especially our dogged adherence to policies and practices that have proven ineffective and costly, or that have been discredited by research, or that have been exposed as routinely abusive, is difficult to understand without the lens of racial equity. </p>

          <p>To truly eliminate racial and ethnical disparities, all staff within an agency or organization need to understand the history of racism, implicit and explicit bias, and the impact racial and ethnic disparities have when trying to engage families and young people.</p>
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
