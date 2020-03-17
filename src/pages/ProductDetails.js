import React from 'react';
import Menu from '../components/Menu/Menu';
import Footer from '../components/Footer/Footer';
import DetailsContainer from '../containers/DetailsContainer/DetailsContainer';
import {useParams} from 'react-router-dom';


function ProductDetails() {
  const {id} = useParams();
  console.log(id)  
  return (
    <div className="container">
      <Menu />
      <DetailsContainer 
        id={id}
      />
      <Footer />
    </div>
  )
}

export default ProductDetails;