import * as React from 'react'
// import 'bootstrap/dist/css/bootstrap.css';
//import Trainings1 from './Trainings1'
import TrainingCards from './TrainingCards'
import TrainingsPic from './TrainingsPic'
//import TrainingsVir from './TrainingsVir'




 const Trainings = () => {
  return (
    <div>
      <div className='container'><br />
      <h1>TRAININGS</h1>
      {/* <center> <img src={logo} className="App-logo" alt="logo" ></img></center> */}
        <h3 className='titletraining'>Our Work</h3>
          <p>Justice For Families (J4F) family engagement specialists have worked with foundations, juvenile justice agencies, mental health advocacy groups and numerous other child-serving agencies for over two decades.  Our consultants have over 50+ years experience engaging families and bringing unique insights and perspectives of lived-experiences with their own children.</p> 
          <br />

          <div id="about" className="row">
          <div className="col-lg order-lg-1">
            <p className='services'>Our services include:</p>
              <ol>
                <li>Training for agencies, organizations and families;</li>
                <li>Assessments of family engagement policy & practice;</li>
                <li>Guidance to develop and sustain family advisory councils;</li>
                <li>Guidance to conduct effective family focus groups;</li>
                <li>Guidance to develop and sustain community partnerships;</li>
                <li>Facilitation and guidance for strategic planning sessions; and</li>
                <li>Policy Development relating to family engagement.</li>
              </ol>
          </div>
          </div>

          <p className='services'>Virtural Learning Experience</p>
            
          <p>Virtual Learning Experiences J4F’s virtual learning series is designed for professionals that work in child-serving agencies and organizations, such as judges, probation officers, detention staff, mental health providers, educators, youth advocates, and law enforcement. Participants will come from a variety of educational backgrounds, age groups, racial and ethnic backgrounds and life experiences. Some will be seasoned professionals who have been in the trenches for decades, while others will be at the beginning of their professional journey.</p>

          <p>A brief summary of our most popular sessions are described below. Any materials needed for the completion of sessions will be provided and participants will receive a certificate of completion.</p>
              
          <p>Sessions are typically 2 hours, with 90 minutes of content and 30 minutes for questions and answers. We, also, offer customized workshops and technical assistance relating to family engagement and partnership. The cost to register for each two-hour session is $49.95. If your agency or organization would like to participate as a group, we do offer group discounts.</p>
          <br />

          <p className='textbold'>**To join the Planning & Supervision” series participants must have completed the following**</p>
            <ol>
              <li>Family Engagement: What is it and why is it important? </li>
              <li>The Family Engagement Continuum and Your Practice-Part 1 & 2</li>
              <li>Impact of Trauma on Family Engagement-Part 1, 2 & 3</li>
              <li>Equity, Wealth, Race and Racism in the Justice System-Part 1 & 2</li>
              <li>Adolescent Brain Development and Youth Voice in the Justice System </li>
            </ol>
            <h1>Courses</h1>     
            <TrainingCards />
            <br />
            <hr />   
          
            </div>
            </div>

  )
 }
 
export default Trainings