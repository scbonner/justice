import React from 'react'
import{ Container } from 'reactstrap'
import { Jumbotron } from 'reactstrap' 
import './App.css'

function FirstPage() {
    return(

        <div className="container">
        <Jumbotron fluid>
              <Container fluid id='hero-image2'>
              {/* <div id="hero-image2"> */}
  <div id="hero-text">
    <h1>I am John Doe</h1>
    <p>And I'm a Photographer</p>
    <a
                href="home.js"
                className="App-link"
                target="_blank"
                rel="noopener noreferrer"
                >
                Home
                </a>
    {/* <button>Hire me</button> */}
  </div>
                {/* <br /> <br /> <br /> <br /> <br /> <br /> 
                  <strong><center><h1 className="display-3">WHAT WE STAND FOR...</h1></center></strong> */}
                
                  {/* <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p> */}
                  <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
              </Container>
            </Jumbotron>
           {/* <img src={theplan} className="theplan" alt="logo" /> */}
            {/* <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
                <a
                href="home.js"
                className="App-link"
                target="_blank"
                rel="noopener noreferrer"
                >
                Home
                </a> */}

                

        </div>




    )
}

export default FirstPage