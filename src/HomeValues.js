import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';



export default function HomeValues() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="success" onClick={handleShow}>
          VALUES >
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Our Values</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p><strong>H</strong>uman Rights: Basic rights derived from being human including ‘civil and political’  rights like due process and the right to a fair trial and ‘economic and social’ rights  such as the right to education, housing, health and work. All of these ‘rights’ must  be fought for. </p>

            <p><strong>R</strong>acial Justice: "the proactive reinforcement of policies, practices, attitudes and  actions that produce equitable power, opportunities, and treatment for all” --Rinku  Sen</p> 

            <p><strong>F</strong>amilies: Valuing families’ means respecting and including all families. We believe  that it is the right of every family to define their own family whether that is through  blood, marriage, or love. It means supporting universal healthcare, the right to marry who you love, childcare supports for all families who need them, a living  wage, meaningful job opportunities and public safety strategies that prioritize  family connection and respect familial rights.</p>
        </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>

      
    );
  }
  