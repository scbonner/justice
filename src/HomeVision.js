import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';



export default function HomeVision() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="success" onClick={handleShow}>
          VISION >>
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className='cursive2'>Our Vision</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <p><strong>J</strong>ustice for Families is a national network of family leaders, impacted by the justice system working to end mass criminalization, particularly that of youth and communities of black, indigenous and people of color (BIPOC).</p>
          <p><strong>W</strong>e are the only national juvenile justice reform organization that is founded and run by families who have been directly impacted by the juvenile justice system.</p>
          <p><strong>W</strong>e seek to advance systemic policy and practice change while building a base directly impacted: </p>
              <ol>
                <li>    To individually help other families, and</li>
                <li>    To collectively sustain the reforms needed at the national and local levels.</li>
              </ol>  
          </Modal.Body>

          <Modal.Footer>
            <Button variant="success" onClick={handleClose}>
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
  