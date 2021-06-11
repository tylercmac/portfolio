import React from 'react'
import WorkBox from "../WorkBox";
import WorkBoxReverse from "../WorkBoxReverse";
import BirdQuiz from './images/birdquiz.png';
import GearWise from './images/gearwise.PNG';
import Vedomy from './images/vedomy.png';
import kinetik from "./images/kinetik.PNG";
import Carousel from 'react-bootstrap/Carousel';
import express from '../About/img/expressjs.png';
import sequelize from '../About/img/sequelize.png';
import jquery from '../About/img/jquery.png';

import './style.css'

export default function Work() {


  return (
    <div className='work-container' id="work-section">
      <div id='scroll-to-two'></div>
      <h3 className='about-header work-header pt-4 mt-5 mb-4'>My Work</h3>
      <div className='carousel-container mobile-show'>
        <Carousel>
          <Carousel.Item>
            <a className='site-links' href="http://kinetikapp.herokuapp.com/" target="_blank" rel="noreferrer">
              <img
                className="d-block w-100 c-img"
                src={kinetik}
                alt="First slide"
              />
              <Carousel.Caption className='my-caption'>
                <h3>kinetik</h3>
                <p>Staying in motion, together.</p>
              </Carousel.Caption>
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a className='site-links' href="https://gushihiro.github.io/Vedomy/" target="_blank" rel="noreferrer">
              <img
                className="d-block w-100 c-img"
                src={Vedomy}
                alt="First slide"
              />
              <Carousel.Caption className='my-caption'>
                <h3>vědomý</h3>
                <p>A place to breathe, write, and reflect</p>
              </Carousel.Caption>
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a className='site-links' href="https://gear-wise.herokuapp.com/" target="_blank" rel="noreferrer">
              <img
                className="d-block w-100 c-img"
                src={GearWise}
                alt="Second slide"
              />

              <Carousel.Caption className='my-caption'>
                <h3>GearWise</h3>
                <p>Pack for your next trip here!</p>
              </Carousel.Caption>
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a className='site-links' href="https://tylercmac.github.io/bird-quiz/" target="_blank" rel="noreferrer">
              <img
                className="d-block w-100 c-img"
                src={BirdQuiz}
                alt="Third slide"
              />

              <Carousel.Caption className='my-caption'>
                <h3>The Bird Quiz</h3>
                <p>Test your bird knowledge.</p>
              </Carousel.Caption>
            </a>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className='desktop-show justify-content-around'>
        <WorkBox
          image={kinetik}
          url='http://kinetikapp.herokuapp.com/'
          repo_url="https://github.com/ZacharyKathe/Kinetic"
          title="kinetik"
          details={<>
            <p className='descrip'>
              Kinetik is a social goal-tracking application that helps each user strive towards their specific goal, either on their own, or in a community of their choosing.
            </p><p className='descrip'> Designed mobile first, this app has a slick, minimal user experience for on the go or at home.
            </p>
          </>}
          role="Project Manager + Full-Stack Development"
          icons={<>
            <div className="skill-icon"><i className="fas fa-code fa-2x"></i><p className='skill-text'>HTML</p></div>
            <div className="skill-icon"><i className="fab fa-css3 fa-2x"></i><p className='skill-text'>CSS</p></div>
            <div className="skill-icon"><i className="fab fa-js fa-2x"></i><p className='skill-text'>JavaScript</p></div>
            <div className="skill-icon"><i className="fab fa-node-js fa-2x"></i><p className='skill-text'>Node.js</p></div>
            <div className="skill-icon"><i className="fab fa-react fa-2x"></i><p className='skill-text'>React.js</p></div>
            <div className="skill-icon"><img src={express} alt="express icon" className="tech-icon" /><p className='skill-text'>Express.js</p></div>
            <div className="skill-icon"><i className="fas fa-database fa-2x"></i><p className='skill-text'>MySQL</p></div>
            <div className="skill-icon"><img src={sequelize} alt="sequelize icon"  className="tech-icon" /><p className='skill-text'>Sequelize</p></div>
          </>}
        />
        <WorkBoxReverse
          image={GearWise}
          url="https://gear-wise.herokuapp.com/"
          repo_url="https://github.com/tylercmac/gear-tracker"
          title="Gearwise"
          details={<>
            <p className='descrip'>
            GearWise is an application for backpackers and campers to log and store their gear, record trips, and ensure that their load isn't too heavy to carry.
            </p><p className='descrip'>After a year of isolation and quarantine, many of us are itching to get outside and stretch our legs. GearWise will help users ensure that their trip is successful. 
            </p>
          </>}
          icons={<>
            <div className="skill-icon"><i className="fas fa-code fa-2x"></i><p className='skill-text'>HTML</p></div>
            <div className="skill-icon"><i className="fab fa-css3 fa-2x"></i><p className='skill-text'>CSS</p></div>
            <div className="skill-icon"><i className="fab fa-js fa-2x"></i><p className='skill-text'>JavaScript</p></div>
            <div className="skill-icon"><i className="fab fa-node-js fa-2x"></i><p className='skill-text'>Node.js</p></div>
            <div className="skill-icon"><img src={express}  alt="express icon" className="tech-icon" /><p className='skill-text'>Express.js</p></div>
            <div className="skill-icon"><i className="fas fa-database fa-2x"></i><p className='skill-text'>MySQL</p></div>
            <div className="skill-icon"><img src={sequelize}  alt="sequelize icon" className="tech-icon" /><p className='skill-text'>Sequelize</p></div>
          </>}
          role="Repository Master + Full-stack Development"
        />
        <WorkBox
          image={Vedomy}
          url='https://gushihiro.github.io/Vedomy/'
          repo_url="https://github.com/Gushihiro/Vedomy"
          title="Vedomy"
          details={<>
            <p className='descrip'>
            This app was made for anyone who needs a second to slow down, reflect, and collect themselves. Vedomý is Czech for "conscious", and we believe that a conscious life is a life lived in the present. 
            </p><p className='descrip'>A great way to live like this is by doing exactly what this place is designed to help you to do- breathe, write, and reflect. 
            </p>
          </>}
          role="Project Manager + UI/UX Development"
          icons={<>
            <div className="skill-icon"><i className="fas fa-code fa-2x"></i><p className='skill-text'>HTML</p></div>
            <div className="skill-icon"><i className="fab fa-css3 fa-2x"></i><p className='skill-text'>CSS</p></div>
            <div className="skill-icon"><i className="fab fa-js fa-2x"></i><p className='skill-text'>JavaScript</p></div>
            <div className="skill-icon"><img src={jquery}  alt="jquery icon" className="tech-icon" /><p className='skill-text'>jQuery</p></div>
            <div className="skill-icon"><i className="fab fa-node-js fa-2x"></i><p className='skill-text'>Node.js</p></div>
            <div className="skill-icon"><i className="fab fa-bootstrap fa-2x"></i><p className='skill-text'>Bootstrap</p></div>
          </>}
        />
        <WorkBoxReverse
          image={BirdQuiz}
          url="https://tylercmac.github.io/bird-quiz/"
          repo_url="https://github.com/tylercmac/bird-quiz"
          title="BirdQuiz"
          details={<>
            <p className='descrip'>
            A simple quiz that tests the user on their bird knowledge. There is a timer for one minute, and if the user answers incorrectly on a question, it will take 10 seconds off the timer. 
            </p><p className='descrip'>There is a high score list that will update whenever a user finishes the quiz.
            </p>
          </>}
          role="Sole Developer"
          icons={<>
            <div className="skill-icon"><i className="fas fa-code fa-2x"></i><p className='skill-text'>HTML</p></div>
            <div className="skill-icon"><i className="fab fa-css3 fa-2x"></i><p className='skill-text'>CSS</p></div>
            <div className="skill-icon"><i className="fab fa-js fa-2x"></i><p className='skill-text'>JavaScript</p></div>
          </>}
        />

      </div>
    </div>
  )
}
