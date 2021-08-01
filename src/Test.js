import React from 'react'

export default function Testing() {
    return (

        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-3">
    <div className="container">
        <a href="#" className="navbar-brand mr-3" >Tutorial Republic</a>
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav">
                <a href="home" className="nav-item nav-link active">Home</a>
                <a href="staff" className="nav-item nav-link">Staff</a>
                <a href="partnerships" className="nav-item nav-link">Partnerships</a>
                <a href="policy" className="nav-item nav-link">Policy</a>
                <a href="trainings" className="nav-item nav-link">Trainings</a>
            </div>
            {/* <div className="navbar-nav ml-auto">
                <a href="#" className="nav-item nav-link">Register</a>
                <a href="#" className="nav-item nav-link">Login</a>
            </div> */}
        </div>
    </div>    
</nav>
<div className="container">
    <div className="jumbotron">
        <h1>Learn to Create Websites</h1>
        <p className="lead">In today's world internet is the most popular way of connecting with the people. At <a href="https://www.tutorialrepublic.com" target="_blank" rel="noreferrer">tutorialrepublic.com</a> you will learn the essential web development technologies along with real life practice examples, so that you can create your own website to connect with the people around the world.</p>
        <p><a href="https://www.tutorialrepublic.com" target="_blank" rel="noreferrer" className="btn btn-success btn-lg">Get started today</a></p>
    </div>
    <div className="row">
        <div className="col-md-4">
            <h2>HTML</h2>
            <p>HTML is the standard markup language for describing the structure of the web pages. Our HTML tutorials will help you to understand the basics of latest HTML5 language, so that you can create your own web pages or website.</p>
            <p><a href="https://www.tutorialrepublic.com/html-tutorial/" target="_blank" rel="noreferrer" className="btn btn-success">Learn More »</a></p>
        </div>
        <div className="col-md-4">
            <h2>CSS</h2>
            <p>CSS is used for describing the presentation of web pages. CSS can save a lot of time and effort. Our CSS tutorials will help you to learn the essentials of latest CSS3, so that you can control the style and layout of your website.</p>
            <p><a href="https://www.tutorialrepublic.com/css-tutorial/" target="_blank" rel="noreferrer" className="btn btn-success">Learn More »</a></p>
        </div>
        <div className="col-md-4">
            <h2>Bootstrap</h2>
            <p>Bootstrap is a powerful front-end framework for faster and easier web development. Our Bootstrap tutorials will help you to learn all the features of latest Bootstrap 4 framework so that you can easily create responsive websites.</p>
            <p><a href="https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/" target="_blank" rel="noreferrer" className="btn btn-success">Learn More »</a></p>
        </div>
    </div>

    {/* <footer>
        <div className="row">
            <div className="col-md-6">
           
                <p>Copyright &copy; 2019 Tutorial Republic</p>
            </div>
            <div className="col-md-6 text-md-right">
                <a href="#" className="text-dark">Terms of Use</a> 
                <span className="text-muted mx-2">|</span> 
                <a href="#" className="text-dark">Privacy Policy</a>
            </div>
        </div>
    </footer> */}
    <hr />

</div>

        </div>
    )
}






// flexbox 

// <div class="wrap">
//       <header>
//         <div class="nav container sticky">
//             <ul class="left-list">
//               <li><a href="#linear-s">linear search</a></li>
//               <li><a href="#linked-l">Linked List</a></li>
//               <li><a href="#stack">stack</a></li>
//               <li><a href="#tree">Tree</a></li>
//               <li><a href="#queue">Queue</a></li>
//             </ul>
//             <ul class="right-list">
//               <li><a href="./flexbox.html">with flexbox</a></li>
//               <li><img src="images/yo.jpg" alt="not found" class="profile-image"></li>
//             </ul>
//         </div>
//       </header>
//       <div class="cover-page">
//         <div class="container">
//           <img src="https://placeimg.com/640/480/tech" alt="not found" class="cover-image">
//           <h1 class="main-title">this template was made with floats</h1>
//         </div>
//       </div>
//       <div class="container">
//         <div class="row-linear-right clearfix" id="linear-s">
//           <img src="https://placeimg.com/640/480/tech" alt="" class="">
//           <h1>Linear Search </h1>
//           <p>Linear search is a very simple search algorithm. In this type of search, a sequential search is made over all items one by one. Every item is checked and if a match is found then that particular item is returned, otherwise the search continues till the end of the data collection.</p>
//         </div>
//         <div class="row-linear-left clearfix" id="linked-l">
//           <img src="https://placeimg.com/640/480/tech" alt="" class="">
//           <h1>Linked List</h1>
//           <p>A linked list is a sequence of data structures, which are connected together via links.
//             Linked List is a sequence of links which contains items. Each link contains a connection to another link. Linked list is the second most-used data structure after array. Following are the important terms to understand the concept of Linked List.</p>
//         </div>
//         <div class="nav">
//             <div class="in-table" id="stack">
//               <h1>Stack </h1>
//               <img src="https://placeimg.com/640/480/tech" alt="" class="table-image">
//               <p>A stack is an Abstract Data Type (ADT), commonly used in most programming languages. It is named stack as it behaves like a real-world stack, for example – a deck of cards or a pile of plates, etc.
//                 A real-world stack allows operations at one end only. For example, we can place or remove a card or plate from the top of the stack only. Likewise, Stack ADT allows all data operations at one end only. At any given time, we can only access the top element of a stack.
//                 This feature makes it LIFO data structure. LIFO stands for Last-in-first-out. Here, the element which is placed (inserted or added) last, is accessed first. In stack terminology, insertion operation is called PUSH operation and removal operation is called POP operation.
//               </p>
//             </div>
//             <div class="in-table" id="tree">
//               <h1>Tree </h1>
//               <img src="https://placeimg.com/640/480/tech" alt="" class="table-image">
//               <p>Tree represents the nodes connected by edges. We will discuss binary tree or binary search tree specifically.
//                 Binary Tree is a special datastructure used for data storage purposes. A binary tree has a special condition that each node can have a maximum of two children. A binary tree has the benefits of both an ordered array and a linked list as search is as quick as in a sorted array and insertion or deletion operation are as fast as in linked list.</p>
//             </div>
//             <div class="in-table" id="queue">
//               <h1>Queue </h1>
//               <img src="https://placeimg.com/640/480/tech" alt="" class="table-image">
//               <p>Queue is an abstract data structure, somewhat similar to Stacks. Unlike stacks, a queue is open at both its ends. One end is always used to insert data (enqueue) and the other is used to remove data (dequeue). Queue follows First-In-First-Out methodology, i.e., the data item stored first will be accessed first.
//                 A real-world example of queue can be a single-lane one-way road, where the vehicle enters first, exits first. More real-world examples can be seen as queues at the ticket windows and bus-stops.
//               </p>
//             </div>
//         </div>
//       </div>
//       <img src="images/plus.png" alt="not found"/>
//     </div>
//     <footer>
//       <span>end</span>
//     </footer>





// //header, links and href's

// <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  
// <symbol id="twitter-wrap" viewBox="0 0 266.9 266.9">
// <path fill="#A6A6A6" d="M224 266.9h-181.1c-23.6 0-42.9-19.3-42.9-42.9v-181.1c0-23.6 19.3-42.9 42.9-42.9h181.1c23.6 0 42.9 19.3 42.9 42.9v181.1c0 23.6-19.3 42.9-42.9 42.9z"/><path fill="#fff" d="M214.1 83.4c-5.9 2.6-12.3 4.4-19 5.2 6.8-4.1 12.1-10.6 14.6-18.3-6.4 3.8-13.5 6.6-21 8-6-6.4-14.6-10.5-24.2-10.5-18.3 0-33.1 14.8-33.1 33.1 0 2.6.3 5.1.9 7.5-27.6-1.3-52-14.4-68.3-34.5-2.9 4.9-4.5 10.6-4.5 16.6 0 11.5 5.8 21.6 14.7 27.6-5.4-.2-10.5-1.7-15-4.1v.4c0 16 11.4 29.4 26.6 32.5-2.8.8-5.7 1.2-8.7 1.2-2.1 0-4.2-.2-6.2-.6 4.2 13.2 16.4 22.7 30.9 23-11.3 8.9-25.6 14.2-41.1 14.2-2.7 0-5.3-.2-7.9-.5 14.7 9.4 32.1 14.9 50.8 14.9 60.9 0 94.2-50.5 94.2-94.2 0-1.4 0-2.9-.1-4.3 6.4-4.7 12-10.6 16.4-17.2z"/>
// </symbol>

// <symbol id="facebook-wrap" viewBox="0 0 266.9 266.9">
// <path fill="#A6A6A6" d="M224 266.9h-181.1c-23.6 0-42.9-19.3-42.9-42.9v-181.1c0-23.6 19.3-42.9 42.9-42.9h181.1c23.6 0 42.9 19.3 42.9 42.9v181.1c0 23.6-19.3 42.9-42.9 42.9z"/><path fill="#fff" d="M146.2 220.1v-79.9h26.8l4-31.2h-30.8v-19.9c0-9 2.5-15.2 15.4-15.2h16.5v-27.8c-2.9-.4-12.6-1.2-24-1.2-23.8-.1-40.1 14.4-40.1 41.1v23h-26.9v31.2h26.9v79.9h32.2z"/>
// </symbol>

// </svg>
// <header>
//   <a href="index.html" id="logo">
//     <h1>Nick Pettit</h1>
//     <h2>Designer</h2>
//   </a>
//   <nav>
//     <ul>
//       <li><a href="index.html" class="selected">Portfolio</a></li>
//       <li><a href="about.html">About</a></li>
//       <li><a href="contact.html">Contact</a></li>
//     </ul>
//   </nav>
// </header>
// <div id="wrapper">
//   <section>
//     <ul id="gallery">
//       <li>
//         <a href="img/numbers-01.jpg" class="magnific">
//           <img src="assets/numbers-01-preview.jpg" alt="">
//           <p>Experimentation with color and texture.</p>
//         </a>
//       </li>
//       <li>
//         <a href="img/numbers-02.jpg" class="magnific">
//           <img src="assets/numbers-02-preview.jpg" alt="">
//           <p>Playing with blending modes in Photoshop.</p>
//         </a>
//       </li>
//       <li>
//         <a href="img/numbers-06.jpg" class="magnific">
//           <img src="assets/numbers-06-preview.jpg" alt="">
//           <p>Trying to create an 80's style of glows.</p>
//         </a>
//       </li>
//       <li>
//         <a href="img/numbers-09.jpg" class="magnific">
//           <img src="assets/numbers-09-preview.jpg" alt="">
//           <p>Drips created using Photoshop brushes.</p>
//         </a>
//       </li>
//       <li>
//         <a href="img/numbers-12.jpg" class="magnific">
//           <img src="assets/numbers-12-preview.jpg" alt="">
//           <p>Creating shapes using repetition.</p>
//         </a>
//       </li>
//     </ul>
//   </section>
//   <footer>
//     <a href="http://twitter.com/nickrp">
//       <svg class="social-icon">
//         <use xlink:href="#twitter-wrap" />
//       </svg>
//     <a href="http://facebook.com/nickpettit">
//       <svg class="social-icon">
//         <use xlink:href="#facebook-wrap" />
//       </svg>
      
//     <p>&copy; 2014 Nick Pettit.</p>
//   </footer>
// </div>
    
// <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
// <script src="js/jquery.magnific-popup.min.js"></script>
// <script>$(document).ready(function(){$(".magnific").magnificPopup({type:"image",closeOnContentClick:!0,image:{verticalFit:!1}})});></script>

// </body>
// </html>






// <!-- navbar -->
// <nav class="navbar navbar-expand-lg fixed-top">
// <div class="container">
//   <a class="navbar-brand order-1 text-muted mr-0" href="https://www.teamtreehouse.com" target="_blank">Presented by Treehouse</a>
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>
//   <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
//     <div class="navbar-nav">
//       <a class="nav-item nav-link" href="#home">Home <span class="sr-only">(current)</span></a>
//       <a class="nav-item nav-link" href="#projects">Projects</a>
//       <a class="nav-item nav-link" href="#personal">Personal Interests</a>
//       <a class="nav-item nav-link" href="#contact">Contact</a>
//     </div>
//   </div>
// </div>
// </nav><!-- /navbar -->

// <!-- jumbotron -->
// <div class="jumbotron jumbotron-fluid bg-info text-white">
// <div class="container text-sm-center pt-5">
//   <h1 class="display-2">Full Stack Conf</h1>
//   <p class="lead">A One-day Conference About All Things JavaScript!</p>        
//   <div class="btn-group mt-4" role="group" aria-label="Callout buttons">
//     <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#register">Register Now</button>
//     <a class="btn btn-light btn-lg" href="#speakers">See Speakers</a>
//   </div>        
// </div>
// </div><!-- /jumbotron -->

// <div class="container pt-4">
// <!-- about -->
// <div id="about" class="row">
//   <div class="col-lg order-lg-2">
//     <h3 class="mb-4">About Full Stack Conf</h3>
//     <img class="mb-4 img-fluid rounded d-none d-sm-block" src="img/pdx.jpg" alt="Portland">
//     <p>The beautiful city of Portland, Oregon will be the host city for Full Stack Conf!</p>
//     <p>Explore the future of JavaScript with a lineup of industry professionals. Discover new techniques to advance your career as a web developer.</p>
//   </div>
//   <div class="col-lg order-lg-1">
//     <h3 class="mb-4">Expert Speakers</h3>
//     <p>Our expert speaker lineup was just announced, so don't wait too long before grabbing your tickets!</p>
//     <p>Want to meet the international JavaScript community and share skills with some of the world's top experts, hackers, and makers? Be the first to know what to expect for the future of JavaScript.</p>
//     <p>Full Stack Conf is committed to being inclusive and welcoming for everyone. We look forward to another intensive day of learning and sharing.</p>
//   </div>
//   <div class="col-lg order-3">
//     <h3 class="mb-4">What You'll Learn</h3>
//     <div class="list-group">
//       <a href="#" class="list-group-item list-group-item-action"><strong>MongoDB</strong>: NoSQL database</a>
//       <a href="#" class="list-group-item list-group-item-action"><strong>Express</strong>: Framework for Node</a>
//       <a href="#" class="list-group-item list-group-item-action"><strong>React</strong>: JavaScript library</a>
//       <a href="#" class="list-group-item list-group-item-action"><strong>Node.js</strong>: JavaScript environment</a>
//       <a href="#" class="list-group-item list-group-item-action"><strong>ES2015</strong>: Latest version of JavaScript</a>
//       <a href="#" class="list-group-item list-group-item-action"><strong>Babel</strong>: JavaScript compiler</a>
//     </div>
//   </div>        
// </div><!-- /about -->

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

// <!-- schedule -->
// <h1 id="schedule" class="display-4 text-center my-5 text-muted">Schedule</h1>

// <ul class="list-group">
//   <li class="list-group-item">
//     <div class="d-flex justify-content-between">
//       <h5 class="mb-1">Keynote: Internet of Things</h5>
//       <span class="badge badge-pill badge-info p-2">9:00am</span>
//     </div>
//     <p class="mb-1">NodeStradamus</p>
//   </li>
//   <li class="list-group-item">
//     <div class="d-flex justify-content-between">
//       <h5 class="mb-1">React Basics</h5>
//       <span class="badge badge-pill badge-info p-2">10:00am</span>
//     </div>
//     <p class="mb-1">Vivianne McVue</p>
//   </li>
//   <li class="list-group-item">
//     <div class="d-flex justify-content-between">
//       <h5 class="mb-1">Hey, Mongo!</h5>
//       <span class="badge badge-pill badge-info p-2">11:00am</span>
//     </div>
//     <p class="mb-1">Jay Query</p>
//   </li>
//   <li class="list-group-item list-group-item-success">
//     <div class="d-flex justify-content-between">
//       <h5 class="mb-1">Lunch</h5>
//       <span class="badge badge-pill badge-info p-2">12:00pm</span>
//     </div>
//     <p class="mb-1">Free pizza for everyone!</p>
//   </li>
//   <li class="list-group-item">
//     <div class="d-flex justify-content-between">
//       <h5 class="mb-1">Introducing ES2015</h5>
//       <span class="badge badge-pill badge-info p-2">1:00pm</span>
//     </div>
//     <p class="mb-1">Ecma Scriptnstuff</p>
//   </li> 
//   <li class="list-group-item">
//     <div class="d-flex justify-content-between">
//       <h5 class="mb-1">Getting Started With Redux</h5>
//       <span class="badge badge-pill badge-info p-2">2:00pm</span>
//     </div>
//     <p class="mb-1">Robbie Redux</p>
//   </li> 
//   <li class="list-group-item">
//     <div class="d-flex justify-content-between">
//       <h5 class="mb-1">What's Babel?</h5>
//       <span class="badge badge-pill badge-info p-2">3:00pm</span>
//     </div>
//     <p class="mb-1">Json Babel</p>
//   </li>        
// </ul><!-- /schedule -->

// <!-- callout button -->
// <button type="button" class="btn btn-outline-info btn-lg d-block mx-auto my-5" data-toggle="modal" data-target="#register">Don't Miss Out, Register Now</button>      

//  <!-- signup form -->
// <hr>
// <div class="row py-4 text-muted">
//   <div class="col-md col-xl-5">
//     <p><strong>About Treehouse</strong></p>
//     <p>Treehouse brings affordable technology education to people everywhere to help them achieve their dreams and change the world.</p>
//   </div>
//   <div class="col-md col-xl-5 ml-auto">
//     <p><strong>Stay up-to-date on Full Stack Conf</strong></p>
//     <div class="input-group">
//       <input type="text" class="form-control" placeholder="Email">
//       <span class="input-group-btn">
//         <button class="btn btn-primary" type="button">Sign up</button>
//       </span>
//     </div>
//   </div>
// </div>
// <hr><!-- /signup form -->

// <!-- footer -->
//  <div class="row py-3">
//   <div class="col-md-7">
//     <ul class="nav">
//       <li class="nav-item">
//         <a class="nav-link" href="#">Community</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#">Tracks</a>
//       </li>
//       <li class="nav-item">
//         <div class="btn-group dropup">
//           <button type="button" class="btn btn-outline-secondary">Other Confs</button>
//           <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//             <span class="sr-only">Toggle Dropdown</span>
//           </button>
//           <div class="dropdown-menu">
//             <a class="dropdown-item" href="#">CSS Conf</a>
//             <a class="dropdown-item" href="#">Python Conf</a>
//             <a class="dropdown-item" href="#">Java Conf</a>
//             <a class="dropdown-item" href="#">Swift Conf</a>
//           </div>
//         </div>
//       </li>
//     </ul>
//   </div>
//   <div class="col-md text-md-right">
//     <small>&copy; 2017 Full Stack Conf &amp; Treehouse</small>
//   </div>
// </div><!-- /footer -->

// </div><!-- /.container -->

// <! =====================================
//   FORM MODAL
//  ===================================== >

// <div class="modal fade" id="register" tabindex="-1" role="dialog" aria-labelledby="register form" aria-hidden="true">
// <div class="modal-dialog" role="document">
//   <div class="modal-content">
//     <div class="modal-header bg-info text-white">
//       <h5 class="modal-title" id="exampleModalLabel">Register for Full Stack Conf</h5>
//       <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//         <span aria-hidden="true">&times;</span>
//       </button>
//     </div>
//     <div class="modal-body">
//       <!-- registration form -->
//       <form>
//         <div class="alert alert-warning alert-dismissible fade show" role="alert">
//           <button type="button" class="close" data-dismiss="alert" aria-label="Close">
//             <span aria-hidden="true">&times;</span>
//           </button>
//           <strong>Hurry!</strong> Early bird registration ends in two days.
//         </div>              
//         <h5 class="mb-4">Basic Info</h5>
//         <div class="form-group">
//           <label class="form-control-label" for="name">Name:</label>
//           <input type="text" class="form-control" id="name">
//         </div>
//         <div class="form-group">
//           <label class="form-control-label" for="email">Email:</label>
//           <input type="email" class="form-control" id="email">
//         </div>
//         <div class="form-group">
//           <label for="role">Job Role:</label>
//           <select class="custom-select form-control" id="role">
//             <option value="full stack js developer">Full Stack JavaScript Developer</option>
//             <option value="front end developer">Front End Developer</option>
//             <option value="back end developer">Back End Developer</option>
//             <option value="designer">Designer</option>          
//             <option value="student">Student</option>                   
//           </select>
//         </div>
        
//         <hr class="my-4">
//         <h5 class="mb-4">Which Topics Interest You Most?</h5>
        
//         <div class="form-check">
//           <label class="custom-control custom-checkbox">
//             <input type="checkbox" class="custom-control-input">
//             <span class="custom-control-indicator"></span>
//             <span class="custom-control-description">JavaScript Frameworks</span>
//           </label>                
//         </div>
//         <div class="form-check">
//           <label class="custom-control custom-checkbox">
//             <input type="checkbox" class="custom-control-input">
//             <span class="custom-control-indicator"></span>
//             <span class="custom-control-description">JavaScript Libraries</span>
//           </label>                
//         </div>
//         <div class="form-check">
//           <label class="custom-control custom-checkbox">
//             <input type="checkbox" class="custom-control-input">
//             <span class="custom-control-indicator"></span>
//             <span class="custom-control-description">Node.js</span>
//           </label>                
//         </div>
//         <div class="form-check">
//           <label class="custom-control custom-checkbox">
//             <input type="checkbox" class="custom-control-input">
//             <span class="custom-control-indicator"></span>
//             <span class="custom-control-description">Build Tools</span>
//           </label>                
//         </div>
//         <div class="form-check">
//           <label class="custom-control custom-checkbox">
//             <input type="checkbox" class="custom-control-input">
//             <span class="custom-control-indicator"></span>
//             <span class="custom-control-description">ES2015</span>
//           </label>                
//         </div>
        
//         <hr class="mb-4">
//         <h5 class="mb-4">Payment Info</h5>
        
//         <div class="form-row">
//           <div class="col-lg-6 form-group">
//             <label for="cc-num">Card Number:</label>
//             <input class="form-control" id="cc-num" type="text">
//           </div>
        
//           <div class="col-lg form-group">
//             <label for="zip">Zip Code:</label>
//             <input class="form-control" id="zip" type="text">
//           </div>
        
//           <div class="col-lg form-group">
//             <label for="cvv">CVV:</label>
//             <input class="form-control" id="cvv" type="text">
//           </div>
//         </div>
        
//         <div class="form-row">
//           <label class="col-lg-12">Expiration Date:</label>
          
//           <div class="form-group col-lg-8">
//             <select class="custom-select form-control" id="exp-month">
//               <option value="1">1 - January</option>
//               <option value="2">2 - February</option>
//               <option value="3">3 - March</option>
//               <option value="4">4 - April</option>
//               <option value="5">5 - May</option>
//               <option value="6">6 - June</option>
//               <option value="7">7 - July</option>
//               <option value="8">8 - August</option>
//               <option value="9">9 - September</option>
//               <option value="10">10 - October</option>
//               <option value="11">11 - November</option>	
//               <option value="12">12 - December</option>          		          
//             </select>                    
//           </div>
          
//           <div class="form-group col-lg">
//             <select class="custom-select form-control" id="exp-year">
//               <option value="2016">2016</option>
//               <option value="2017">2017</option>
//               <option value="2018">2018</option>
//               <option value="2019">2019</option>
//               <option value="2020">2020</option>        		          
//             </select>                   
//           </div>                
//         </div>
        
//         <hr class="mb-4">
//         <button type="submit" class="btn btn-primary btn-lg">Register</button>              
//       </form><!-- /registration form -->
//     </div>
//   </div>
// </div>
// </div>   

// <!-- Optional JavaScript -->
// <!-- jQuery first, then Popper.js, then Bootstrap JS -->
// <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
// <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
// </body>
// </html>



// <p>&copy; 2020 Sadric Bonner</p>
// </footer>
// </div>