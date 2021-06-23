import React from 'react'
//import Jumbotron from 'react-bootstrap/Jumbotron';
//import Container from 'react-bootstrap/Container';
//import ReactDOM from 'react-dom'
//import AnchorLink from 'react-anchor-link-smooth-scroll'
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
//import logo from './logo.png';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home'
import Staff from './Staff'
import Partnerships from './Partnerships'
import Institute from './Institute'
import Policy from './Policy'
import Trainings from './Trainings'





                   
 function NavBar() {
     return (
         <div>
          {/* <nav className="navbar navbar sticky-top navbar-expand-md bg=light variant=light mb-5"> */}
                {/* <nav className="navbar sticky-top navbar-light bg-light"> */}
                
                {/* <div className="container-fluid"> */}
           <div className="menu">
            <ul>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/staff">Staff</Link> </li>
            <li> <Link to="/partnerships">Partnerships</Link> </li>
            <li> <Link to="/institute">Institute</Link> </li>
            <li> <Link to="/policy">Policy</Link> </li>
            <li> <Link to="/trainings">Trainings</Link> </li>
            {/* <li> <Link to="/about">About</Link> </li> */}
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
          <Redirect to="/" />
        </Switch>
      </div>
      
    </div>


  );
}










// <nav className="navbar navbar sticky-top navbar-expand-md bg=light variant=light mb-5">
//                 {/* <nav className="navbar sticky-top navbar-light bg-light"> */}
//                 <div className="container-fluid">
//                 {/* <img src={logo} className="App-logo" height="45px" width="150px" alt="logo" /> */}
//                      <a href="j4f" className="navbar-brand mr-3"><h1><strong>J4F</strong></h1></a>  */}
//                         {/* <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
//                              <span className="navbar-toggler-icon"></span>
//                          </button>  */}

//                             <div className="collapse navbar-collapse" id="navbarCollapse">
//                                 <div className="navbar-nav">
//                                     {/* <a href="/" className="nav-item nav-link active"></a> */}
//                                     <a href="staff" className="nav-item nav-link active">STAFF</a>
//                                     <a href="partnerships" className="nav-item nav-link">PARTNERSHIPS</a>
//                                     <a href="institute" className="nav-item nav-link">INSTITUTE</a>
//                                     <a href="policy" className="nav-item nav-link">POLICY</a>
//                                     <a href="trainings" className="nav-item nav-link">TRAININGS</a>
//                                 </div>

//                                     <div className="navbar-nav ml-auto">
//                                         <a href="search" className="nav-item nav-link">Search</a>
//                                         <a href="report" className="nav-item nav-link">Download Report</a>
//                                     </div>
//                             </div>
//                      </div>    
            
//         </div>
        
 

   
        
 export default NavBar
       
            