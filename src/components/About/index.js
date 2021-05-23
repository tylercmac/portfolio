import React from 'react';
import "./style.css";
import avatar from './headshot.jpg';

export default function About() {
  return (
    <div className='about' id="about-section">
      <div id='scroll-to-one'></div>
      <div className="profile-container">
        <img src={avatar} alt="Avatar" className="avatar"/>
        <h1 className='about-header pt-0 pb-1'>About Me</h1>
      </div>
      <p>My name is Ty, and I am an up-and-coming web developer coming out of the University of Washington's Full-Stack Web Engineering Certification program. Up to this point, my careers have been mostly distinct from programming, but I have made a recent switch into this field with a complete intention to learn everything I can about building quality projects. </p> <p>When I am not developing apps, I am usually either skiing, running, planning a mountaineering trip, teaching guitar and piano, or going on walks. Programming is my passion, but I could not enjoy it nearly as much if I was not able to get out into the backcountry every so often. I currently live just north of Spokane, WA in a cozy corner of the woods with my wife and Malamute. </p> 

    </div>
  )
}
