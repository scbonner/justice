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

        <hr />
        <br />
        
          <div className='container'>
            <center><h2>DOWNLOAD REPORT</h2></center>
            <br />
              <p><b>“Families Unlocking Futures: Solutions to the Crisis in Juvenile Justice”</b> offers the first-of-its kind analysis that details how the juvenile justice system does more to feed the nation’s vast prison system than to deter or redirect young people from system involvement; and demonstrates the incredible damage the system causes to families and communities.</p>

              <p>Based on over 1,000 surveys with parents and family members of incarcerated youth and 24 focus groups nationwide, the report (produced by Justice for Families and our research partner the DataCenter) presents a body of data that has never been captured or examined before. It aims to correct misperceptions about system-involved youth and their families; demonstrates the need for families’ active participation in redesigning juvenile justice systems; and uncovers crucial flaws in the system that burden, alienate and exclude families from the treatment of system-involved youth.</p>

              <p>The report details how the rapid growth of the prison system, zero-tolerance policies, and aggressive police tactics, coupled with the decline of social services and public education have wreaked havoc on low-income communities and communities of color. However, the report also puts forth viable, proven solutions and offers a Blueprint for Youth Justice Transformation.
              </p>

              <p>Michelle Alexander, author of <u>The New Jim Crow</u>, had this to say about Families Unlocking Futures:</p>

              <p>“This extraordinary report is a must-read for people of conscience, people who know that young people who make mistakes and struggle in school deserve our care, compassion and concern — not humiliation, prison cells, relentless shame, and all their family supports stripped from them. This comprehensive study examines our youth prison system from the perspective of those who are most impacted — young people and their families. Finally, it demonstrates the power of their collective voice. This report shares their insightful observations as well as jaw-dropping data, revealing a system that is not just broken, but one that must be entirely transformed.”</p>

              <p>In 2012, Justice for Families published a report that captured first-hand accounts of what family members have experienced when a loved one is involved in the system. Families Unlocking Futures: Solutions to the Crisis in Juvenile Justice is based on more than 1,000 comprehensive surveys and two dozen focus groups of families conducted in more than a dozen cities across the country. Low-income families and families of color took the lead in designing research components and conducting research analysis.</p>

              <p>To request a copy: <a href='mailto:info@justiceforfamilies.org'> provide... </a></p>
              <ol>
                <li>Your Full Name</li>
                <li>Email Address</li>
                <li>Zip Code</li>
              </ol>
          </div>
    </div>

        






    )
}
