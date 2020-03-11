import React from 'react';
import './style.css';
import ProductContainer from '../../containers/Products/ProductContainer';

function CategoryComponent(props) {
  return (
    <div className="category-product padding-site">
      <div className="head-category">
        <p className="name-category">{props.nameCategory}</p>
        <a href="#" className="explore-all">explore all</a>
      </div>
      <ProductContainer 
        category="trending-product"
      />
    </div>
  )
}

export default CategoryComponent;