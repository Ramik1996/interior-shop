import React from 'react';
import './style.css';

function ProductComponent(props) {
  return (
    <div className={`${props.category}-card`}>
      <img className="product-img" src={props.imgUrl} />
      <div className="description-product">
        <div className="description-arrow">&gt;</div>
        <h3 className="description-name">{props.name}</h3>
        <p className="description-text">{props.description}</p>
      </div>
    </div>
  )
}

export default ProductComponent;