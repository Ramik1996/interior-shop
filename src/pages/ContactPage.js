import React from 'react';
import './style.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ContactContainer from '../containers/ContactInformation/ContactContainer';

function ContactPage() {
  return (
    <div className="container">
      <Header 
        nameHead="Contact Us"
      />
      <ContactContainer />
      <Footer />
    </div>
  )
}

export default ContactPage;