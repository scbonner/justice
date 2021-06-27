// import logo from './logo.png';
// import Staff from './Staff'
// import Jeannette from './Jeannette/jeannette.js'
// import Partnerships from './Partnerships'
// import Policy from './Policy'
// import Institute from './Institute'
// import Trainings from './Trainings'
//import Home from './Home'
import NavBar from './NavBar'
import WhatWeDo from './WhatWeDo'
import WhoWeAre from './WhoWeAre'
//import Values from './Values';
import WhatWeStandFor from './WhatWeStandFor';
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
        {/* header section displays cover picture of protest */}
        {/* <header className="App-header"> 
          <div className="container-fluid">
          </div>
        </header> */}
              {/* <a href="j4f" className="navbar-brand mr-3"><h1><strong>J4F</strong></h1></a>  */}
              
                {/* <div>
                  <img src={logo} className="App-logo" alt="logo" ></img>
                    <br />
                    <br />
                      <button className="button-tertiary" id="nav-item nav-link active" type="submit">
                        CLICK TO ENTER
                      </button>
                </div> */}
          {/* <Home /> */}
           <WhatWeStandFor />
           <WhoWeAre />
           <WhatWeDo />
           <Footer />
        </div>
      </div>
  
    
    



  );
}

