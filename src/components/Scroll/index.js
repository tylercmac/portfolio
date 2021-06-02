import React from 'react';
import './style.css';

export default function Scroll(props) {
  return (
    <a href={props.scroll}>
      <div className={props.container}>
        <div className="chevron"></div>
        <div className="chevron"></div>
        <div className="chevron"></div>
      </div>
    </a>
  )
}
