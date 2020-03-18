import React from 'react';
import './style.css';

function FooterComponent(props) {
  return (
    <div className="footer padding-site">
      <div className="footer-information">
        <div className="contact">
          <h3 className="footer-head">contact us</h3>
          <p className="footer-inform-text">132A Bridge Road Richmond VIC Australia.</p>
          <p className="footer-inform-text">Talk to us on 1300 132 info@interior.com</p>
        </div>
        <div className="let-stay">
          <h3 className="footer-head">let's stay in touch</h3>
          <p className="footer-inform-text">Suscribe to know about our latest news, products and special offers just for suscribers.</p>
          <form className="email">
            <input type="text" placeholder="your email" onChange={props.onChange} value={props.value}/>
            <div className="submitEmail">
              <img className="imgPlane" src="/img/plane.svg" onClick={props.onClick} />
            </div>
          </form>
        </div>
      </div>
      <div className="footer-text">
        <p className="copyright">&copy; Copyright - INTERIOR 2016. All Rights Reserved.</p>
        <p className="privacy">Terms & Conditions  /  Privacy policy & Cookies</p>
      </div>
    </div>
  )
}

export default FooterComponent;