import React from 'react'
import PartShakeImg from './PartShakeImg'
import PartGathering from './PartGathering'
import PartPlan from './PartPlan'


// import React, { Component } from 'react';



export default function CircleNavbar() {
    return (
      <div>
        <div className='cursive1'>“In the end, we will remember not the words of our enemies, but the silence of our friends” ~  Martin Luther King Jr. ~ </div>

       
        {/* <a>https://images.pexels.com/photos/814544/pexels-photo-814544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940</a> */}

          <h1><center>OUR PARTNERS</center></h1>
          <PartShakeImg />
            <div className="flex-container" >
            <div className="flex-item flex-item-1"> <a href="https://www.burnsinstitute.org" className="circle-text">Burns Institute</a></div>
            <div className="flex-item flex-item-2"><a href="http://www.njjn.org" className="circle-text">NJJN</a></div>
            <div className="flex-item flex-item-3"> <a href="https://forwardtogether.org/programs/strong-families-network" className="circle-text">Strong Families Network </a></div>
            <div class="flex-item flex-item-4"> <a href="http://dignityinschools.org/about-us" className="circle-text">Dignity In Schools</a></div>
            </div>
            <PartGathering />
            <div className="flex-container">
            <div className="flex-item flex-item-1"> <a href="https://www.communityalternatives.org" className="circle-text">Community Alternatives</a></div>
            <div className="flex-item flex-item-2"><a href="https://www.cc-fy.org" className="circle-text">Community Connections For Youth</a></div>
            <div className="flex-item flex-item-3"><a href="https://fflic.org" className="circle-text">FFLIC</a></div>
            <div className="flex-item flex-item-4">  <a href="https://www.youthjusticela.org" className="circle-text">Youth Justice Coalition</a></div>
            </div>
            <PartPlan />
            <div className="flex-container">
            <div className="flex-item flex-item-1"> <a href="https://www.spirithouse-nc.org" className="circle-text">Spirit House</a></div>
            <div className="flex-item flex-item-2"> <a href="https://parentsanonymous.org" className="circle-text">Parents Anonymous</a></div>
            <div className="flex-item flex-item-3"> <a href="http://njfamilyalliance.org" className="circle-text">New Jersey Alliance of Family Support Organizations</a></div>


  {/* <div class="flex-item flex-item-4">  <a href="https://www.youthjusticela.org" className="circle-text">Youth Justice Coalition
                </a></div> */}
</div>
<div scrolldelay="50" className='cursive1'>“Perhaps travel cannot prevent bigortry, but by demonstrating that all people cry, laugh, eat, worry and die. It can introduce the idea that if we try to understand each other, we may even become friends.” ~ Maya Angelou ~</div>


{/* <p className='cursive'><center>“Perhaps travel cannot prevent bigortry, but by demonstrating that all people cry, laugh, eat, worry and die. It can introduce the idea that if we try to understand each other, we may even become friends.”
                    ~ Maya Angelou ~</center> </p> */}
</div>

        


    )
}
