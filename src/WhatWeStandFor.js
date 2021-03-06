import React from 'react'
import HomeMission from './HomeMission'
import HomePurpose from './HomePurpose'
import HomeVision from './HomeVision'
import HomeValues from './HomeValues'
import './App.css'



export default function WhatWeStandFor() {
    return ( 
        <div>
            <div id="card mb-3">
                <div className="card-body">
                    <div id='container' className='protest'>
                        <div className="row">
                            <div className="column">
                                <div className="flip-box">
                                    <div className="flip-box-inner">
                                        <div className="flip-box-front">
                                        <img src=' https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' className="card-img-top" alt="..."></img>
                                            <h2>MISSION>></h2>
                                        </div>
            {/* Backside of card and button for modal */}
                                    <div className="flip-box-back">
                                        <br />
                                        <br />
                                             <HomeMission />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="column">
                        <div className="flip-box">
                            <div className="flip-box-inner">
                                <div className="flip-box-front">
                                    <img src='https://images.pexels.com/photos/5108415/pexels-photo-5108415.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' className="card-img-top" alt="..."></img> 
                                        <h2> PURPOSE>></h2>
                                </div>
                                    <div className="flip-box-back">
                                        <br />
                                        <br />
                                            <HomePurpose /> 
                                    </div>
                             </div>
                        </div>
                    </div>

                    <div className="column">
                        <div className="flip-box">
                             <div className="flip-box-inner">
                                <div className="flip-box-front">
                                    <img src='https://images.pexels.com/photos/2369217/pexels-photo-2369217.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' className="card-img-top" alt="..."></img> 
                                         <h2> VISION>></h2>
                                 </div>
                                    <div className="flip-box-back">
                                        <br />
                                        <br />
                                            <HomeVision /> 
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="column">
                            <div className="flip-box">
                                <div className="flip-box-inner">
                                     <div className="flip-box-front">
                                        <img src='https://images.pexels.com/photos/6698318/pexels-photo-6698318.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=140' className="card-img-top" alt="..."></img>
                                             <h2> VALUES>></h2>
                                     </div>
                                        <div className="flip-box-back">
                                            <br />
                                            <br />
                                                <HomeValues /> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                            <p className='cursive'><center>"There is no greater agony than bearing an untold story inside you."</center></p> 
                            <p className='cursive'><center>~ Maya Angelou ~</center></p>
                        <br />
                    <div>
                </div>
            </div>
        </div>
    </div>
</div>
       
    
    )
}
