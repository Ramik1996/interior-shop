import React from 'react';
import ProductContainer from '../../containers/Products/ProductContainer';
import './style.css';
import {Link} from "react-router-dom";

function NewProduct(props) {
  return (
    <div className="new-product">
      <div className="header-product padding-site">
        <div className={`category-${props.categoryHeader}`}>
          <div className="category-list" id="featured" onClick={props.onClick}>Featured</div>
          <div className="category-list" id="new" onClick={props.onClick}>New</div>
        </div>
        <Link to="/AllProduct" className="explore-all">explore all</Link>
      </div>
      <ProductContainer 
        category={props.categoryName}
      />
    </div>
  )
}

export default NewProduct;