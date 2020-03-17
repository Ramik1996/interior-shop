import React, {Component} from 'react';
import dataProducts from '../../constant/dataProducts';
import DetailsComponent from '../../components/DetailsComponent/DetailsComponent';

class DetailsContainer extends Component {
  constructor() {
    super()
  }

  render() {
    const productId = dataProducts.filter(item => {
      return item.id == this.props.id
    })[0];
    return (
      <DetailsComponent 
        product={productId}
      /> 
    )
  }
}

export default DetailsContainer;