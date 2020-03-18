import React from 'react';
import Menu from '../components/Menu/Menu';
import FooterContainer from '../containers/FooterContainer/FooterContainer';
import DetailsContainer from '../containers/DetailsContainer/DetailsContainer';
import {useParams} from 'react-router-dom';


function ProductDetails() {
  const {id} = useParams();  
  return (
    <div className="container">
      <Menu />
      <DetailsContainer 
        id={id}
      />
      <FooterContainer />
    </div>
  )
}

export default ProductDetails;