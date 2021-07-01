
import React, { useState, ref, useRef } from 'react'
import { Button, Overlay, Tooltip, Image } from 'react-bootstrap';

export default function Tip() {
    const [show, setShow] = useState(false);
    const target = useRef(null);
  
    return (
      <>
        {/* <Button ref={target} onClick={() => setShow(!show)}>
          Click me!
        </Button> */}
        <Button
        variant="light"
        ref={target} onClick={() => setShow(!show)}
        className="d-inline-flex align-items-center"
      >
        <Image
          ref={ref}
          roundedCircle
          src="holder.js/20x20?text=J&bg=28a745&fg=FFF"
        />
        <span className="ml-1">Hover to see</span>
      </Button>
        <Overlay target={target.current} show={show} placement="right">
          {(props) => (
            <Tooltip id="overlay-example" {...props}>
            <p>“This extraordinary … must read … comprehensive study 
            examines our youth prison system from the perspective of those 
            who are most impacted — young people and their families.” ~ Michelle Alexander, 
            author of </p><u>The New Jim Crow</u>
            </Tooltip>
          )}
        </Overlay>
      </>
    );
  }
  