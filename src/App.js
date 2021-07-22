// import logo from './logo.png';
//import Partnerships from './Partnerships'
//import Staff from './Staff'
//import Home from './Home'
//import Policy from './Policy'
// import Partnerships from './Partnerships'
//import ContactForm from './ContactForm'
import WWSFJumbo from './WWSFJumbo'
//import Trainings from './Trainings'
//import ReportDownLoad from './ReportDownLoad'
import NavBar from './NavBar'
import WhatWeDo from './WhatWeDo'
//import WhatwedoJumIn from './WhatwedoJumIn'
//import WhatwedoJumb2 from './WhatwedoJumb2'
import WhoWeAre from './WhoWeAre'
//import Policy from './Policy';
//import WhatWeStandFor from './WhatWeStandFor';
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
//import logo from './logo.png';
//import Institute from './Institute'
//import { Route } from 'react-router-dom'
//import { BrowserRouter } from 'react-router-dom';



export default function App() {
  return (
      
    <>
            
      <NavBar /> 
    
            
            {/* <ContactForm />  */}
            {/* <CircleNavbar /> */}
            {/* <WhatwedoJumIn />  */}
           {/* <Institute /> */}
             {/* <Trainings />     */}
            {/* <ReportDownLoad /> */}
          {/* <Partnerships /> */}
          {/* <WhatwedoJumb2 /> */}
            {/* <Staff />   */}
            {/* <Jumbotron />  */}
    <WWSFJumbo />
      {/* <WhatWeStandFor /> */}
    <WhoWeAre />
    <WhatWeDo /> 
    <Footer />
    
  
    </>
    



  );
}

