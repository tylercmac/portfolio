import React from 'react';
import './style.css'

export default function Contact() {
  return (
    <>
    <div>
      <div className="effect varrius">
        <h2 className='contact-header'>CONTACT ME</h2>
        <div className="buttons">
          <a href="https://github.com/tylercmac" className="gt" title="find me on GitHub" target="_blank" rel="noreferrer"><i className="fa fa-github" aria-hidden="true" alt="GitHub"></i></a>
          <a href="https://www.linkedin.com/in/tyler-mcfarland/" className="in" title="Join us on Linked In" target="_blank" rel="noreferrer"><i className="fa fa-linkedin" aria-hidden="true" alt="LinkedIn"></i></a>
          <a href="mailto:tylercmac@gmail.com" className="dribbble" title="Email me" target="_blank" rel="noreferrer"><i className="fa fa-envelope" aria-hidden="true" alt="Mailto"></i></a>
          <a href="https://www.instagram.com/thescottishduck/" className="insta" title="Find me on Instagram" target="_blank" rel="noreferrer"><i className="fa fa-instagram" aria-hidden="true" alt="Instagram"></i></a>
          <a href="https://www.youtube.com/channel/UCbR5PRm6U_I7qQaeTsrPpDA" className="yt" title="Find me on YouTube" target="_blank" rel="noreferrer"><i className="fa fa-youtube" aria-hidden="true" alt="YouTube"></i></a>
          <a href="https://www.facebook.com/ExquisitePlatypusBoy/" className="fb" title="Message me on Facebook" target="_blank" rel="noreferrer"><i className="fa fa-facebook" aria-hidden="true" alt="Facebook"></i></a>
        </div>
      </div>
    </div>
      <a id="back-to-top" className="text-info"href='#root' type="link">BACK TO TOP</a>
      </>
  )
}
