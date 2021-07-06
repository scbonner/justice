import React from 'react'
//import reactDom from 'react-dom'
import Trainings1 from './Trainings1'
import 'bootstrap/dist/css/bootstrap.css';
//import { Jumbotron } from 'react-bootstrap/Jumbotron';
//import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
// import ListGroupItem from 'react-bootstrap/ListGroupItem';
//import { Container } from 'react-bootstrap/Container'


//Traininig file: need to add images and text. 
//May need to add individual url images in CSS


export default function Trainings() {
    return (

        <div class="container">
        <Trainings1 />
        <h1><center>TRAININGS</center></h1>
        <div className="row row-flex">
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="content colour-7">
            <br />
              <h5>Family Engagement: What is it and why is it important? </h5>
              <br />
              {/* <p>This one has a bit longer content</p> */}
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="content colour-8">
            <br />
              <h5>Maintaining a Family-Engagement Focused Workforce </h5>
              <br />
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="content colour-9">
            <br />
              <h5>The Family Engagement Continuum and Your Practice-Part 1 & 2</h5>
              <br />
            </div>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="content colour-10">
            <br />
              <h5>Impact of Trauma on Family Engagement-Part 1, 2 & 3</h5>
            <br />
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="content colour-11">
              <h5>Developing a Vision & Setting Broad Goals for Improved Family Engagement in your System or Organization </h5>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="content colour-12">
            <br />
              <h5>Equity, Wealth, Race and Racism in the Justice System-Part 1 & 2</h5>
              <br />
            </div>
          </div> 
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="content colour-13">
            <br />
              <h5>Adolescent Brain Development and Youth Voice in the Justice System </h5>
            <br />
              
            </div>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="content colour-14">
            <br />
              <h5>Writing & Achieving Measurable Goals </h5>
              <br />
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="content colour-15">
            <br />
              <h5>Reflective Supervision </h5>
              <br />
              <br />
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="content colour-16">
            <br />
              <h5>Partnering with the Community to Achieve Goals </h5>
              <br />
            </div>
          </div> 
          <div className="col-md-4 col-sm-6 col-xs-12">
            {/* <div className="content colour-16"> */}
            <br />
              <p>To register, please contact Jeannette Bocanegra at jeannette@justice4families.org.  </p>
              <br />
            </div>
          </div> 
        </div>
   



                
    )
}


