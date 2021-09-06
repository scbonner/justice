import React from 'react'
import Trainings1 from './Trainings1'



 const TrainingCards = () => {
    return (
       
        <div><br /><hr />
            <div className='container'>
                <div className="row">
                    <div className="col-md-4">
                        <h5>Family Engagement: What is it and why is it important? </h5>
                        <img src='https://images.pexels.com/photos/4473870/pexels-photo-4473870.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' className="card-img-top" alt="..."></img>
                        <Trainings1 /> 
                    </div>

                    
        <div className="col-md-4">
            <h2>CSS</h2>
            <p>CSS is used for describing the presentation of web pages. CSS can save a lot of time and effort. Our CSS tutorials will help you to learn the essentials of latest CSS3, so that you can control the style and layout of your website.</p>
            <p><a href="https://images.pexels.com/photos/4473870/pexels-photo-4473870.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" target="_blank" rel="noreferrer" className="btn btn-success">Learn More »</a></p>
        </div>
        <div className="col-md-4">
            <h2>Bootstrap</h2>
            <p>Bootstrap is a powerful front-end framework for faster and easier web development. Our Bootstrap tutorials will help you to learn all the features of latest Bootstrap 4 framework so that you can easily create responsive websites.</p>
            <p><a href="https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/" target="_blank" rel="noreferrer" className="btn btn-success">Learn More »</a></p>
        </div>
    </div>
    </div>
    </div>
    )
}

export default TrainingCards