import logo from './logo.png';
import Staff from './Staff'
import Jeannette from './Jeannette/jeannette.js'
// import Partnerships from './Partnerships'
// import Policy from './Policy'
// import Institute from './Institute'
// import Trainings from './Trainings'
// import Home from './Home'
import NavBar from './NavBar'
import WhatWeDo from './WhatWeDo'
import WhoWeAre from './WhoWeAre'
//import Values from './Values';
import Mission from './Mission';
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.css'
//import { Link, Route, Switch, Redirect } from 'react-router-dom';
//import styled from 'styled-components';
//import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';



export default function App() {
  return (
      
     <div>
      <div className="App">
        <NavBar />
          <header className="App-header">
            <div className="container-fluid">
              {/* <a href="j4f" className="navbar-brand mr-3"><h1><strong>J4F</strong></h1></a>  */}
        
      {/* This area should link to the first home page of site */}
{/*      
        <a
          className="App-link"
          href="j4f" 
          target="_blank"
          rel="noopener noreferrer"
        > */}
        <div>
         <img src={logo} className="App-logo" alt="logo" /> 
          <br />
          <br />
         <button className="button-tertiary" id="nav-item nav-link active" type="submit">
          CLICK TO ENTER
        </button>

        </div>
        </div>
        </header>
  
        <div>
		{/* <div
			style={{
				width: '200px',
				height: '200px',
				position: 'absolute',
				top: '0px',
				left: '0px',
				background: 'red',
				zIndex: 1,
			}} */}
		
		{/* <Animate /> */}
	</div>
    
      </div>
      {/* <Jumbotron />
    
      {/* <Board /> */}
      {/* <Values />  */}
      {/* <Staff /> */}
      {/* <Institute /> */}
       {/* <Values /> */}
      <Jeannette />
      <Staff />
      <Mission />
      <WhatWeDo />
      <WhoWeAre />
     <Footer />
      
  </div>
  
    
  
    
    



  );
}

