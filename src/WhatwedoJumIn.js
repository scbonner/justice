import React from 'react'
import { Jumbotron } from 'reactstrap';
import ladiesinblue2 from './image/ladiesinblue2.jpeg'
import './whatwedo.css'




function WhatwedoJumIn() {
    return (

<Jumbotron>
    <Jumbotron style={{ backgroundImage: `url(${ladiesinblue2})`, height: '85vh', color: 'white', fontWeight: 'bold' }}> 
        <center><h1 className="display-4" >THE INSTITUTE</h1></center>

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

export default WhatwedoJumIn