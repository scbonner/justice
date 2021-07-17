// import logo from './logo.png';
//import Partnerships from './Partnerships'
// import Staff from './Staff'
// import Jeannette from './Jeannette/jeannette.js'
//import CircleNavbar from './CircleNavbar'
// import Partnerships from './Partnerships'
//import ContactForm from './ContactForm'
import WWSFJumbo from './WWSFJumbo'
//import Trainings from './Trainings'
//import ReportDownLoad from './ReportDownLoad'
import NavBar from './NavBar'
import WhatWeDo from './WhatWeDo'
//import WhatwedoJumIn from './WhatwedoJumIn'
//import WhatwedoJumb2 from './WhatwedoJumb2'
import JeannetteBS from './JeannetteBS'
import WhoWeAre from './WhoWeAre'
//import Partnerships from './Partnerships';
//import WhatWeStandFor from './WhatWeStandFor';
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
//import Institute from './Institute';



export default function App() {
  return (
      
    <div>
      <div className="App">
        <NavBar />
       
        {/* <Partnerships /> */}
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
            {/* <ContactForm />  */}
            {/* <CircleNavbar /> */}
            {/* <WhatwedoJumIn />  */}
           {/* <Institute /> */}
             {/* <Trainings />     */}
            {/* <ReportDownLoad /> */}
          {/* <Partnerships /> */}
          {/* <WhatwedoJumb2 /> */}
            <JeannetteBS />  
        
          <WWSFJumbo />
           {/* <WhatWeStandFor /> */}
           <WhoWeAre />
           <WhatWeDo /> 
           <Footer />
        </div>
      </div>
  
    
    



  );
}

