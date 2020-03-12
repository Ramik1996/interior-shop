import React from 'react';
import dataContact from '../../constant/dataContact';
import ContactComponent from '../../components/ContactInformation/ContactComponent';

function ContactContainer() {
  const dateContact = dataContact.map(contact => {
    return (
      <ContactComponent
        key={contact.id} 
        state={contact.state}
        phone={contact.phone}
        email={contact.email}
        address={contact.address}
      />
    )
  })
  return (
    <div className="contact-information padding-site">
      {dateContact}
    </div>
  )
}

export default ContactContainer;