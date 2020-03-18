import React, {Component} from 'react';
import FooterComponent from '../../components/Footer/FooterComponent';

class FooterContainer extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      email: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({email: event.target.value})
  }

  handleClick() {
    alert(`Thank you for contacting you will be contacted at this address: ${this.state.email}`);
    this.setState({
      value: this.state.email,
      email: ''
    });
  }

  render() {
    return(
      <FooterComponent 
        onClick={this.handleClick}
        onChange={this.handleChange}
        value={this.state.email}
        email={this.state.value}
      />
    )
  }

}

export default FooterContainer;