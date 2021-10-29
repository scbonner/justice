import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';
import themural from './image/themural.jpeg'
import './whatwedo.css'



export default function WhatwedoJumb2() {
    return (
        <div>
            <p className='cursive'><center>"Those who control the words and the images, control the minds of the people." ~ Iylanla Vanzant ~</center></p>

            <Jumbotron>
                <Jumbotron style={{ backgroundImage: `url(${themural})`, height: '85vh', color: 'white', fontWeight: 'bold' }}> 
                    <h1 className="display-4">TRAINING</h1>
                    <br />
                    <br />
                    <br />
                    <br />
                    <a className="btn btn-primary btn-lg" href="#speakers">Click Here</a>
                    <br />
                </Jumbotron>
            </Jumbotron>

        </div>


    );
}
