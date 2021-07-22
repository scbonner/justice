import React from 'react'
//import Jumbotron from 'react-bootstrap/Jumbotron';
//import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home'
import Staff from './Staff'
import Partnerships from './Partnerships'
import Institute from './Institute'
import Policy from './Policy'
import Trainings from './Trainings'
import logo from './logo.png';




export default function NavBar() {
    return (

       // Need to make sure that navbar appears on each individual page and all links and routes work.
        <div>
            <div className="menu">
                <nav className="navbar navbar sticky-top navbar-expand-md bg=light variant=light mb-5"></nav>
                    <ul>
                        <center> <img src={logo} className="App-logo" alt="logo" ></img></center>
                        <li> <Link to="/"></Link>Home</li>
                        <li> <Link to="/staff">Staff</Link> </li>
                        <li> <Link to="/partnerships">Partnerships</Link> </li>
                        <li> <Link to="/institute">The Institute</Link> </li>
                        <li> <Link to="/policy">Policy</Link> </li>
                        <li> <Link to="/trainings">Trainings</Link> </li>
                    </ul>
            </div>
                <div className="App-intro">
                    <Switch>
                    <Route exact path="/home" component={Home}   />
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
   









       
            