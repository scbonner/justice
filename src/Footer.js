import React from 'react'
import logo from './logo.png';
import Tip from './Tip'
//import Map from './Map'
import './footer.css'


export default function Footer() {
    return (
// This section is part of the footer which houses protest pic, download button, tooltip 
      <div>
        <br /> 
        <br />
        <br />
        <header className="App-header"> 
          <div className="container-fluid">
          </div>
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
        </header>
        {/* the footer section in black need to make sure is is a sticky footer */}
    <footer>
      <div className="container-fluid bg-dark py-5">
        <div className="container pt-4">
          <center><img src={logo} className="App-logo" height="100px" width="275px" alt="logo" ></img></center>
            <br />
              <div id="about" className="row">
                <div className="col-lg order-lg-2">
                  <h4 className="mb-4"><center>Follow Us At:</center></h4>
                    <a href="https://www.facebook.com/Justice4Families">
                      <i className="fab fa-facebook-f">
                        <span style={{ marginLeft: "10px" }}> Facebook</span>
                      </i>
                    </a>
            
                            <p>Explore the future of JavaScript with a lineup of industry professionals. Discover new techniques to advance your career as a web developer.</p>
                            {/* <span class="st_facebook" st_title="Download Report" st_url="https://www.justice4families.org/download-report-button/download-report/" st_processed="yes"> */}

                            
                            <span text-decoration='none' color='rgb(0, 0, 0)' display='inline-block' cursor='pointer' padding-left='0px' padding-right=
                            '0px' width="16px" className="stButton"></span>
                            <span class="chicklets facebook">&nbsp;</span>
                      </div>
                      {/* This is the first column info */}
                      <div className="col-lg order-lg-1">
                        <h4 className="mb-4"><center>Contact Us At:</center></h4> 
                            <p>2090 Honeywell Avenue</p>
                            <p>Bronx, New York 10460</p>
                            <p>Phone: 917.736.4286</p>
                            <p>Website:justice4families.org</p>
                            {/* <Map /> */}
                            
                      <h6> Need to find out where to link</h6>
                                <center><a href="report"className="btn-footer bg-primary"> DONATE </a></center><br />
                                <center><a href="form" className="btn-footer bg-primary"> CONTACT </a></center> 
                      </div>
                      {/* This is last column info */}
                      <div className="col-lg order-3">
                        <h4 className="mb-4"><center>Menu</center></h4>
                          <div className="list-group">
                            <a href="./staff" className="list-group-item list-group-item-action"><strong>STAFF</strong></a>
                            <a href="./partnerships" className="list-group-item list-group-item-action"><strong>PARTNERSHIPS</strong></a>
                            <a href="./institute" className="list-group-item list-group-item-action"><strong>INSTITUTE</strong></a>
                            <a href="./policy" className="list-group-item list-group-item-action"><strong>POLICY</strong></a>
                            <a href="./trainings" className="list-group-item list-group-item-action"><strong>TRAININGS</strong></a>
                            <a href="./download" className="list-group-item list-group-item-action"><strong>DOWNLOAD REPORT</strong></a>
                        </div>
                      </div>        
                    </div>
                </div>
                </div> 
            </footer>
          </div>




    )
}
