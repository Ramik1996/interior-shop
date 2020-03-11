import React from 'react';
import ProductContainer from '../../containers/Products/ProductContainer';
import './style.css';

function NewProduct() {
  return (
    <div className="new-product padding-site">
      <div className="header-product">
        <div className="category">
          <div className="category-list">Featured</div>
          <div className="category-list">New</div>
        </div>
        <a href="#" className="explore-all">explore all</a>
      </div>
      <ProductContainer 
        category="new-product"
      />
    </div>
  )
}

export default NewProduct;