import React, { Component } from 'react';
import logo from './logo.png';
//import ContactForm from './ContactForm'
//import WWSFJumbo from './WWSFJumbo'
//import Trainings from './Trainings'
//import ReportDownLoad from './ReportDownLoad'
//import NavBar from './NavBar'
//import WhatWeDo from './WhatWeDo'
//import WhatwedoJumIn from './WhatwedoJumIn'
//import WhatwedoJumb2 from './WhatwedoJumb2'
//import WhoWeAre from './WhoWeAre'
//import WhatWeStandFor from './WhatWeStandFor';
//import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
// import Nav fom './Nav'
// import React from 'react';
import {
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import Home from './Home'
import Staff from './Staff'
import Partnerships from './Partnerships'
import Policy from './Policy'
import Trainings from './Trainings'
import Institute from './Institute'
import Media from './Media'
//import {Header} from 'react-bootstrap/Header'
//import { BrowserRouter } from 'react-router-dom';


class App extends Component {
  render() {
    return (

      <>
      <h5 className='cursive1'>"Those who control the words and the images, controls  the people's mind." ~ Iylana VanZant ~</h5>
      <div className="App" sticky-top>
        {/* <header className="App-header"> */}
        <div className="menu">
            <ul>
              <center> <img src={logo} className="App-logo" alt="logo" ></img></center>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/staff">Staff</Link> </li>
                <li> <Link to="/partnerships">Partnerships</Link> </li>
                <li> <Link to="/institute">Institute</Link> </li>
                <li> <Link to="/policy">Policy</Link> </li>
                <li> <Link to="/trainings">Trainings</Link> </li>
                <li> <Link to="/media">Media</Link> </li>
            </ul>
        </div>
        <div className="App-intro">
          <Switch>
            <Route exact path="/"  component={Home} />
            <Route path="/staff" component={Staff} />
            <Route path="/partnerships" component={Partnerships} />
            <Route path="/institute" component={Institute} />
            <Route path="/policy" component={Policy} />
            <Route path="/trainings" component={Trainings} />
            <Route path="/media" component={Media} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>


{/*   
  
   <NavBar />     */}
    {/* 1st showing after navbar on home page */}
     {/* <WWSFJumbo /> */}
    {/* second section of home page consists of mission purpose vision values */}
    {/* <WhatWeStandFor />   */}
     {/* 3rd section consists of two side pics, quote in the middle, goals & strategies and   */}
    {/* <WhoWeAre />
     <WhatWeDo />  
    <Footer /> */} 
</>

  )
}
}

export default App