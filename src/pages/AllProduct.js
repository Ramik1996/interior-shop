import React from 'react';
import './style.css';
import Header from '../components/Header/Header';
import ProductContainer from '../containers/Products/ProductContainer';
import ExclusiveContainer from '../containers/ExlusiveProduct/ExclusiveContainer';
import Footer from '../components/Footer/Footer';

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
      <Footer />
    </div>
  )
}

export default AllProduct;