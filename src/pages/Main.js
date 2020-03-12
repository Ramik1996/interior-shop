import React from 'react';
import './style.css';
import Menu from '../components/Menu/Menu';
import Slider from '../components/Slider/Slider';
import NewProduct from '../components/NewProduct/NewProduct';
import ExclusiveContainer from '../containers/ExlusiveProduct/ExclusiveContainer';
import Footer from '../components/Footer/Footer';
import CategoryComponent from '../components/CategoryProducts/CategoryComponent';


function Main() {
  return (
    <div className="container">
      <Menu />
      <Slider
        backgroundImg="/img/slider-img.jpg"
        name="trending"
        product="Pouf chair"
        description="Genuine and artificial leather, as well as textiles. 
        In the form of a filler, polyurethane foam, foam rubber or other similar raw materials are used."
      />
      <NewProduct />
      <ExclusiveContainer />
      <CategoryComponent 
        nameCategory="Trending product"
      />
      <Slider 
        backgroundImg="/img/slider-two.jpg"
        name="hot deal"
        product="Table"
        description="Convenient round table. Adjustable legs ensure stability even on uneven floors."
      />
      <Footer />
    </div>
  );
}

export default Main;
