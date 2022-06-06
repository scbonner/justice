import React from 'react'
//import '../Logo/index'
//import { Link } from 'react-router-dom'
//import { Button } from 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.css';
import './jumbotron.css'




function Jumbotron() {
    return (
      

      <div class="jumbotron jumbotron-fluid bg-info text-white">
      <div class="container text-sm-center pt-5">
        <h1 class="display-2">Full Stack Conf</h1>
        <p class="lead">A One-day Conference About All Things JavaScript!</p>        
        <div class="btn-group mt-4" role="group" aria-label="Callout buttons">
          <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#register">Register Now</button>
          <a class="btn btn-light btn-lg" href="#speakers">See Speakers</a>
        </div>        
      </div>
    </div>



    )
}

export default Jumbotron

