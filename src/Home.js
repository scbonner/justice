import React from 'react'
import WhatWeStandFor from './WhatWeStandFor'
import WhoWeAre from './WhoWeAre'
import Footer from './Footer'
import WWSFJumbo from './WWSFJumbo'



function Home() {
    return (
        <div>
            <br />
                <h1><strong><center>WHO WE ARE...</center></strong></h1>
                    <WhatWeStandFor /> 
                    <WWSFJumbo />
                    <WhoWeAre />
                    <Footer />
            <br />
            <br />
            <hr />
        </div>
          

    )
}

export default Home

