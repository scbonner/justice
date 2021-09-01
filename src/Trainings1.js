import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';



export default function Trainings1() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="success" onClick={handleShow}>
          PURPOSE >>
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className='cursive2'>Our Purpose</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <p><strong>J</strong>ustice for Families raises the visibility of meaningful family engagement, and demonstrates  the success and importance of constituent-led organizing strategies.</p></Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>

      
    );
  }
  






// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.css';



// //Traininig file: need to add images and text. 
// //May need to add individual url images in CSS


// export default function Trainings1() {
//   return (
//     <div>
//       <div className='container'>
//       {/* <center> <img src={logo} className="App-logo" alt="logo" ></img></center> */}
//         <h1 className='titletraining'>Our Work</h1>
//           <p>Justice For Families (J4F) family engagement specialists have worked with foundations, juvenile justice agencies, mental health advocacy groups and numerous other child-serving agencies for over two decades.  Our consultants have over 50+ years experience engaging families and bringing unique insights and perspectives of lived-experiences with their own children.</p> 
//           <br />

//           <div id="about" className="row">
//           <div className="col-lg order-lg-1">
//             <p className='services'>Our services include:</p>
//               <ol>
//                 <li>Training for agencies, organizations and families;</li>
//                 <li>Assessments of family engagement policy & practice;</li>
//                 <li>Guidance to develop and sustain family advisory councils;</li>
//                 <li>Guidance to conduct effective family focus groups;</li>
//                 <li>Guidance to develop and sustain community partnerships;</li>
//                 <li>Facilitation and guidance for strategic planning sessions; and</li>
//                 <li>Policy Development relating to family engagement.</li>
//               </ol>
//           </div>
//           </div>

//           <p className='services'>Virtural Learning Experience</p>
            
//           <p>Virtual Learning Experiences J4F’s virtual learning series is designed for professionals that work in child-serving agencies and organizations, such as judges, probation officers, detention staff, mental health providers, educators, youth advocates, and law enforcement. Participants will come from a variety of educational backgrounds, age groups, racial and ethnic backgrounds and life experiences. Some will be seasoned professionals who have been in the trenches for decades, while others will be at the beginning of their professional journey.</p>

//           <p>A brief summary of our most popular sessions are described below. Any materials needed for the completion of sessions will be provided and participants will receive a certificate of completion.</p>
              
//           <p>Sessions are typically 2 hours, with 90 minutes of content and 30 minutes for questions and answers. We, also, offer customized workshops and technical assistance relating to family engagement and partnership. The cost to register for each two-hour session is $49.95. If your agency or organization would like to participate as a group, we do offer group discounts.</p>
//           <br />

//           <p className='textbold'>**To join the Planning & Supervision” series participants must have completed the following**</p>
//             <ol>
//               <li>Family Engagement: What is it and why is it important? </li>
//               <li>The Family Engagement Continuum and Your Practice-Part 1 & 2</li>
//               <li>Impact of Trauma on Family Engagement-Part 1, 2 & 3</li>
//               <li>Equity, Wealth, Race and Racism in the Justice System-Part 1 & 2</li>
//               <li>Adolescent Brain Development and Youth Voice in the Justice System </li>
//             </ol>
//             <br />
//             <hr />   

//     <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"/>
//     <div clasNames="jumbotron">
//       <div className="container">
//         <div className="row">
//           <div className="col-xs-offset-2 col-xs-8">
//             <h1>Hello, world!</h1>
//             <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
//             {/* <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p> */}
//           </div>
//           <div class="col-xs-2">
//             <img class="img-responsive" src="https://cdn.pixabay.com/photo/2017/10/01/18/47/trimaran-2806616_1280.jpg" alt=""></img>
//           </div>
//         </div>
//         </div>
//       </div>
//       <br />
//       <hr />
//          <h3>Trainings</h3>
//             <div className="row">
//                 <div className="col-4">
//                     <div className="card mb-4">
//                         {/* <img className="card-img-top img-fluid h-100" src="@import url(https://fonts.googleapis.com/css?family=Open+Sans);" alt="..."></img> */}
//                             <div className="card-body">
//                                 <h4 className="card-title">Family Engagement: What is it and why is it important?</h4>
//                                 <p className="card-text">While this topic may seem too basic and not needed for most professionals, the content is presented in a distinctive manner meant to help participants make connections between their own families and the families they work with.  Defining family could be as easy as opening up a dictionary and reading the definition.  However, this type of learning doesn’t provide the participant with the opportunity to recognize the many facets of relationship building essential to “genuine and meaningful” engagement and partnership.  This session also provides research-based reasons why family engagements benefits systems, workforce and community safety as well as individual youth and family outcomes. </p>
//                                 <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
//                             </div>
            
//             </div>
//                     </div>

                    
//                     <div className="col-4">
//                         <div className="card mb-4">
//                             {/* <img className="card-img-top img-fluid h-100" src="https://images.pexels.com/photos/4546025/pexels-photo-4546025.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="...p"></img> */}
//                                 <div className="card-body">
//                                     <h4 className="card-title">The Family Engagement Continuum and Your Practice-Part 1 & 2</h4>
//                                     <p className="card-text">To achieve “genuine and meaningful” engagement and partnership with families, it is important to understand the big picture. Many professionals that work in child-serving agencies believe they engage families but there is an important difference between interacting, engaging and partnership. Participants will hear from families that have engaged and partnered with a juvenile justice agency and how that relationship helped families and ultimately, helped the agency achieve long sought-after reforms. 
//                                     </p>
//                                 </div>
//                                 </div>
//                     </div>


//                     <div className="col-4">
//                         <div className="card mb-4">
//                             {/* <img className="card-img-top img-fluid h-100" src="https://images.pexels.com/photos/4546025/pexels-photo-4546025.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="..."></img> */}
//                                 <div className="card-body">
//                                     <h4 className="card-title">Impact of Trauma on Family Engagement-Part 1, 2 & 3</h4>
//                                     <p className="card-text">Trauma can impact families, young people and staff. It also can be an invisible barrier that prevents “genuine and meaningful” engagement and partnership and healthy work environments. The sessions on trauma will give participants a comprehensive look at the different types of trauma, the manifestations of trauma in families and young people, how trauma may impact staff, and self-care strategies for dealing with their trauma and strategies they can share with young people and their families. The three-part series combines multiple learning styles with first-hand accounts that often resonate deeply with participants. Prior participants have described these sessions and the impact it had on their lives, both as professionals and individuals, as “complete personal transformations” and “life-changing perspectives.”   
// </p>
//                                     {/* <p className="card-text"><small Name="text-muted">Last updated 3 mins ago</small></p> */}
//                                 </div>
                        
//                                 </div>
//                     </div>
//                     <div className="col-4">
//                         <div className="card mb-4">
//                         {/* <img className="card-img-top img-fluid h-100" src="https://images.pexels.com/photos/4546025/pexels-photo-4546025.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="..."></img> */}
//                                 <div className="card-body">
//                                     <h4 className="card-title">Equity, Wealth, Race and Racism in the Justice System-Part 1 & 2</h4>
//                                     <p className="card-text">Of all the challenges and dilemmas that folks like us might come together to discuss and debate, there is none as shamefully defining of our nation’s justice systems, nor as seemingly resistant to change, as the continued and, in many places, growing racial disparities.  We work in a system that—like so many human enterprises—suffers from numerous shortcomings.  The persistence of these problems, especially our dogged adherence to policies and practices that have proven ineffective and costly, or that have been discredited by research, or that have been exposed as routinely abusive, is difficult to understand without the lens of racial equity.</p>
//                                     <p>To truly eliminate racial and ethnical disparities, all staff within an agency or organization need to understand the history of racism, implicit and explicit bias, and the impact racial and ethnic disparities have when trying to engage families and young people. </p>

//                                     <p className="card-text"><small Name="text-muted">Last updated 3 mins ago</small></p>
//                                 </div>
//                             </div>
//                             </div>


//                             <div className="col-4">
//                         <div className="card mb-4">
//                         {/* <img className="card-img-top img-fluid h-100" src="https://images.pexels.com/photos/4546025/pexels-photo-4546025.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="..."></img> */}
//                                 <div className="card-body">
//                                     <h4 className="card-title">Adolescent Brain Development and Youth Voice in the Justice System </h4>
//                                     <p className="card-text">Many agencies and organizations have incorporated trainings on adolescent brain development however, it can be hard to bring the science into everyday practices and policies that actually work.  This session helps participants see how what we know about adolescent brain from research looks when we see it in the young people and how what we do, say or even believe can affect the outcome.  The content provides practical tools and strategies for everyone that works with youth and their families.  Youth development and family engagement are linked and understanding that link provides professionals with an innovative strategy to successfully engage and partner with families.</p>
                                    
//                                 </div>
                        
//                                 </div>
//                     </div>


//                     <div className="col-4">
//                         <div className="card mb-4">
//                         {/* <img className="card-img-top img-fluid h-100" src="https://images.pexels.com/photos/4546025/pexels-photo-4546025.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="..."></img> */}
//                                 <div className="card-body">
//                                     <h4 className="card-title">Developing a Vision & Setting Broad Goals for Improved Family Engagement in your System or Organization </h4>
//                                     <p className="card-text">Participants that have attended all J4F virtual learning experiences will have developed a common understanding and language relating to trauma, race, ethnicity, inequality, adolescent brain development and how each of these areas relates to “genuine and meaningful” family engagement and partnership. Now agencies and organizations are ready to develop a vision and broad goals for how family engagement can be successfully integrated into all aspects of the system or organization through new practices and policies.  During these sessions, trainers will lead the group in discussions designed to help them think outside the box to develop tools, strategies and policies that work for their particular organization/agency or improve upon existing ones.  Here are a few examples of the questions we discuss:
//                                     </p>
//                                     <ol>
//                                       <li>
//                                       What are the elements for a meaningful vision and mission statement? 
//                                       </li>
//                                       <li>
//                                       How to work with families to get their ideas for the vision and mission? 
//                                       </li>
//                                       <li>
//                                       What are key areas where goals are needed?
//                                       </li>
//                                       <li>
//                                     	Do we have the necessary structures in place to support the goals? 
//                                       </li>
//                                     </ol>
//                                     <p> This session is the first step in strategic planning and can be conducted in multiple ways. Smaller groups (20 or less) will join as one group.  Larger groups have divided their whole organization into smaller groups such as probation, detention staff or youth advocates.   If you have a larger organization or agency, breaking into smaller groups (such as departments) gives participants a chance to explore ideas in depth and focus on a greater details.  In addition to this session, trainers can set up technical assistance webinars/calls to help guide your agency/organization through the process.  </p>
//                                 </div>
                        
//                                 </div>
//                     </div>


//                     <div className="col-4">
//                         <div className="card mb-4">
//                                 <div className="card-body">
//                                     <h4 className="card-title">Writing & Achieving Measurable Goals </h4>
//                                     <p className="card-text">Once systems/organizations access their current family engagement work, identify gaps and brainstorm solutions, this second strategic planning session helps them articulate a full plan with goals, timelines and leadership. In addition to this session, trainers can set up technical assistance webinars/calls to help guide your agency/organization through the process.</p>
//                                     <p className="card-text"><small Name="text-muted">Last updated 3 mins ago</small></p>
//                                 </div>
//                             </div>
//                             </div>


//                             <div className="col-4">
//                         <div className="card mb-4">
//                                 <div className="card-body">
//                                     <h4 className="card-title">Maintaining a Family-Engagement Focused Workforce </h4>
//                                     <p className="card-text">Now that your system/organization has a plan and has decided who will be responsible, it’s time to implement your plan.  This session is designed to help groups assess current professional development needs, develop an ongoing professional development plan which will include family voice and input, identifying staff with leadership potential and nurturing their leadership and embrace family leaders as part of your ongoing approach to development.</p>
//                                     <p className="card-text"><small Name="text-muted">Last updated 3 mins ago</small></p>
//                                 </div>
                        
//                                 </div>
//                     </div>


//                     <div className="col-4">
//                         <div className="card mb-4">
//                                 <div className="card-body">
//                                     <h4 className="card-title">Reflective Supervision</h4>
//                                     <p className="card-text">Your plan will only be as successful as the people that carry it out.  New plans often bring out the resistance of staff to something new.  Not all staff will be resistant but we have found it is quiet common.  This session is designed to help supervisors understand and embrace the values and behaviors associated with effective and productive family engagement and structure their supervisory practice to mentor, coach and lead the change among all staff.</p>
//                                     <p className="card-text"><small Name="text-muted">Last updated 3 mins ago</small></p>
//                                 </div>
                        
//                                 </div>
//                     </div>    


//                     <div className="col-4">
//                         <div className="card mb-4">
//                                 <div className="card-body">
//                                     <h4 className="card-title">Partnering with the Community to Achieve Goals </h4>
//                                     <p className="card-text">Families often distrust systems and they often have had experiences that create that distrust.  The experience may not even have occurred in your system or organization.  This distrust comes back to the long legacy of racial and ethnic disparities built into organizations and systems. Once participants attend Sessions 1-9 they will have a greater understanding of where that distrust comes from, accept it and then ideally want to strive to find solutions that dissolve the existing barriers. </p>  

//                                     <p>Partnering with family-centered organizations has proven to be a successful strategy.  This session is designed to help agencies/organizations understand the common characteristics of such groups and develop strategies to build solid relationships with the groups.</p>
//                                 </div>
                        
//                                 </div>
//                     </div>      
//     </div>
// </div>

// <div class="card p-3">
//     <blockquote class="blockquote mb-0 card-body">
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
//       <footer class="blockquote-footer">
//         <small class="text-muted">
//           Someone famous in <cite title="Source Title">Source Title</cite>
//         </small>
//       </footer>
//     </blockquote>
//   </div>

// <div class="card-columns">
//   <div class="card">
//     <img class="card-img-top" src="..." alt="..."></img>
//     <div class="card-body">
//       <h5 class="card-title">Card title that wraps to a new line</h5>
//       <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//     </div>
//   </div>
//   <div class="card p-3">
//     <blockquote class="blockquote mb-0 card-body">
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
//       <footer class="blockquote-footer">
//         <small class="text-muted">
//           Someone famous in <cite title="Source Title">Source Title</cite>
//         </small>
//       </footer>
//     </blockquote>
//   </div>
//   <div class="card">
//     <img class="card-img-top" src="..." alt="..."></img>
//     <div class="card-body">
//       <h5 class="card-title">Card title</h5>
//       <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
//       <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//     </div>
//   </div>
//   <div class="card bg-primary text-white text-center p-3">
//     <blockquote class="blockquote mb-0">
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
//       <footer class="blockquote-footer">
//         <small>
//           Someone famous in <cite title="Source Title">Source Title</cite>
//         </small>
//       </footer>
//     </blockquote>
//   </div>
//   <div class="card text-center">
//     <div class="card-body">
//       <h5 class="card-title">Card title</h5>
//       <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
//       <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//     </div>
//   </div>
//   <div class="card">
//     <img class="card-img" src="..." alt="..."></img>
//   </div>
//   <div class="card p-3 text-right">
//     <blockquote class="blockquote mb-0">
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
//       <footer class="blockquote-footer">
//         <small class="text-muted">
//           Someone famous in <cite title="Source Title">Source Title</cite>
//         </small>
//       </footer>
//     </blockquote>
//   </div>
//   <div class="card">
//     <div class="card-body">
//       <h5 class="card-title">Card title</h5>
//       <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
//       <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//     </div>
//   </div>
// </div>



//         <h1><center>TRAININGS</center></h1>
//         <div className="row row-flex">
//           <div className="col-md-4 col-sm-6 col-xs-12">
//             <div className="content colour-7">
//             <br />
//               <h5>Family Engagement: What is it and why is it important? </h5>
//               <br />
//               {/* <p>This one has a bit longer content</p> */}
//             {/* </div>
//           </div>
//           <div className="col-md-4 col-sm-6 col-xs-12">
//             <div className="content colour-8">
//             <br />
//               <h5>Maintaining a Family-Engagement Focused Workforce </h5>
//               <br />
//             </div>
//           </div>
//           <div className="col-md-4 col-sm-6 col-xs-12">
//             <div className="content colour-9">
//             <br />
//               <h5>The Family Engagement Continuum and Your Practice-Part 1 & 2</h5>
//               <br />
//             </div>
//           </div>

//           <div className="col-md-4 col-sm-6 col-xs-12">
//             <div className="content colour-10">
//             <br />
//               <h5>Impact of Trauma on Family Engagement-Part 1, 2 & 3</h5>
//             <br />
//             </div>
//           </div>
//           <div className="col-md-4 col-sm-6 col-xs-12">
//             <div className="content colour-11">
//               <h5>Developing a Vision & Setting Broad Goals for Improved Family Engagement in your System or Organization </h5>
//             </div>
//           </div>
//           <div className="col-md-4 col-sm-6 col-xs-12">
//             <div className="content colour-12">
//             <br />
//               <h5>Equity, Wealth, Race and Racism in the Justice System-Part 1 & 2</h5>
//               <br />
//             </div>
//           </div> 
//           <div className="col-md-4 col-sm-6 col-xs-12">
//             <div className="content colour-13">
//             <br />
//               <h5>Adolescent Brain Development and Youth Voice in the Justice System </h5>
//             <br />
              
//             </div>
//           </div>

//           <div className="col-md-4 col-sm-6 col-xs-12">
//             <div className="content colour-14">
//             <br />
//               <h5>Writing & Achieving Measurable Goals </h5>
//               <br />
//             </div>
//           </div>
//           <div className="col-md-4 col-sm-6 col-xs-12">
//             <div className="content colour-15">
//             <br />
//               <h5>Reflective Supervision </h5>
//               <br />
//               <br />
//             </div>
//           </div>
//           <div className="col-md-4 col-sm-6 col-xs-12">
//             <div className="content colour-16">
//             <br />
//               <h5>Partnering with the Community to Achieve Goals </h5>
//               <br />
//             </div>
//           </div> 
//           <div className="col-md-4 col-sm-6 col-xs-12">
//             {/* <div className="content colour-16"> */}
          
   
// {/* 
//    <div className="container">
//    <h3>Trainings</h3>
//       <div className="row">
//           <div className="col-4">
//               <div className="card mb-4">
//                   <img className="card-img-top img-fluid h-100" src="https://images.pexels.com/photos/4546025/pexels-photo-4546025.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="..."></img>
//                       <div className="card-body">
//                           <h4 className="card-title">1 Card title</h4>
//                           <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                           <p className="card-text"><small className="text-muted"></small></p>
//                       </div>
      
//       </div>
//               </div>
//               <div className="col-4">
//                   <div className="card mb-4">
//                       <img className="card-img-top img-fluid h-100" src="https://images.pexels.com/photos/4546025/pexels-photo-4546025.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="...p"></img>
//                           <div className="card-body">
//                               <h4 className="card-title">2 Card title</h4>
//                               <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                               <p className="card-text"><small Name="text-muted"></small></p>
//                           </div>
      

//                           </div>
//               </div>
//               <div className="col-4">
//                   <div className="card mb-4">
//                       <img className="card-img-top img-fluid h-100" src="https://images.pexels.com/photos/4546025/pexels-photo-4546025.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="..."></img>
//                           <div className="card-body">
//                               <h4 className="card-title">2 Card title</h4>
//                               <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                               <p className="card-text"><small Name="text-muted"></small></p>
//                           </div>
                  
//                           </div>
//               </div>
//               <div className="col-4">
//                   <div className="card mb-4">
//                   <img className="card-img-top img-fluid h-100" src="https://images.pexels.com/photos/4546025/pexels-photo-4546025.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="..."></img>
//                           <div className="card-body">
//                               <h4 className="card-title">2 Card title</h4>
//                               <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                               <p className="card-text"><small Name="text-muted"></small></p>
//                           </div>
//                       </div>
//                       </div>


//                       <div className="col-4">
//                   <div className="card mb-4">
//                   <img className="card-img-top img-fluid h-100" src="https://images.pexels.com/photos/4546025/pexels-photo-4546025.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="..."></img>
//                           <div className="card-body">
//                               <h4 className="card-title">2 Card title</h4>
//                               <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                               <p className="card-text"><small Name="text-muted"></small></p>
//                           </div>
                  
//                           </div>
//               </div>


//               <div className="col-4">
//                   <div className="card mb-4">
//                   <img className="card-img-top img-fluid h-100" src="https://images.pexels.com/photos/4546025/pexels-photo-4546025.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="..."></img>
//                           <div className="card-body">
//                               <h4 className="card-title">2 Card title</h4>
//                               <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                               <p className="card-text"><small Name="text-muted"></small></p>
//                           </div>
                  
//                           </div>
//               </div>
//               <div className="col-4">
//                   <div className="card mb-4">
//                   <img className="card-img-top img-fluid h-100" src="https://images.pexels.com/photos/4546025/pexels-photo-4546025.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="..."></img>
//                           <div className="card-body">
//                               <h4 className="card-title">2 Card title</h4>
//                               <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                               <p className="card-text"><small Name="text-muted"></small></p>
//                           </div>
//                       </div>
//                       </div>


//                       <div className="col-4">
//                   <div className="card mb-4">
//                   <img className="card-img-top img-fluid h-100" src="https://images.pexels.com/photos/4546025/pexels-photo-4546025.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="..."></img>
//                           <div className="card-body">
//                               <h4 className="card-title">2 Card title</h4>
//                               <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                               <p className="card-text"><small Name="text-muted"></small></p>
//                           </div>
                  
//                           </div>
//               </div>


//               <div className="col-4">
//                   <div className="card mb-4">
//                   <img className="card-img-top img-fluid h-100" src="https://images.pexels.com/photos/4546025/pexels-photo-4546025.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="..."></img>
//                           <div className="card-body">
//                               <h4 className="card-title">2 Card title</h4>
//                               <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                               <p className="card-text"><small Name="text-muted"></small></p>
//                           </div>
                  
//                           </div>
//               </div>


//               <div className="col-4">
//                   <div className="card mb-4">
//                   <img className="card-img-top img-fluid h-100" src="https://images.pexels.com/photos/4546025/pexels-photo-4546025.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="..."></img>
//                           <div className="card-body">
//                               <h4 className="card-title">2 Card title</h4>
//                               <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                               <p className="card-text"><small Name="text-muted"></small></p>
//                           </div>
                  
//                           </div>
//               </div> */}

 
