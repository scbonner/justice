import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';
import ladiesinblue from './image/ladiesinblue.jpeg'
import './whatwedo.css'




export default function WhatwedoJumIn() {
    return (

<Jumbotron>
    <Jumbotron style={{ backgroundImage: `url(${ladiesinblue})`, height: '85vh', color: 'white', fontWeight: 'bold' }}> 
        <center><h1 className="display-4">THE INSTITUTE</h1></center>

         <br />
         <br />
         <br />
         <br />
         {/* <a className="btn btn-primary btn-lg" href="#speakers">Click Here</a> */}
         <br />
    </Jumbotron>
            
</Jumbotron>

    );
}