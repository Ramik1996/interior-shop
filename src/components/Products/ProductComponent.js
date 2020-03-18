import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';

function ProductComponent(props) {
  return (
    <div className={`${props.category}-card`}>
      <img className="product-img" src={props.imgUrl} />
      <div className="description-product">
        <Link to={`/ProductDetails/${props.id}`} className="description-arrow">&gt;</Link>
        <h3 className="description-name">{props.name}</h3>
        <p className="description-text">{props.description}</p>
      </div>
    </div>
  )
}

export default ProductComponent;