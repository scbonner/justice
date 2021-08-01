import React from 'react'
import WhatWeStandFor from './WhatWeStandFor'
import WhoWeAre from './WhoWeAre'
import WhatWeDo from './WhatWeDo'
 import Footer from './Footer'
 import WWSFJumbo from './WWSFJumbo'
// import Staff from './Staff'
// import Partnerships from './Partnerships'
// import Institute from './Institute'
// import Policy from './Policy'
// import Trainings from './Trainings'

// import { BrowserRouter, Switch, Route } from "react-router-dom";

function Home() {
    return (
        <div>

<WWSFJumbo />
      <WhatWeStandFor /> 
    <WhoWeAre />
    <WhatWeDo /> 
    <Footer />




     {/* <BrowserRouter>
       <NavBar /> */}
      {/* <div className="container mt-2" style={{ marginTop: 40 }}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/staff">
            <Staff />
          </Route>
          <Route path="/partnerships">
            <Partnerships />
          </Route>
          <Route path="/institute">
            <Institute />
          </Route>
          <Route path="/policy">
            <Policy />
          </Route>
          <Route path="/trainings">
            <Trainings />
          </Route>
        </Switch>
      </div>
    </BrowserRouter> */} 

        </div>
    )
}

export default Home
