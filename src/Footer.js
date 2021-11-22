import React from 'react'
import logo from './logo.png';
import Tip from './Tip'
import './App.css'




export default function Footer() {
  return (
// This section is part of the footer which houses protest pic, download button, tooltip 
    <div>
      <br /> 
      <br />
      <br />
        <header className="App-header"> 
          <div className="container-fluid">
            <h3><center>Families Unlocking Futures:</center></h3>
            <h3><center>Solutions to the Crisis in Juvenile Justice...  <Tip /></center></h3>
              <br />
                <div className='emailcontact'>
                  <button>
                      Request your copy of 
      {/* ***** double check line 25 security  */}
                      {/* <a href="mailto:justice4familiesgb@gmail.com" target="_blank" rel="noopener"> the report here.</a>  */}
                    <br /> 
                  </button>
                    <br />
                    <br />
                    <br />
                    <br />
                </div> 
          </div>
        </header>
        
        {/* the footer section in black need to make sure is is a sticky footer */}


  
<div className="container-fluid bg-dark py-5">
     <div className="container pt-4">
       <center><img src={logo} className="App-logo" height="140em" width="300em" alt="logo" ></img></center>
</div>
<footer>
  <div className="col-lg order-lg-1">
    <div id='container'>
      <div className="row">
        <div className="column">
          <h3>CONTACT US AT:</h3>
          <div className='containerp'>
          <p>2090 Honeywell Avenue</p>
          <p>Bronx, New York 10460</p>
          <p>Phone: 917.736.4286</p>
          <p>Website:justice4families.org</p>
        </div>
      </div>
      {/* <div className="container-fluid bg-dark py-5"> */}
    <div className="containerdiv">
      <span className="divider" />
              {/* // <h6> Need to find out where to link</h6> */}           
            {/* This is last column info  */}
          {/* <div className="col-lg order-2">
            <h4 className="mb-4"><center>Menu</center></h4>
              <div className="list-group">
                <a href="./staff" className="list-group-item list-group-item-action"><strong>STAFF</strong></a>
                <a href="./partnerships" className="list-group-item list-group-item-action"><strong>PARTNERSHIPS</strong></a>
                <a href="./institute" className="list-group-item list-group-item-action"><strong>INSTITUTE</strong></a>
                <a href="./community" className="list-group-item list-group-item-action"><strong>COMMUNITY</strong></a>
                <a href="./trainings" className="list-group-item list-group-item-action"><strong>TRAININGS</strong></a>
                <a href="./media" className="list-group-item list-group-item-action"><strong>MEDIA</strong></a> 
              </div>
            </div>
        </div>  
      </div>
    </div>
  </div> */}


  
{/* <div className="container-fluid bg-dark py-5">
    <div className="container pt-4">
      <center><img src={logo} className="App-logo" height="100px" width="275px" alt="logo" ></img></center> */}
        
          {/* <div id="about" className="row">
            <div className="col-lg order-lg-2">
              <h4 className="mb-4"><center>Follow Us At:</center></h4>
                <a href="https://www.facebook.com/Justice4Families">
                </a> */}
            
                  {/* <p>Explore the future of JavaScript with a lineup of industry professionals. Discover new techniques to advance your career as a web developer.</p>  */} 
                  
                <div className="col-lg order-3">
                  <h3 className="mb-4"><center>MENU</center></h3>
                  <div className='containermenu'>  
                    <div className="list-group">
                      <a href="./staff" className="list-group-item list-group-item-action list-group-item-black"><strong>STAFF</strong></a>
                      <a href="./partnerships" className="list-group-item list-group-item-action"><strong>PARTNERSHIPS</strong></a>
                      <a href="./institute" className="list-group-item list-group-item-action"><strong>INSTITUTE</strong></a>
                      <a href="./community" className="list-group-item list-group-item-action"><strong>COMMUNITY</strong></a>
                      <a href="./trainings" className="list-group-item list-group-item-action"><strong>TRAININGS</strong></a>
                      <a href="./media" className="list-group-item list-group-item-action"><strong>MEDIA</strong></a> 
                         
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</footer>
</div>
</div>



    )
}

