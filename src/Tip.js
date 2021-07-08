
import React, { useState, useRef } from 'react'
import { Button, Overlay, Tooltip } from 'react-bootstrap';

export default function Tip() {
    const [show, setShow] = useState(false);
    const target = useRef(null);
  
    return (
      <>
        <Button ref={target} onClick={() => setShow(!show)}>
         REVIEW
        </Button>
        <Overlay target={target.current} show={show} placement="right">
          {(props) => (
            <Tooltip id="overlay-example" {...props}>
            <p>“This extraordinary … must read … comprehensive study 
            examines our youth prison system from the perspective of those 
            who are most impacted — young people and their families.” ~ 
            Michelle Alexander, author of </p><u>The New Jim Crow</u>
            </Tooltip>
          )}
        </Overlay>
      </>
    );
  }
