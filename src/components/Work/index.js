import React from 'react'
import BirdQuiz from './birdquiz.png';
import GearWise from './gearwise-landing-page.png';
import Vedomy from './vedomy.png';
import Carousel from 'react-bootstrap/Carousel';
import './style.css'

export default function Work() {

  
  return (
    <div className='work-container' id="work-section">
            <div id='scroll-to-two'></div>
      <h3 className='about-header work-header pt-4 mt-5 mb-4'>My Work</h3>
      <div className='carousel-container'>
        <Carousel>
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
    </div>
  )
}
