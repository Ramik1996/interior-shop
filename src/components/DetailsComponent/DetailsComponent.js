import React from 'react';
import './style.css';

function DetailsComponent(props) {
  return (
    <div className="details-product padding-site">
      <div className="details-img">
        <img className="product-img" src={props.product.imgUrl} />
      </div>
      <div className="details">
        <h2 className="details-name">{props.product.name}</h2>
        <p className="price">{props.product.price}</p>
        <button className="button" nameProduct={props.product.name} onClick={() => props.onClick(props)}>Order<span className="arrow">&gt;</span></button>
        <p className="details-description">{props.product.description}</p>
      </div>
    </div>
  )
}

export default DetailsComponent;