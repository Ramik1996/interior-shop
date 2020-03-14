import React from 'react';
import './style.css';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

function Menu() {
  return (
    <div className="header clearfix padding-site">
      <Link to="/"><img src="/img/logo.svg" /></Link>
      <div className="menu clearfix">
        <div className="menu-list"><Link to="/" className="menu-link">home</Link></div>
        <div className="menu-list"><Link to="/AllProduct" className="menu-link">products</Link></div>
        <div className="menu-list"><Link to="/ContactPage" className="menu-link">contact</Link></div>
      </div>
    </div>
  )
}

export default Menu;