import React from 'react';
import './style.css';
import Menu from '../components/Menu/Menu';
import Slider from '../components/Slider/Slider';
import NewProduct from '../components/NewProduct/NewProduct';
import ExclusiveContainer from '../containers/ExlusiveProduct/ExclusiveContainer';
import FooterContainer from '../containers/FooterContainer/FooterContainer';
import CategoryComponent from '../components/CategoryProducts/CategoryComponent';
import NewProductContainer from '../containers/NewProduct/NewProductContainer';


function Main() {
  return (
    <div className="container">
      <Menu />
      <Slider
        id="11"
        backgroundImg="/img/slider-img.jpg"
        name="trending"
        product="Pouf chair"
        description="Genuine and artificial leather, as well as textiles. 
        In the form of a filler, polyurethane foam, foam rubber or other similar raw materials are used."
      />
      <NewProductContainer />
      <ExclusiveContainer />
      <CategoryComponent 
        nameCategory="Trending product"
      />
      <Slider
        id="13" 
        backgroundImg="/img/slider-two.jpg"
        name="hot deal"
        product="Table"
        description="Convenient round table. Adjustable legs ensure stability even on uneven floors."
      />
      <FooterContainer />
    </div>
  );
}

export default Main;
