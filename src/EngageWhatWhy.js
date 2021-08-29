import React, { useDisclosure } from 'react'
//import Button from 'react-bootstrap/Button'
//import Modal from 'react-bootstrap/Modal';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button
  } from "@chakra-ui/react"

  
  export default function EngageWhatWhy() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <p><strong>W</strong>hile this topic may seem too basic and not needed for most professionals, the content is presented in a distinctive manner meant to help participants make connections between their own families and the families they work with.  Defining family could be as easy as opening up a dictionary and reading the definition. However, this type of learning doesn’t provide the participant with the opportunity to recognize the many facets of relationship building essential to “genuine and meaningful” engagement and partnership. This session also provides research-based reasons why family engagements benefits systems, workforce and community safety as well as individual youth and family outcomes.</p>
              {/* <Lorem count={2} /> */}
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }









// export default function EngageWhatWhy() {
//     const [show, setShow] = useState(false);
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
  
//     return (
//       <>
//         <Button variant="success" onClick={handleShow}>
//           PURPOSE >>
//         </Button>
//         <Modal show={show} onHide={handleClose}>
//           <Modal.Header closeButton>
//             <Modal.Title>Our Purpose</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//           <p><strong>W</strong>hile this topic may seem too basic and not needed for most professionals, the content is presented in a distinctive manner meant to help participants make connections between their own families and the families they work with.  Defining family could be as easy as opening up a dictionary and reading the definition. However, this type of learning doesn’t provide the participant with the opportunity to recognize the many facets of relationship building essential to “genuine and meaningful” engagement and partnership. This session also provides research-based reasons why family engagements benefits systems, workforce and community safety as well as individual youth and family outcomes.</p></Modal.Body>
//           <Modal.Footer>
//             <Button variant="success" onClick={handleClose}>
//               Close
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </>

      
//     );
//   }