import React, {Component} from 'react';
import dataProducts from '../../constant/dataProducts';
import ProductComponent from '../../components/Products/ProductComponent';

class ProductContainer extends Component {
  constructor() {
    super()
  }
  render() {
    const dateProduct = dataProducts.map(product => {
      if (product.category.indexOf(this.props.category) !== -1) {
        return (
          <ProductComponent
            key={product.id}
            imgUrl={product.imgUrl}
            name={product.name}
            description={product.description}
            category={this.props.category}
          />
        )
      }
    });
    return (
      <div className="product-content padding-site">
        {dateProduct}
      </div>
    )
  }
}

export default ProductContainer;