import React from 'react'
//import '../Logo/index'
import { Link } from 'react-router-dom'
import { Button } from 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.css';
import './jumbotron.css'




function Jumbotron() {
    return (
      
      
     
      
      <div className="jumbotron bg-cover">
      <div className='container'>
        <div className="jumbotron jumbotron-fluid bg-white">
        {/* <div class="jumbotron jumbotron-fluid bg-dark"> */}
          <div className='container'>
            <div className="container"> 
              <div className="row">
                  <div className="col-lg-6">
                  <img src="https://www.justice4families.org/wp-content/themes/j4f/images/logo.png" alt="Justice For Families"></img>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                    <h5 className="display-4" ml='20px'><center>MISSION</center></h5>
                    
                      <p className="lead">The mission at Justice for Families is to stop the youth incarceration epidemic while advocating for investment in youth and their families.</p>
                      <hr className="my-4" />
                     
                        {/* <center><a className="btn btn-primary btn-lg" href="j4f" role="button">
                          Learn more
                        </a></center> */}

              </div>
              <Link to={'/navbar/ourteam'}>
                       <Button > View Profile </Button>
                     </Link>
      <div className="col-lg-6">
<br />
<br />
<br />
<br />
        <div className='container'>
          <div className='container'>
              <div className='container'>
                <hr />
                <h5 className="display-8"><center>VISION</center></h5>
                  <p className="lead">To stop the youth incarceration epidemic while advocate for investment in youth and their families.</p>
                    <hr className="my-8" />
                    <h5 className="display-8"><center>PURPOSE</center></h5>
                  <p>
                    It uses utility classes for typography and spacing to space
                    content out within the larger container.
                  </p>
                  <hr />
              </div>
             </div>
            </div>
           </div>
          </div> 
         </div>   
        </div>
       </div>
     </div>
</div>





    )
}

export default Jumbotron

