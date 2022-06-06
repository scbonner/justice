import React from 'react'
import logo from './logo.png';
import Tip from './Tip'
// import './Footer.css'
// import { Fortawesome } from '@fortawesome/free-solid-svg-icons'


export default function Footer() {
  return (
// This section is part of the footer which houses protest pic, download button, tooltip 
    <div>
      <br /> 
        <header className="App-header"> 
          <div className="container-fluid">
            <h3><center>Families Unlocking Futures:</center></h3>
            <h3><center>Solutions to the Crisis in Juvenile Justice...  <Tip /></center></h3>
              <div className='emailcontact'>
                <center>
                  <button>
      {/* ***** double check line 32 security  line 21 considered a security risk*/}
                  {/* <a href="mailto:info@justiceforfamilies.org" target="_blank" rel="noopener"> Request copy of report.</a>  */}
                  </button>
                </center>
                <br />
              </div> 
          </div>
        </header>
       
    <center><img src={logo} className="App-logo" alt="logo" ></img>
      <div className="footer">
        <hr />
          <h3>CONTACT US AT:</h3>
            <div id='containerp' />
              <p>2090 Honeywell Avenue</p>
              <p>Bronx, New York 10460</p>
              <p>Phone: (917) 736-4286</p>
              <p>Fax: (443) 773-5201</p>
                <a href='mailto:info@justiceforfamilies.org'>Reach us at...</a>
      </div>
        <div>
          <div role='navigation' className='block' id='block-menu menu-social-links'>
                <i className="fa fa-utensils">
                <a href='https://www.justice4families.org' id='menu-item-organization' className="menu_link">J4F Organization</a></i>
                <i className="fa fa-utensils"></i>
                  <a href='https://www.facebook.com/Justice4Families' id='menu-item-FaHeart' className="menu_link">J4F Facebook</a><i className="fa-brands fa-apple"></i>
                  <a href='https://twitter.com/justice4fams' id='menu-item-twitter' className='menu_link'>J4F Twitter</a>
                  <a href=' https://www.youtube.com/user/Justice4fams' id='menu-item-youtube' className='menu_link'>J4F YouTube</a>
          </div>
        </div>
      <div className="footer-content">Copyright ©{new Date().getFullYear()} PeacockBlu</div>
    </center>
  </div>

    )
}