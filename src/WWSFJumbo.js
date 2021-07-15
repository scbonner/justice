import React from 'react'
// import { Jumbotron, Container } from 'react-bootstrap/Jumbotron';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Jumbotron';
import WhatWeStandFor from './WhatWeStandFor'
import './App.css'
import './whatwedo.css'




export default function WWSFJumbo() {
    return (
      <>
        <div>
          <Jumbotron fluid>
            <Container fluid id='protest'>
              <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
                <strong><center><h1 className="display-3">WHAT WE STAND FOR...</h1></center></strong>
              
                {/* <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p> */}
                <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> 
            </Container>
          </Jumbotron>
            <div className='container'>
              <h1><center>FAMILIES...</center></h1>
                <p className='cursive'><center>“For these are all our children, we will all profit by or pay for what they become.” ~ James Baldwin ~</center></p>
            
                  <img src='https://images.pexels.com/photos/6190858/pexels-photo-6190858.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=175&w=140' alt="..." ></img>
                  <img src='https://images.pexels.com/photos/4546144/pexels-photo-4546144.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=120&w=250' alt="..." ></img>
                  <img src='https://images.pexels.com/photos/4546025/pexels-photo-4546025.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200' alt="..." ></img>
                  
                  <img src='https://images.pexels.com/photos/4400973/pexels-photo-4400973.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=280' alt="..." ></img>
                  <img src='https://images.pexels.com/photos/5211439/pexels-photo-5211439.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=180' alt="..." ></img>
                    <br />
                    <br />
                  <p className='cursive'><center>"No problem can be solved from the same level of consciousness that created it." ~ Albert Einstein ~</center></p> 
            <div>
          </div>   
        </div>
        <WhatWeStandFor />
        </div>

      {/* Storing the images below for future use and switchouts */}

                  {/* <img src='https://images.pexels.com/photos/6698318/pexels-photo-6698318.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=140' alt="..." ></img> */}
                  {/* <img src='https://images.pexels.com/photos/5905866/pexels-photo-5905866.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=100&w=160' alt="..." ></img>
                  <img src='https://images.pexels.com/photos/1320701/pexels-photo-1320701.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200' alt="..." ></img>
                  <img src='https://images.pexels.com/photos/5211439/pexels-photo-5211439.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=250'alt="..." ></img> */}
                  {/* <img src='https://images.pexels.com/photos/3704379/pexels-photo-3704379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200' alt="..." ></img> */}

      </>


    );
}


