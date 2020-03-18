import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';

function Slider(props) {
  return (
    <div className="slider padding-site" style={{backgroundImage: `url(${props.backgroundImg})`}}>
      <div className="slider-text">
        <p className="slider-name">{props.name}</p>
        <h2 className="slider-h2">{props.product}</h2>
        <p className="slider-content">{props.description}</p>
        <Link to={`/ProductDetails/${props.id}`} className="button">Order<span className="arrow">&gt;</span></Link>
      </div>
    </div>
  )
}

export default Slider;