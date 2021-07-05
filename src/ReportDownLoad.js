

import React from 'react'
import logo from './logo.png'
import ReportForm from './ReportForm'


//Place a background picture in the shape of a polygon
//Render a ReportForm inside file
//use theprotest as the background picture
//Possibly make top a two column reading and if not too large, and form at bottom or separate page


export default function ReportDownLoad() {
    return(
        
        <div>
            <center><img src={logo} className="App-logo" height="100px" width="275px" alt="logo" ></img></center> 
        <div className="container-fluid py-5">
            <div className="container pt-4" id='about-image'>
                {/* <center><img src={logo} className="App-logo" height="100px" width="275px" alt="logo" ></img></center>  */}
                    <hr />
                    <br />
                        <div className="row">
                            <div className="col-lg order-lg-2">
                                <br />
                                    <p>However, the report also puts forth viable, proven solutions and offers a Blueprint for Youth Justice Transformation.</p>
                                    <p> Michelle Alexander, author of <u>The New Jim Crow</u>, had this to say about Families Unlocking Futures:</p>
                                    
                                        <p><i>“This extraordinary report is a must-read for people of conscience, people who know that young people who make mistakes and struggle in school deserve our care, compassion and concern — not humiliation, prison cells, relentless shame, and all their family supports stripped from them. This comprehensive study examines our youth prison system from the perspective of those who are most impacted — young people and their families. Finally, it demonstrates the power of their collective voice. This report shares their insightful observations as well as jaw-dropping data, revealing a system that is not just broken, but one that must be entirely transformed.”</i></p>
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                <ReportForm />
                            </div>

                        {/* First column  */}

                            <div className="col-lg order-lg-1" >
                                <h4 className="mb-4"><center>Report Forward</center></h4>  
                                    <p><i>“Families Unlocking Futures: Solutions to the Crisis in Juvenile Justice” offers first-of-its kind analysis that details how the juvenile justice system does more to feed the nation’s vast prison system than to deter or redirect young people from system involvement; and demonstrates the incredible damage the system causes to families and communities.</i></p>

                                    <p>Based on over 1,000 surveys with parents and family members of incarcerated youth and 24 focus groups nationwide, the report (produced by Justice for Families and our research partner the DataCenter) presents a body of data that has never been captured or examined before.</p>

                                    <p>The report details how the rapid growth of the prison system, zero-tolerance policies, and aggressive police tactics, coupled with the decline of social services and public education have wreaked havoc on low-income communities and communities of color.</p>
                               
                            </div>

                            <div className="col-lg order-3">
                                <br />
                                    <p>It aims to correct misperceptions about system-involved youth and their families; demonstrates the need for families’ active participation in redesigning juvenile justice systems; and uncovers crucial flaws in the system that burden, alienate and exclude families from the treatment of system-involved youth.</p>

                                    <p>In 2012, Justice for Families published a report that captured first-hand accounts of what family members have experienced when a loved one is involved in the system. Families Unlocking Futures: Solutions to the Crisis in Juvenile Justice is based on more than 1,000 comprehensive surveys and two dozen focus groups of families conducted in more than a dozen cities across the country. Low-income families and families of color took the lead in designing research components and conducting research analysis.</p>
                        <br />
                        <br />
                    <hr />
                </div>
             </div>        
           </div>
         </div>
    </div> 
    


    )
}
