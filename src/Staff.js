import React from 'react'
import './App.js'
import './staff.css'


//setup for board page

export default function Staff() {
    return (

<div container>
<div className="row">
  <div className="column">
    <div className="card">
      <img src="../" alt="Jane" width="100%"></img>
      <div className="container">
        <h2>Jane Doe</h2>
        <p className="title">CEO &amp; Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
    <img src="black-womanwnatural.jpeg" alt="Jane" width="100%"></img>
      <div className="container">
        <h2>Mike Ross</h2>
        <p className="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img src="img3.jpg" alt="John" width="100%"></img>
      <div className="container">
        <h2>John Doe</h2>
        <p className="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>
</div>
       
    )
}
