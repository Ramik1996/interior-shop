import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';

function ExclusiveComponent(props) {
  return (
    <div className="exclusive-product" style={{backgroundImage: `url(${props.imgUrl})`}}>
      <div className="exclusive-text">
        <p className="exclusive-head">{props.header}</p>
        <h2 className="exclusive-name">{props.name}</h2>
        <p className="exclusive-description">{props.description}</p>
        <Link to={`/ProductDetails/${props.id}`} className="button">Order<span className="arrow">&gt;</span></Link>
      </div>
    </div>
  )
}

export default ExclusiveComponent;