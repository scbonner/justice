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
          <WhatWeStandFor /> 
          <WWSFJumbo />
          <WhoWeAre />
          <WhatWeDo /> 
          <Footer />
          </div>
    )
}

export default Home

