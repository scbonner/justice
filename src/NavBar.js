import React, { Component } from 'react'

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
//import ReactDOM from 'react-dom'
//import AnchorLink from 'react-anchor-link-smooth-scroll'
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/css/bootstrap.min.css";




export default class NavBar extends Component {
    render() {
        return (
            <div>
        
            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-3">
                 <div className="container-fluid">
                     <a href="j4f" className="navbar-brand mr-3">J4F</a>
                     <a href="ourteam" className="navbar-brand mr-3">Our Team</a>
                     <a href="partnerships" className="navbar-brand mr-3">Partnerships</a>
                     <a href="familyinstitute" className="navbar-brand mr-3">Family Institute</a>
                     <a href="policy" className="navbar-brand mr-3">Policy</a>
                     <a href="trainings" className="navbar-brand mr-3">Trainings</a>
                   
    </div>
    </nav>

  
  <div>
        <Jumbotron fluid>
        <Container>
          <h1>Fluid jumbotron</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal space of
            its parent.
          </p>
        </Container>
      </Jumbotron>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav">
                <a href="ourteam" className="nav-item nav-link active">Our Team</a>
                <a href="partnerships" clasNames="nav-item nav-link">Partnerships</a>
                <a href="families" className="nav-item nav-link">Families</a>
                <a href="policy" className="nav-item nav-link">Policy</a>
                <a href="trainings" className="nav-item nav-link">Trainings</a>
            </div> 
                 <div class="navbar-nav ml-auto">
                    <a href="register" class="nav-item nav-link">Register</a>
                    <a href="login" class="nav-item nav-link">Login</a>
                </div> 
            
          
             </div>  


 <div>
        <Jumbotron fluid>
        <Container>
          <h1>Fluid jumbotron</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal space of
            its parent.
          </p>
        </Container>
      </Jumbotron>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav">
                <a href="ourteam" className="nav-item nav-link active">Our Team</a>
                <a href="partnerships" clasNames="nav-item nav-link">Partnerships</a>
                <a href="families" className="nav-item nav-link">Families</a>
                <a href="policy" className="nav-item nav-link">Policy</a>
                <a href="trainings" className="nav-item nav-link">Trainings</a>
            </div> 
                <div class="navbar-nav ml-auto">
                    <a href="register" class="nav-item nav-link">Register</a>
                    <a href="login" class="nav-item nav-link">Login</a>
                </div> 
            
          
            </div> 
    </div>

</div>
</div>

    
    )

                
        

    }
}

