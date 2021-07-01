import React from 'react'
import logo from './logo.png';
//import SocialIcons from './SocialIcons'
import './footer.css'


export default function Footer() {
    return (
      

<div>
  <header className="App-header"> 
    <div className="container-fluid">
      </div>
{/* Title above onclick button inside bottom picture */}
        <a href="j4f" className="navbar-brand mr-3"><h3><strong>
          <p><center>Families Unlocking Futures:</center></p>
          <p><center>Solutions to the Crisis in Juvenile Justice</center></p></strong></h3></a>  

            <div>
                  {/* <img src={logo} className="App-logo" alt="logo" ></img> */}
              <button className="button-tertiary bg-success" id="nav-item nav-link active" type="submit">
                Click to Download Report
              </button>
              <br />
              <br />
              <br />
              <br />

            </div> 
  </header>

    <footer className="container-fluid bg-dark py-5">
        <div className="container pt-4">
          <center><img src={logo} className="App-logo" height="100px" width="275px" alt="logo" ></img></center>
          <hr />
          <br />
            <div id="about" className="row">
              <div className="col-lg order-lg-2">
                <h3 className="mb-4">About Full Stack Conf</h3>
                    <p>The beautiful city of Portland, Oregon will be the host city for Full Stack Conf!</p>
                    <p>Explore the future of JavaScript with a lineup of industry professionals. Discover new techniques to advance your career as a web developer.</p>
              </div>
              <div className="col-lg order-lg-1">
                <h4 className="mb-4">Contact Us</h4> 
                    <p>2090 Honeywell Avenue</p>
                    <p>Bronx, New York 10460</p>
                    <p>Phone: 917.736.4286</p>
                    <p>Website:justice4families.org</p>
                    
               <h6> About Company</h6>
                        <a href="report"className="btn-footer bg-primary"> DONATE </a><br />
                        <a href="form" className="btn-footer bg-primary"> SIGN UP</a>
               </div>

               <div className="col-lg order-3">
                 <h3 className="mb-4"><center>MENU</center></h3>
                   <div className="list-group">
                    <a href="staff" className="list-group-item list-group-item-action"><strong>STAFF</strong></a>
                    <a href="partnerships" className="list-group-item list-group-item-action"><strong>PARTNERSHIPS</strong></a>
                    <a href="institute" className="list-group-item list-group-item-action"><strong>INSTITUTE</strong></a>
                    <a href="policy" className="list-group-item list-group-item-action"><strong>POLICY</strong></a>
                    <a href="trainings" className="list-group-item list-group-item-action"><strong>TRAININGS</strong></a>
                    <a href="button-tertiar" className="list-group-item list-group-item-action"><strong>DOWNLOAD REPORT</strong></a>
                </div>
              </div>        
            </div>
        </div> 
    </footer>
</div>



    )
}
