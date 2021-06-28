import React from 'react'
//import Jumbotron from 'react-bootstrap/Jumbotron';
//import Container from 'react-bootstrap/Container';
//import ReactDOM from 'react-dom'
//import AnchorLink from 'react-anchor-link-smooth-scroll'
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import { Link, Switch, Route, Redirect } from 'react-router-dom';
//import Home from './Home'
import Staff from './Staff'
import Partnerships from './Partnerships'
import Institute from './Institute'
import Policy from './Policy'
import Trainings from './Trainings'
import logo from './logo.png';




                   
 export default function NavBar() {
     return (

         <div>
            {/* <img src={logo} className="App-logo" alt="logo" ></img> */}
            <div className="menu">
                <nav className="navbar navbar sticky-top navbar-expand-md bg=light variant=light mb-5"></nav>
                {/* <img src={logo} className="App-logo" alt="logo" ></img>  */}
                <ul>
                     <img src={logo} className="App-logo" alt="logo" ></img>
                    {/* <br /> */}
                   
                    <li> <Link to="/"></Link> </li>
                    <li> <Link to="/staff">Staff</Link> </li>
                    <li> <Link to="/partnerships">Partnerships</Link> </li>
                    <li> <Link to="/institute">The Institute</Link> </li>
                    <li> <Link to="/policy">Policy</Link> </li>
                    <li> <Link to="/trainings">Trainings</Link> </li>
                </ul>
            </div>
            <div className="App-intro">
                <Switch>
                <Route exact path="/"   />
                <Route path="/staff" component={Staff} />
                <Route path="/partnerships" component={Partnerships} />
                <Route path="/institute" component={Institute} />
                <Route path="/policy" component={Policy} />
                <Route path="/trainings" component={Trainings} />
                <Redirect to="/" />
                </Switch>
            </div>
         </div>


  );
}









       
            