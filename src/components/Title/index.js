import React from 'react'
import './style.css';

export default function Title() {
  return (
    <div className="inner">
      <div className='title-card'>
        <h1 className="whitney">Ty McFarland</h1>
        <hr className="solid" />
        <div className="type-text">
          <h3 className="gotham">Exploring the world through design and logic</h3>
          {/* <h3 className="gotham">through design and logic</h3> */}
        </div>
      </div>
    </div>
  )
}
