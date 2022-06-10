import React from 'react';
import "./style.css";
import avatar from './img/headshot.jpg';
import mongodb from './img/pngjoy.com_mongodb-mongodb-icon-png-download_7091544.png';
import express from './img/expressjs.png';
import csharp from './img/c-sharp.svg';
import remix from './img/remix.png';
import materialui from './img/materialui.png';
import aws from './img/aws.svg';

export default function About() {
  return (
    <div className='about' id="about-section">
      <div id='scroll-to-one'></div>
      <div className="profile-container">
        <img src={avatar} alt="Avatar" className="avatar" />
        <h1 className='about-header pt-0 pb-1'>About Me</h1>
      </div>
      <div className="row">
        <div className='col-lg-6 col-md-12'>
          <p>My name is Ty, and I am a software engineer with a full-stack certificate from the University of Washington. For whatever tech role I inhabit, I bring a broad, yet detailed experience, such as maintaining and implementing a new RDS, working DevOps in AWS, spear-heading UI/UX features amidst juggling app support issues, all the way to a deep involvement in an entire replatforming of an existing enterprise application</p> 
          
          <p>When I am not exercising my keyboard calisthenics, I am usually either skiing, running, mountaineering, teaching/playing guitar and piano, or going on walks. Programming is my passion, but I could not enjoy it nearly as much if I was not able to get out into the backcountry every so often. I currently live in Richmond, VA, tucked away in a cozy suburb with my wife and 100 pound Alaskan Malamute. </p>

        </div>
        <div className='col-lg-6 col-md-12'>
          <h2 className='text-center'>TECH HIGHLIGHTS</h2>
          <div className='skills'>
            <div className='col-lg-12 d-flex justify-content-around flex-wrap'>
              <div className="skill-icon"><i className="fab fa-js fa-3x"></i><p className='skill-text'>JavaScript</p></div>
              <div className="skill-icon"><img src={csharp} alt="csharp icon" className="mongoimg" /><p className='skill-text'>C#</p></div>
              <div className="skill-icon"><img src={materialui} alt="materialui icon" className="mongoimg"/><p className="skill-text">MaterialUI</p></div>
              <div className="skill-icon"><i className="fab fa-react fa-3x"></i><p className='skill-text'>React</p></div>
              <div className="skill-icon"><img src={remix} alt="remix icon" className="mongoimg"/><p className="skill-text">Remix</p></div>
            </div>
            <div className='col-lg-12 d-flex justify-content-around flex-wrap'>
              <div className="skill-icon"><i className="fab fa-node-js fa-3x"></i><p className='skill-text'>Node.js</p></div>
              <div className="skill-icon"><img src={express} alt="express icon" className="expressimg" /><p className='skill-text'>Express.js</p></div>
              <div className="skill-icon"><img src={aws}  alt="mongod icon" className="expressimg" /><p className='skill-text'>AWS</p></div>              
              <div className="skill-icon"><i className="fas fa-database fa-3x"></i><p className='skill-text'>SQL</p></div>
              <div className="skill-icon"><img src={mongodb}  alt="mongod icon" className="expressimg" /><p className='skill-text'>MongoDB</p></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
