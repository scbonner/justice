import React from 'react'
import Board from './blondelady.jpeg'



export default function Board() {
    return (

<div container>
<div className="row">
  <div className="column">
    <div className="card">
    {/* <img src={BoardImages}></img> */}

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
    <div className="card"> height={100}
    <img src={blondlady} alt={""}/>

    {/* <img src={blondelady} alt="Jane" width={100}></img> */}
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


            // <!-- speakers -->
            // <h1 id="speakers" class="display-4 text-center my-5 text-muted">Speakers</h1>
            // <div class="row">
            //   <div class="col-md-6 col-lg-4">
            //     <div class="card mb-3">
            //       <img class="card-img-top" src="img/vivianne.png" alt="Vivianne">
            //       <div class="card-body">
            //         <h4 class="card-title">Vivianne McVue</h4>
            //         <p class="card-text">Vivianne is a web developer and teacher who is passionate about building scalable, data-driven web apps, especially ones that address old problems with new tech!</p>
            //       </div>
            //     </div>          
            //   </div>
      
            //   <div class="col-md-6 col-lg-4">
            //     <div class="card mb-3">
            //       <img class="card-img-top" src="img/nodestradamus.png" alt="NodeStradamus">
            //       <div class="card-body">
            //         <h4 class="card-title">NodeStradamus</h4>
            //         <p class="card-text">"NodeStra" is a software engineer and philosopher trying to leave the world better than he found it. He codes for non-profits, eCommerce, and large-scale web apps.</p>
            //       </div>
            //     </div>            
            //   </div>
      
            //   <div class="col-md-6 col-lg-4">
            //     <div class="card mb-3">
            //       <img class="card-img-top" src="img/robbie.png" alt="Robbie">
            //       <div class="card-body">
            //         <h4 class="card-title">Robbie Redux</h4>
            //         <p class="card-text">Robbie is a JavaScript developer working on large-scale applications. He's also a teacher who strives to support students in removing barriers to learning code.</p>
            //       </div>
            //     </div>          
            //   </div>
      
            //   <div class="col-md-6 col-lg-4">
            //     <div class="card mb-3">
            //       <img class="card-img-top" src="img/ecma.png" alt="Ecma">
            //       <div class="card-body">
            //         <h4 class="card-title">Ecma Scriptnstuff</h4>
            //         <p class="card-text">Ecma found her passion for programming and teaching over 15 years ago. She is excited to introduce you to all of the wonders of JavaScript.</p>
            //       </div>
            //     </div>          
            //   </div>
      
            //   <div class="col-md-6 col-lg-4">
            //     <div class="card mb-3">
            //       <img class="card-img-top" src="img/jay.png" alt="Jay">
            //       <div class="card-body">
            //         <h4 class="card-title">Jay Query</h4>
            //         <p class="card-text">Jay is a developer, author of CSS: The Missing Manual, JavaScript &amp; jQuery: The Missing Manual, and web development teacher.</p>
            //       </div>
            //     </div>          
            //   </div>
      
            //   <div class="col-md-6 col-lg-4">
            //     <div class="card">
            //       <img class="card-img-top" src="img/json.png" alt="Json">
            //       <div class="card-body">
            //         <h4 class="card-title">Json Babel</h4>
            //         <p class="card-text">All of his professional life, Json has worked with computers online; he is a polyglot programmer and likes using the right tools for the job.</p>
            //       </div>
            //     </div>          
            //   </div>
            // </div><!-- /speakers -->





    )
}