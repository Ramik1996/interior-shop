import React from 'react';
import './style.css';

function Slider(props) {
  return (
    <div className="slider padding-site" style={{backgroundImage: `url(${props.backgroundImg})`}}>
      <div className="slider-text">
        <p className="slider-name">{props.name}</p>
        <h2 className="slider-h2">{props.product}</h2>
        <p className="slider-content">{props.description}</p>
        <button className="button">Order<span className="arrow">&gt;</span></button>
      </div>
    </div>
  )
}

export default Slider;