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
       
                <a href="j4f" className="navbar-brand mr-3"><h3><strong>Families Unlocking Futures:
Solutions to the Crisis in Juvenile Justice

</strong></h3></a>  
              
                <div>
                  {/* <img src={logo} className="App-logo" alt="logo" ></img> */}
                    
                      <button className="button-tertiary" id="nav-item nav-link active" type="submit">
                        Click to Download Report
                      </button>
                </div> 
                </header>
    <footer className="container-fluid bg-dark py-5">
        <div className="container pt-4">
        
         <img src={logo} className="App-logo" height="40px" width="275px" alt="logo" ></img>
            <div id="about" className="row">
              <div className="col-lg order-lg-2">
                <h3 className="mb-4">About Full Stack Conf</h3>
                    <p>The beautiful city of Portland, Oregon will be the host city for Full Stack Conf!</p>
                    <p>Explore the future of JavaScript with a lineup of industry professionals. Discover new techniques to advance your career as a web developer.</p>
              </div>
              <div className="col-lg order-lg-1">
                <h3 className="mb-4">Expert Speakers</h3>
                    <p>Our expert speaker lineup was just announced, so don't wait too long before grabbing your tickets!</p>
                    <p>Want to meet the international JavaScript community and share skills with some of the world's top experts, hackers, and makers? Be the first to know what to expect for the future of JavaScript.</p>
                    <p>Full Stack Conf is committed to being inclusive and welcoming for everyone. We look forward to another intensive day of learning and sharing.</p>
               <h6> About Company</h6>
                    <p>But horizontal lines can only be a full pixel high.</p>
                        <a href="report" className="btn-footer"> More Info </a><br />
                        <a href="form" className="btn-footer"> Contact Us</a>
               </div>

               <div className="col-lg order-3">
                 <h3 className="mb-4">What You'll Learn</h3>
                   <div className="list-group">
                    <a href="staff" className="list-group-item list-group-item-action"><strong>STAFF</strong></a>
                    <a href="partnerships" className="list-group-item list-group-item-action"><strong>PARTNERSHIPS</strong></a>
                    <a href="institute" className="list-group-item list-group-item-action"><strong>INSTITUTE</strong></a>
                    <a href="policy" className="list-group-item list-group-item-action"><strong>POLICY</strong></a>
                    <a href="trainings" className="list-group-item list-group-item-action"><strong>TRAININGS</strong></a>
                    <a href="report" className="list-group-item list-group-item-action"><strong>DOWNLOAD REPORT</strong></a>
                </div>
              </div>        
            </div>
        </div> 
    </footer>
</div>



    )
}
