import React from 'react';
import './style.css';

export default function WorkBox(props) {
  return (
    <div className='work-box col-lg-12'>
      <div className='text-box'>
        <div className="title">{props.title}</div>
        <div className='project-details'>
          {props.details}
          <hr className='divider' />
          <p className='role'>
            <span className="text-bold">My Role:</span> {props.role}
          </p>
          <hr className='divider' />
          <div className="text-bold tech-title">Technologies</div>
          <div className='tech-used'>
            {props.icons}
          </div>
        </div>
      </div>
      <div className='image-box'>
        <img src={props.image} alt="Avatar" className="work-image" />
        <div className="middle">
          <a className='site-links' href={props.url} target="_blank" rel="noreferrer">
            <div className="text deploy">Live Site</div>
          </a>
          <a className='site-links' href={props.repo_url} target="_blank" rel="noreferrer">
            <div className="text repo">GitHub Repo</div>
          </a>
        </div>
      </div>
    </div>
  )
}

