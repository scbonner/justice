import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';
import thegathering from './image/thegathering.jpeg'
import './whatwedo.css'



export default function WhatwedoJumb1() {
    return (
<>

<Jumbotron>
    <Jumbotron style={{ backgroundImage: `url(${thegathering})`, height: '85vh', color: 'white', fontWeight: 'bold' }}>
        <h1 className="display-4">ADVOCACY</h1>
         <br />
         <br />
         <br />
         <br />
         <br />
         <a className="btn btn-primary btn-lg" href="#speakers">Click Here</a>
         <br />
      </Jumbotron> 
   
</Jumbotron>
</>

    );
}