import React from 'react';
import './style.css';

function Menu() {
  return (
    <div className="header clearfix padding-site">
      <a href=""><img src="/img/logo.svg" /></a>
      <div className="menu clearfix">
        <div className="menu-list"><a href="#" className="menu-link">home</a></div>
        <div className="menu-list"><a href="#" className="menu-link">products</a></div>
        <div className="menu-list"><a href="#" className="menu-link">contact</a></div>
      </div>
    </div>
  )
}

export default Menu;