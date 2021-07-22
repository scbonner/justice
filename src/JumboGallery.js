import React from 'react'
// import { Jumbotron, Container } from 'react-bootstrap/Jumbotron';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Jumbotron';
import WhatWeStandFor from './WhatWeStandFor'
import './whatwedo.css'



export default function JumboGallery() {
    return (
<>

    <div>
      <Jumbotron fluid>
        <Container fluid id='protest'>
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
        <strong><center><h1 className="display-3">WHAT WE STAND FOR...</h1></center></strong>
        <img src='https://images.pexels.com/photos/6698318/pexels-photo-6698318.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=140' alt="..." ></img>
                    <img src='https://images.pexels.com/photos/6190858/pexels-photo-6190858.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=140' alt="..." ></img>
                    <img src='https://images.pexels.com/photos/4546144/pexels-photo-4546144.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=120&w=240' alt="..." ></img>
                    <img src='https://images.pexels.com/photos/4546025/pexels-photo-4546025.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200' alt="..." ></img>
                    <img src="https://images.pexels.com/photos/2505397/pexels-photo-2505397.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt='...'></img>
                    <img src='https://images.pexels.com/photos/3704379/pexels-photo-3704379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200' alt="..." ></img>
                    <img src='https://images.pexels.com/photos/4400973/pexels-photo-4400973.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=280' alt="..." ></img>
                    <img src='https://images.pexels.com/photos/3059691/pexels-photo-3059691.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='...' ></img>
                    <img src='https://images.pexels.com/photos/5211439/pexels-photo-5211439.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=180' alt="..." ></img>
                    <img src='https://images.pexels.com/photos/5905866/pexels-photo-5905866.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=100&w=160' alt="..." ></img>
                    <img src='https://images.pexels.com/photos/1320701/pexels-photo-1320701.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200' alt="..." ></img>
                    <img src='https://images.pexels.com/photos/1098769/pexels-photo-1098769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='...'></img>
                    <img src='https://images.pexels.com/photos/5211439/pexels-photo-5211439.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=250'alt="..." ></img> 
          <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> 
        </Container>
      </Jumbotron>
    <WhatWeStandFor />
    </div>

</>

    );
}


