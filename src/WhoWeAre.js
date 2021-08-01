import React from 'react';
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

        <h1><strong><center>WHO WE ARE...</center></strong></h1>
        <br />
            <div className="container pt-4">
             <hr />
             <br />
                 <div id="about" className="row">
                    <div className="col-lg order-lg-2">
                         <h4 className="mb-4"><center></center></h4>
                             <p className='cursive'><center>“You dwell in whitened castles with deep and poisoned moats
                    and cannot hear the curses which fill your children's throats.”<br />
                    ~ Maya Angelou ~</center> </p>
                 </div>

              
                     <div className="col-lg order-lg-1" id='lightbulbs'>
                     <br /> 
                     <br />
                        <h4 className="mb-4" id='malcolm'><center>"The mother is the first teacher of the child. The message she gives that child, that child gives to the world."<br />~ Malcolm X ~ </center></h4> <br /> <br /> <br /> <br />
                    </div>

                        <div className="col-lg order-3" id='whippingpost'>
                        <br /> <br />
                            <h4 className="mb-4"><center>"Not everything that is faced can be changed, but nothing can be changed until it is faced."<br /> ~ James Baldwin ~</center></h4>
                        
                            </div>
                        </div>        

                            <div className="card">
                                <div className="card-header" bg-primary>
                                    <h5><strong><center> GOALS & STRATEGIES </center></strong></h5>
                                        <div>
                                            <ul>
                                                <li> <b>A</b>t every stage of the process, families are locked out of decisions that drive their children further along the school-to-prison pipeline. Where families try to participate, they are far too often disrespected, disregarded and blamed for their family member’s involvement in the system. Making matters worse, youth themselves are similarly excluded from the decision-making process and poor families are required to pay burdensome fees, fines and other systemic costs. These systemic flaws not only prevent families from being effective advocates for their children but also reinforce cycles of poverty and racial inequity.</li>
                                                <br />
                                                <li><b>J</b>ustice for Families works to change the power dynamic at each of the critical decision-making points along the school-to-prison pipeline. Together, by acting on behalf of all families, we will redirect the pipeline toward opportunity for all youth.</li>
                                            </ul>
                                        </div>
        
                                        <div className="card-body form">
                                        <br />    
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-4">
                                                        <div className="card mb-4">
                                                            <img className="card-img-top img-fluid h-100" src="https://images.pexels.com/photos/7414106/pexels-photo-7414106.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="..."></img>
                                                                <div className="card-body">
                                                                    <h6 className="card-title"><center>Leadership Development & Technical Assistance</center></h6>
                                                                        <p className="card-text"><b>T</b>o transform justice systems practices driven by interests of youth and families.</p>
                                                                    <br />
                                                                </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-4">
                                                        <div className="card mb-4">
                                                            <img className="card-img-top img-fluid h-100" src="https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="..."></img>
                                                                <div className="card-body">
                                                                    <h6><center>Strategic Partnerships</center></h6>
                                                                        <p className="card-text"><b>T</b>o move resources away from incarceration based failed “tough on crime” policies.</p>
                                                                    <br />
                                                                    <br />
                                                                </div>
                                                             </div>
                                                        </div>
                                                        <div className="col-4">
                                                            <div className="card mb-4">
                                                                <img className="card-img-top img-fluid h-100" src="https://images.pexels.com/photos/6257110/pexels-photo-6257110.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="...">
                                                                </img>
                                                                    <div className="card-body">
                                                                        <h6><center>Policy Advocacy</center></h6>
                                                                            <p className="card-text"><b>T</b>o redirect investments in young  people, their families and communities.</p>
                                                                        <br />
                                                                        <br />  
                                                                    </div>
                                                            </div>
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


