import React from 'react';
import "./style.css";
import avatar from './img/headshot.jpg';
import mongodb from './img/pngjoy.com_mongodb-mongodb-icon-png-download_7091544.png';
import express from './img/expressjs.png';

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
          <p>My name is Ty, and I am a web developer out of the University of Washington's Full-Stack Web Engineering Certification program. When it comes to web applications, I have a high attention to detail and design on the front end, and a determination for efficency and flexibility on the back end. </p> <p>When I am not developing apps, I am usually either skiing, running, planning a mountaineering trip, teaching guitar and piano, or going on walks. Programming is my passion, but I could not enjoy it nearly as much if I was not able to get out into the backcountry every so often. I currently live just north of Spokane, WA in a cozy corner of the woods with my wife and Malamute. </p>
        </div>
        <div className='col-lg-6 col-md-12'>
          <h2 className='text-center'>SKILLSET</h2>
          <div className='skills'>
            <div className='col-lg-12 d-flex justify-content-around flex-wrap'>
              <div className="skill-icon"><i className="fas fa-code fa-3x"></i><p className='skill-text'>HTML</p></div>
              <div className="skill-icon"><i className="fab fa-css3 fa-3x"></i><p className='skill-text'>CSS</p></div>
              <div className="skill-icon"><i className="fab fa-bootstrap fa-3x"></i><p className='skill-text'>Bootstrap</p></div>
              <div className="skill-icon"><i className="fab fa-js fa-3x"></i><p className='skill-text'>JavaScript</p></div>
            </div>
            <div className='col-lg-12 d-flex justify-content-around flex-wrap'>
              <div className="skill-icon"><i className="fab fa-node-js fa-3x"></i><p className='skill-text'>Node.js</p></div>
              <div className="skill-icon"><i className="fab fa-react fa-3x"></i><p className='skill-text'>React.js</p></div>
              <div className="skill-icon"><img src={express} alt="express icon" className="expressimg" /><p className='skill-text'>Express.js</p></div>
              <div className="skill-icon"><i className="fas fa-database fa-3x"></i><p className='skill-text'>MySQL</p></div>
              <div className="skill-icon"><img src={mongodb}  alt="mongod icon" className="mongoimg" /><p className='skill-text'>MongoDB</p></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
