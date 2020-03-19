import React, {Component} from 'react';
import dataProducts from '../../constant/dataProducts';
import DetailsComponent from '../../components/DetailsComponent/DetailsComponent';

class DetailsContainer extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(test) {
    alert(`Thanks for your order ${test.product.name}`)
  }

  render() {
    const productId = dataProducts.filter(item => {
      return item.id == this.props.id
    })[0];
    return (
      <DetailsComponent 
        product={productId}
        onClick={this.handleClick}
      /> 
    )
  }
}

export default DetailsContainer;