import React from 'react';
import './style.css';
import Menu from  '../Menu/Menu';

function Header(props) {
  return (
    <div className="header-site">
      <Menu />
      <h2 className="name-head">{props.nameHead}</h2>
    </div>
  )
}

export default Header;

