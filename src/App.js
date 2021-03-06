import React from 'react';
import logo from './logo.png';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import {
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import Home from './Home'
import Staff from './Staff'
import Partnerships from './Partnerships'
import Community from './Community'
import Trainings from './Trainings'
import Institute from './Institute'
import Media from './Media'
import Contact from './Contact'
import Donate from './Donate'


//import {Header} from 'react-bootstrap/Header'
//import { BrowserRouter } from 'react-router-dom';


function App() {
    return (  
      <>
      {/* <h5 className='cursive1'>"Those who control the words and the images, controls the ." ~ Iylana VanZant ~</h5> */}
        <div className='cursive1'>“For these are all our children, we will all profit by or pay for what they become.”  ~ James Baldwin ~ </div>

      {/* <marquee scrolldelay="100" className='cursive1'>"Those who control the words and the images, controls the minds of the people." ~ Iylana VanZant ~ </marquee> */}
          <div className="App" sticky-top>
        {/* <header className="App-header"> */}
            <div className="menu">
                <ul>
                  <center> <img src={logo} className="App-logo" alt="logo" ></img></center>
                    <li> <Link to="/">Home</Link> </li>
                    <li> <Link to="/staff">Staff</Link> </li>
                    <li> <Link to="/partnerships">Partnerships</Link> </li>
                    <li> <Link to="/institute">Institute</Link> </li>
                    <li> <Link to="/community">Community</Link> </li>
                    <li> <Link to="/trainings">Trainings</Link> </li>
                    <li> <Link to="/media">Media</Link> </li>
                    <li> <Link to="/contact">Contact</Link> </li>
                    <li> <Link to="/donate">Donate</Link> </li>
                </ul>
            </div>
            <div className="App-intro">
              <Switch>
                <Route exact path="/"  component={Home} />
                <Route path="/staff" component={Staff} />
                <Route path="/partnerships" component={Partnerships} />
                <Route path="/institute" component={Institute} />
                <Route path="/community" component={Community} />
                <Route path="/trainings" component={Trainings} />
                <Route path="/media" component={Media} />
                <Route path="/contact" component={Contact} />
                <Route path="/donate" component={Donate} />
                <Redirect to="/" />
              </Switch>
          
            </div>
      </div>
    </>

    )
  }


export default App