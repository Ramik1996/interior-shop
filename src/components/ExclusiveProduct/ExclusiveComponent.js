import React from 'react';
import './style.css';

function ExclusiveComponent(props) {
  return (
    <div className="exclusive-product" style={{backgroundImage: `url(${props.imgUrl})`}}>
      <div className="exclusive-text">
        <p className="exclusive-head">{props.header}</p>
        <h2 className="exclusive-name">{props.name}</h2>
        <p className="exclusive-description">{props.description}</p>
        <button className="button">Order us <span className="arrow">&gt;</span></button>
      </div>
    </div>
  )
}

export default ExclusiveComponent;