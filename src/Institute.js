import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './institute.css'
import './App.css'
import WhatwedoJumIn from './WhatwedoJumIn'
import Memory from './Memory';


export default function Institute() {
  return (

    <div> 
    <br />
    <WhatwedoJumIn />

      <section className="about-section" id="section-values">
      <br />
        <h2><center>HOW WE WORK</center></h2>       
          <h4><center>Our community partners guide us and our values drive us.</center></h4>
      </section>

      <div className='container'>
        <p>In 2012, J4F established the Family Leadership Institute (FLI). The Institute is a high impact leadership development and skill-building program that uses training, coaching and support. The Institute provides deeply impacted people with a unique opportunity to connect with others that share their determination and experiences; hear about victories, defeats and the lessons learned from those efforts; brainstorm ideas about their local work; share valuable connections and resources; and build strong peer-to-peer relationships that are relied upon for support, ideas and technical assistance.  J4F hosts the Institute at no cost to participants, several times each year, in different states.</p>

        <p>The J4F Family Leadership Network is comprised of over 300 families in 45 states!  The experience they coalesce around at J4F is one that has been deeply traumatic for them and for their families and one that is often ongoing when they begin to engage in leadership activities. Our work and activities are designed with this in mind and are implemented to reflect J4F's organizational commitment to racial, economic and gender justice and healing.</p>

        <p>Since 2012, 300 impacted individuals have attended the Institute. Over 90% of participants have returned to their communities to challenge oppressive systems and change policy, practice and the entrenched culture that underpins the current power structure through local grassroots organizations or as individual activists in places where there is no organizational support.</p>
        </div>


        <div className='container'>
          <ListGroup horizontal>
            <ListGroupItem><h5 id='bold'>INTEGRITY</h5>
              <p className="card-text">We hold ourselves to a high standard. We are committed to being fair, objective, and proactively transparent in our decisions and behaviors. We honor our commitments and doing the right thing, even when no one is looking.</p>
            </ListGroupItem>
            </ListGroup>
          </div><br />

              <div className='container'>
          <ListGroup horizontal>
            <ListGroupItem> <h5 id='bold'>INTERCONNECTION</h5>
              <p className="card-text">Our liberty is bound together. No person, community, or ecosystem exists in isolation, which means we need each other, and we need to learn from each other. It also means the safety and wellbeing of people are inextricably linked to the safety and wellbeing of our natural world.</p>
            </ListGroupItem>


            <ListGroupItem ><h5 id='bold'>GROWTH MINDSET</h5>
              <p className="card-text">Growth Mindset - We are constantly evaluating, listening, correcting, and innovating. We do not fail when we change course. Growth is an indicator of health and aliveness. We fail when we are unwilling to change.
              </p>
            </ListGroupItem>

            <ListGroupItem>  <h5 id='bold'>SYSTEMIC JUSTICE</h5>
              <p className="card-text">Everyone deserves the safety and opportunity to reach their full potential. In service to our mission, we call out and address structural violence and oppression within and outside of our organization.</p>
            </ListGroupItem>
          </ListGroup><br />


          <ListGroup horizontal="lg">
            <ListGroupItem><h5 id='bold'>GRIT</h5>
              <p className="card-text">We do not see challenges and setbacks as barriers to success, but as invitations to think creatively and push forward with courage and resolution.</p>
            </ListGroupItem>

            <ListGroupItem> <h5 id='bold'>ACTIVE HOPE</h5>
              <p className="card-text">To build the world we need, we must choose to see a better way beyond the current reality, believe that a better way is possible, and commit to creating it.</p>
            </ListGroupItem>

            <ListGroupItem>  <h5 id='bold'>LOCAL EXPERTISE</h5>
              <p className="card-text">The most effective solutions to violence and exploitation will be crafted by a diverse and collaborative community, with those most affected by injustice at the head of the table.</p>
            </ListGroupItem>
          </ListGroup>
            </div>
          <br />
  
            <Memory />
</div>
 
   
  
  );
}
