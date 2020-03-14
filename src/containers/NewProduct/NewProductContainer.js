import React, {Component} from 'react';
import NewProduct from '../../components/NewProduct/NewProduct';

class NewProductContainer extends Component {
  constructor() {
    super();
    this.state = {
      category: 'featured'
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    this.setState({
      category: `${event.target.id}`
    })
  }

  render() {
    return (
      <NewProduct 
        categoryName={`${this.state.category}-product`}
        onClick={this.onClick}
        categoryHeader={this.state.category}
      />
    )
  }
}

export default NewProductContainer;