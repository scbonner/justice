import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'bootstrap/dist/css/bootstrap.css'
import Card from 'bootstrap/dist/css/bootstrap.css'
import './App.css'





function WhatWeDo() {
    return (
       
<>
<br />
<br />

<br />
<hr />

{/* first card represents trainings */}

<h2><strong>WHO WE ARE</strong></h2>
<div className='container'>

<div className="row row-cols-1 row-cols-md-4 g-4">
  <div classNames="col">
    <div className="card h-100">
    <img src='https://images.pexels.com/photos/4546025/pexels-photo-4546025.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' className="card-img-top" alt="..."></img>
      
      <div className="card-body">
        <h5 className="card-title">FAMILIES</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src='https://images.pexels.com/photos/3184434/pexels-photo-3184434.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">PARTNERSHIPS</h5>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div className="card-footer">
      <i className="fas fa-users"></i>
         <small className="text-muted">Last updated 3 mins ago</small> 
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src='https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">POLICY</h5>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div className="card-footer">
    
        <small className="text-muted">Last updated 3 mins ago</small> 
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src='https://images.pexels.com/photos/6257110/pexels-photo-6257110.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">ADVOCACY</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div> 
</div>


{/* <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card> */}
<hr />

<br />
<br />
<br />


</>

    )
}

export default WhatWeDo
