import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import './App.css'

 

export default function Trainings3() {
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
            <Modal.Title className='cursive2'>Trauma on Family Engagement</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <p><strong>T</strong>rauma can impact families, young people and staff. It also can be an invisible barrier that prevents “genuine and meaningful” engagement and partnership and healthy work environments. The sessions on trauma will give participants a comprehensive look at the different types of trauma, the manifestations of trauma in families and young people, how trauma may impact staff, and self-care strategies for dealing with their trauma and strategies they can share with young people and their families. The three-part series combines multiple learning styles with first-hand accounts that often resonate deeply with participants. Prior participants have described these sessions and the impact it had on their lives, both as professionals and individuals, as “complete personal transformations” and “life-changing perspectives.” </p></Modal.Body>
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
