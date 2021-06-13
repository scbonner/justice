import logo from './logo.png';
import NavBar from './NavBar'
//import GeoMap from './GeoMap'
// WhoWeAre from './WhoWeAre'
// import Board from './Board';
import Staff from './Staff';
//import Values from './Values'
// import Institute from './Institute';
// import Partnerships from './Partnerships';
// import Policy from './Policy';
// import Trainings from './Trainings';
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.css'
//import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    
    <div className="App">
       <NavBar />
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
		/>
		{/* <Animate /> */}
	</div>
      </header>
      {/* <Jumbotron />
      <Staff />
      {/* <Board /> */}
      {/* <Values />  */}
      <Staff />
      {/* <WhoWeAre /> */}
     <Footer />
      {/* <Jumbotron />  */}
      {/* <div className="button">
   <a href="home.html" className="btn btn-secondary">HOME</a> 
  </div> */}
  
    </div>



  );
}

export default App;
