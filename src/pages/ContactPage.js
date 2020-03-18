import React from 'react';
import './style.css';
import Header from '../components/Header/Header';
import FooterContainer from '../containers/FooterContainer/FooterContainer';
import ContactContainer from '../containers/ContactInformation/ContactContainer';

function ContactPage() {
  return (
    <div className="container">
      <Header 
        nameHead="Contact Us"
      />
      <ContactContainer />
      <FooterContainer />
    </div>
  )
}

export default ContactPage;