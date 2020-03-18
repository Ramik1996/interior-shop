import React from 'react';
import './style.css';
import Header from '../components/Header/Header';
import ProductContainer from '../containers/Products/ProductContainer';
import ExclusiveContainer from '../containers/ExlusiveProduct/ExclusiveContainer';
import FooterContainer from '../containers/FooterContainer/FooterContainer';

function AllProduct() {
  return (
    <div className="container">
      <Header 
        nameHead="Our Product Range"
      />
      <ProductContainer 
        category="all-product"
      />
      <ExclusiveContainer />
      <FooterContainer />
    </div>
  )
}

export default AllProduct;