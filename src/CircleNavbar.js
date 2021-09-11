import React from 'react'
import PartShakeImg from './PartShakeImg'
import PartGathering from './PartGathering'
import PartPlan from './PartPlan'
import PartTwo from './PartTwo'


export default function CircleNavbar() {
    return (
      <div>
        <h1><center>OUR PARTNERS</center></h1>
          <div className='cursive1'><center>“In the end, we will remember not the words of our enemies, but the silence of our friends”</center> ~  Martin Luther King Jr. ~ </div>
          
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
            </div>

          <PartTwo />
            <div scrolldelay="50" className='cursive1'>
              <center>“Perhaps travel cannot prevent bigortry, but by demonstrating that all people cry, laugh, eat, worry and die.</center> 
              <center>It can introduce the idea that if we try to understand each other, we may even become friends.”</center>
              <center>~ Maya Angelou ~ </center>
            </div>
          </div>

        


    )
}
