import React from 'react'
import{ Container } from 'reactstrap'
import { Jumbotron } from 'reactstrap' 
import RacialJustice from './RacialJustice'
import HumanRights from './HumanRights'
import FamilyValues from './FamilyValues'
import './App.css'
import './whatwedo.css'

 function WWSFJumbo() {
    return (
      <>
        <div>
          {/* <marquee scrolldelay="100">***Simple scrolling text***</marquee> */}
            <Jumbotron fluid>
              <Container fluid id='protest'>
                <br /> <br /> <br /> <br /> <br /> <br /> 
                  <strong><center><h1 className="display-3">WHAT WE STAND FOR...</h1></center></strong>
                
                  {/* <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p> */}
                  <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
              </Container>
            </Jumbotron>

              <p className='cursive'><center>"A man who stands for nothing will fall for anything."</center></p> 
                <p className='cursive'><center>~ Malcolm X ~</center></p>

                <hr className="new1" />
              <div className='container'><br />
                <h1><center>FAMILIES VALUED...</center></h1>
                <div className="hero-image">
                  <div className="hero-text">
                  <br /> <br />
                    <FamilyValues />
                  
              
                  </div>
                </div>
                 <br /> <br />  <br /> <br />
               
                    <img src='https://images.pexels.com/photos/6190858/pexels-photo-6190858.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=175&w=140' alt="..." ></img>
                    <img src='https://images.pexels.com/photos/4546144/pexels-photo-4546144.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=120&w=250' alt="..." ></img>
                    <img src='https://images.pexels.com/photos/4546025/pexels-photo-4546025.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200' alt="..." ></img>
                    <img src='https://images.pexels.com/photos/4400973/pexels-photo-4400973.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=280' alt="..." ></img>
                    <img src='https://images.pexels.com/photos/5211439/pexels-photo-5211439.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=180' alt="..." ></img>
                      <br />
                      <p className='cursive'><center>"To be in your children’s memories tomorrow, you have to be in their lives today" </center></p>
                      <p className='cursive'><center>~ Barbara Johnson ~</center></p>
                      <hr className="new1" />
                      <br />
              <div>
            </div>   
            {/* <p className='cursive'><center>“For these are all our children, we will all profit by or pay for what they become.” ~ James Baldwin ~</center></p> */}
          </div>
          <div className="col-lg order-2">
          <Jumbotron fluid>
            <Container fluid id='themural'> 
              <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />  <br />
              <div className="hero-image">
                  <div className="hero-text">
                    <h1><center>RACIAL JUSTICE...</center></h1>
            <RacialJustice />
              <br /> <br /> <br />  <br /> <br /> <br /> <br /> <br /> <br /> 
                  </div>
              </div>
                <br /> <br /> <br />  <br /> <br /> <br /> <br /> <br /> <br />
              <br /> <br /> <br /> <br />  <br /> <br /> <br />
             <center><p className='cursive' id='top-left'>"No problem can be solved from the same level of consciousness that created it." ~ Albert Einstein ~</p></center>
            </Container>
            <p className='cursive'><center>"No problem can be solved from the same level of consciousness that created it." </center></p>
            <p className='cursive'><center>~ Albert Einstein ~</center></p>
          </Jumbotron>
          <hr className="new1" />
        </div>
         
<br />
<br />

          <Jumbotron fluid>
            <Container fluid id='thecrowd'> 
              <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />  <br />
                <div className="hero-image">
                  <div className="hero-text">
                     <h1><center>HUMAN RIGHTS...</center></h1>
              <HumanRights />
              <br /> <br /> <br />  <br /> <br /> <br /> <br /> <br /> <br /> 
                  </div>
                </div>
                    <br /> <br /> <br />  <br /> <br /> <br /> <br /> <br /> <br />
                    <br /> <br /> <br /> <br />  <br /> <br /> <br />
                    
                </Container>
                <p className='cursive'><center>"In the end, we will remember not the words of our enemies, but the silence of our friends."</center></p> 
                <p className='cursive'><center>~ Martin Luther King, Jr. ~</center></p>
              </Jumbotron>
              <hr className="new1" />
      </div>
      </>


    );
}


export default WWSFJumbo
