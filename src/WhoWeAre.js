import React from 'react';
import WhoWeAreTable from './WhoWeAreTable'
import 'bootstrap/dist/css/bootstrap.css';
//import Button from 'bootstrap/dist/css/bootstrap.css'
//import Card from 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import './staff.css'


//setup for board page


export default function WhoWeAre() {
    return (
       
<>

<hr />

{/* first card represents families */}

<h2><strong><center>WHO WE ARE...</center></strong></h2>
<br />
<div className="card">
  <div className="card-header" bg-dark>
 <h5><strong><center> GOALS & STRATEGIES </center></strong></h5>
  </div>
  <div className="card-body form">
    
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
{/* Link listgroupitems to  */}
    <div className="card" width="18rem">
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Leadership Development and Technical Assistance </li>
        <li className="list-group-item">Strategic Partnerships </li>
        <li className="list-group-item">Policy Advocacy </li>
      </ul>
    </div>
   
<br />    

<div className="container">
         {/* <h3>Trainings</h3> */}
            <div className="row">
                <div className="col-4">
                    <div className="card mb-4">
                        <img className="card-img-top img-fluid h-100" src="https://images.pexels.com/photos/7414106/pexels-photo-7414106.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="..."></img>
                            <div className="card-body">
                                <h6 className="card-title"><center>Leadership Development & Technical Assistance</center></h6>
                                  <p className="card-text">To transform justice systems practices driven by interests of youth and families.</p>
                                  <br />
                                {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                            </div>
                    </div>
                    </div>
                    <div className="col-4">
                        <div className="card mb-4">
                            <img className="card-img-top img-fluid h-100" src="https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="..."></img>
                                <div className="card-body">
                                <h6><center>Strategic Partnerships</center></h6>
                                      <p className="card-text">To move resources away from incarceration based failed “tough on crime” policies.</p>
                                      <br />
                                      <br />
                                </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card mb-4">
                            <img className="card-img-top img-fluid h-100" src="https://images.pexels.com/photos/6257110/pexels-photo-6257110.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="..."></img>
                                <div className="card-body">
                                    <h6><center>Policy Advocacy</center></h6>
                                    <p className="card-text">To redirect investments in young  people, their families and communities.</p>
                                    <br />
                                    <br />
                                </div>
                        </div>
                       </div>
                    </div>
                </div>
          </div>
      </div>

</>






    )
}


