import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import './App.css'

 

export default function Trainings6() {
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
            <Modal.Title className='cursive2'>Developing a Vision & Setting Broad Goals for Improved Family Engagement </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p><strong>P</strong>articipants that have attended all J4F virtual learning experiences will have developed a common understanding and language relating to trauma, race, ethnicity, inequality, adolescent brain development and how each of these areas relates to “genuine and meaningful” family engagement and partnership. Now agencies and organizations are ready to develop a vision and broad goals for how family engagement can be successfully integrated into all aspects of the system or organization through new practices and policies. During these sessions, trainers will lead the group in discussions designed to help them think outside the box to develop tools, strategies and policies that work for their particular organization/agency or improve upon existing ones.  Here are a few examples of the questions we discuss:</p>
                 <ol>
                   <li>What are the elements for a meaningful vision and mission statement?</li>
                   <li>How to work with families to get their ideas for the vision and mission?</li>
                   <li>What are key areas where goals are needed?</li>
                   <li>Do we have the necessary structures in place to support the goals?</li>
                 </ol>
            <p> This session is the first step in strategic planning and can be conducted in multiple ways. Smaller groups (20 or less) will join as one group.  Larger groups have divided their whole organization into smaller groups such as probation, detention staff or youth advocates. If you have a larger organization or agency, breaking into smaller groups (such as departments) gives participants a chance to explore ideas in depth and focus on a greater details.  In addition to this session, trainers can set up technical assistance webinars/calls to help guide your agency/organization through the process.  </p>
                                {/* </div>
                        
                                </div>
                    </div> */}

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
