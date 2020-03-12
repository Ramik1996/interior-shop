import React from 'react';
import './style.css';

function ContactInformation(props) {
  return (
    <div className="contact-card">
      <div className="contact-content">
        <img className="img-gps" src='/img/gps.svg' />
        <p className="state">{props.state}</p>
        <p className="title">Phone:</p>
        <p className="information">{props.phone}</p>
        <p className="title">Email:</p>
        <p className="information">{props.email}</p>
        <p className="title">Address:</p>
        <p className="information">{props.address}</p>
      </div>
    </div>
  )
}

export default ContactInformation;