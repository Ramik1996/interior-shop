import React from 'react';
import './style.css';
import ProductContainer from '../../containers/Products/ProductContainer';
import {Link} from 'react-router-dom';

function CategoryComponent(props) {
  return (
    <div className="category-product">
      <div className="head-category padding-site">
        <p className="name-category">{props.nameCategory}</p>
        <Link to="/AllProduct" className="explore-all">explore all</Link>
      </div>
      <ProductContainer 
        category="trending-product"
      />
    </div>
  )
}

export default CategoryComponent;