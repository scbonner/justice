import logo from './logo.png';
import Staff from './Staff'
import Jeannette from './Jeannette/jeannette.js'
import Partnerships from './Partnerships'
import Policy from './Policy'
import Institute from './Institute'
import Trainings from './Trainings'
import Home from './Home'
//import NavBar from './NavBar'
import WhatWeDo from './WhoWeAre'
import WhoWeAre from './WhatWeDo'
//import Values from './Values';
import Mission from './Mission';
//import Values from './Values'
//import Institute from './Institute';
// import Partnerships from './Partnerships';
// import Policy from './Policy';
// import Trainings from './Trainings';
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
//import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';


const Button = styled.button`
  cursor: pointer;
  background: green;
  font-size: 15px;
  border-radius: 12px;
  color: white;
  ${'' /* border: 2px blue;   */}
  margin: 0 1em;
  padding: .5em 1em;
  transition: 0.5s all ease-out;
  background-color: green;
  font-weight: bold;
  
  &:hover {
    background-color: grey;
    color: white;
  
  }
`;

function App() {
  return (
    
    <div className="App">
        {/* <NavBar /> */}
        <div>
            <nav className="navbar navbar sticky-top navbar-expand-md bg=light variant=light mb-5">
                {/* <nav className="navbar sticky-top navbar-light bg-light"> */}
                <div className="container-fluid">
                {/* <img src={logo} className="App-logo" height="45px" width="150px" alt="logo" /> */}
                     <a href="j4f" className="navbar-brand mr-3"><h1><strong>J4F</strong></h1></a> 
                        
                        
                     {/* <Link to="/account">
                <Button color="black" className="is-rounded">
                  <span>My Account</span>
                </Button>
              </Link>
                        
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                             <span className="navbar-toggler-icon"></span>
                         </button>
                         
                         <Link to="/staff">
                          <Button background-color="white" color='black' className="is-rounded">
                            <span>STAFF</span>
                          </Button>
                        </Link>  

                          <Link to='/staff'>
                          <Button>  Staff  </Button>
                          </Link> 
                          <a href="staff" className="btn btn-primary">STAFF</a>
                          <a href="partnerships" className="btn btn-primary">PARTNERSHIPS</a>






                          <Link to={'/partnerships'}>
                          <Button>Partnerships</Button>
                          </Link>
                          <Link to={'/institute'}>
                          <Button>The Institute</Button>
                          </Link>  
                          <Link to={'/policy'}>
                          <Button>Policy</Button>
                          </Link> 
                          <Link to={'/trainings'}>
                          <Button>Trainings</Button>
                          </Link>  */}

                            {/* <div className="collapse navbar-collapse" id="navbarCollapse">
                                <div className="navbar-nav">
                                    {/* <a href="/" className="nav-item nav-link active"></a> */}
                                    {/* <a href="src/staff" className="nav-item nav-link active">STAFF</a>
                                    <a href="partnerships" className="nav-item nav-link">PARTNERSHIPS</a>
                                    <a href="institute" className="nav-item nav-link">INSTITUTE</a>
                                    <a href="policy" className="nav-item nav-link">POLICY</a>
                                    <a href="trainings" className="nav-item nav-link">TRAININGS</a>
                                </div> */}

                            <div className="navbar-nav ml-auto">
                                <a href="search" className="nav-item nav-link">Search</a>
                                <a href="report" className="nav-item nav-link">Download Report</a>
                            </div>
                        </div>
                        
            </nav>
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       

        {/* <BrowserRouter>
        <NavBar />
        <Switch>
        <Route exact path="/" component={Home} />  
        <Route path="/staff" component={Staff} /> 
        <Route path="/institute" component={Institute} />
        <Route path="/partnerships" component={Partnerships} />
        <Route path="/policy" component={Policy} /> 
        <Route path="/trainings" component={Trainings} />
        
        </Switch>
      <Footer />
    </BrowserRouter> */}

       
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
      <Staff />
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
