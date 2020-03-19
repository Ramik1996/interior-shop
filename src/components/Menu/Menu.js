import React from 'react';
import './style.css';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

function Menu() {
  return (
    <div className="header padding-site">
      <Link to="/" className="logo"><img src="/img/logo.svg" /></Link>
      <div className="menu">
        <Link to="/" className="menu-link">home</Link>
        <Link to="/AllProduct" className="menu-link">products</Link>
        <Link to="/ContactPage" className="menu-link">contact</Link>
      </div>
    </div>
  )
}

export default Menu;