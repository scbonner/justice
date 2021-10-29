import React from 'react'
import WhatWeStandFor from './WhatWeStandFor'
import WhoWeAre from './WhoWeAre'
import Footer from './Footer'
import WWSFJumbo from './WWSFJumbo'
//import FirstPage from './FirstPage'


// import { BrowserRouter, Switch, Route } from "react-router-dom";

function Home() {
    return (
        <div>
        <br />
       
         {/* <Reveal effect="fadeInUp"> */}
         <h1><strong><center>WHO WE ARE...</center></strong></h1>
         {/* <FirstPage /> */}
          <WhatWeStandFor /> 
          <WWSFJumbo />
          <WhoWeAre />
           {/* <FancyRegistration />    */}
          <Footer />
          <br />
          <br />
          <hr />
          </div>
          

    )
}

export default Home

