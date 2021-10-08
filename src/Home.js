import React from 'react'
import WhatWeStandFor from './WhatWeStandFor'
import WhoWeAre from './WhoWeAre'
//import WhatWeDo from './WhatWeDo'
 import Footer from './Footer'
 import WWSFJumbo from './WWSFJumbo'
 


// import Partnerships from './Partnerships'
// import Institute from './Institute'
// import Policy from './Policy'
// import Trainings from './Trainings'

// import { BrowserRouter, Switch, Route } from "react-router-dom";

function Home() {
    return (
        <div>
        <br />
       
         {/* <Reveal effect="fadeInUp"> */}
         <h1><strong><center>WHO WE ARE...</center></strong></h1>
          <WhatWeStandFor /> 
          <WWSFJumbo />
          <WhoWeAre />
          {/* <WhatWeDo />  */}
          <Footer />
          <br />
          <br />
          <hr />
          </div>
          

    )
}

export default Home

