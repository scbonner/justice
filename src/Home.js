import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
//import styled from 'styled-components'



// const Body = styled.div`

 
//   transform: scale(1.1); 
//   }

// `;


export default function Home() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="success" onClick={handleShow}>
          MISSION >>
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Our Mission</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <p><strong>J</strong>ustice for Families is a national network of family leaders, impacted by the justice system working to end mass criminalization, particularly that of youth and communities of black, indigenous and people of color (BIPOC).</p></Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>

      
    );
  }
  


