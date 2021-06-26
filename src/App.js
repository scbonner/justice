import logo from './logo.png';
import Staff from './Staff'
import Jeannette from './Jeannette/jeannette.js'
import Partnerships from './Partnerships'
import Policy from './Policy'
import Institute from './Institute'
import Trainings from './Trainings'
import Home from './Home'
import NavBar from './NavBar'
import WhatWeDo from './WhatWeDo'
import WhoWeAre from './WhoWeAre'
//import Values from './Values';
import Mission from './Mission';

import Footer from './Footer'
//import 'bootstrap/dist/css/bootstrap.css'
import { Link, Route, Switch, Redirect } from 'react-router-dom';
//import styled from 'styled-components';
//import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';


// const Button = styled.button`
//   cursor: pointer;
//   background: green;
//   font-size: 15px;
//   border-radius: 12px;
//   color: white;
//   ${'' /* border: 2px blue;   */}
//   margin: 0 1em;
//   padding: .5em 1em;
//   transition: 0.5s all ease-out;
//   background-color: green;
//   font-weight: bold;
  
//   &:hover {
//     background-color: grey;
//     color: white;
  
//   }
// `;

function App() {
  return (
    
    
      
        <div>
        <div className="App">
        <NavBar />
            <nav className="navbar navbar sticky-top navbar-expand-md bg=light variant=light mb-5">
                {/* <nav className="navbar sticky-top navbar-light bg-light"> */}
                <div className="container-fluid">
                
                     {/* <a href="j4f" className="navbar-brand mr-3"><h1><strong>J4F</strong></h1></a>  */}
                  
        <header className="App-header">
        <img src={logo} className="App-logo" height="45px" width="150px" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="menu">
            <ul>
              <li> <Link to="/">Home</Link> </li>
              <li> <Link to="/staff">Staff</Link> </li>
              <li> <Link to="/about">Partnerships</Link> </li>
              <li> <Link to="/institute">Institute</Link> </li>
              <li> <Link to="/policy">Policy</Link> </li>
              <li> <Link to="/trainingss">Trainings</Link> </li>
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
    </nav>
  
                        
  
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       

       

       
          {/* Edit <code>src/App.js</code> and save to reload. */}
        
      {/* This area should link to the first home page of site */}
        <a
          className="App-link"
          href="j4f" 
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* // <Button> View Profile </Button> */}
          {/* <GeoMap /> */}
         <button className="button-tertiary" id="nav-item nav-link active" type="submit">
          CLICK TO ENTER
        </button>

        </a>
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
      </header>
      {/* <Jumbotron />
    
      {/* <Board /> */}
      {/* <Values />  */}
      {/* <Staff /> */}
      {/* <Institute /> */}
      <Jeannette />
      <Mission />
      <WhatWeDo />
      <WhoWeAre />
      {/* <Values /> */}
     <Footer />
      {/* <Jumbotron />  */}
      {/* <div className="button">
   <a href="home.html" className="btn btn-secondary">HOME</a> 
  </div> */}
  
    </div>
    </div>



  );
}

export default App;
