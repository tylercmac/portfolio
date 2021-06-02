import React from 'react';
import './style.css';

export default function WorkBox(props) {
  return (
    <div className='work-box col-lg-4'>
    <img src={props.image} alt="Avatar" className="work-image" />
    <div className="middle">
      <a className='site-links' href={props.url} target="_blank" rel="noreferrer">
        <div className="text">{props.title}</div>
      </a>
    </div>
  </div>
  )
}

