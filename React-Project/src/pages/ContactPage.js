import React from 'react';
import PageHeader from '../components/PageHeader/PageHeader';
import ContactForm from '../components/ContactForm/ContactForm';
import PujaSchedule from '../components/PujaSchedule/PujaSchedule';
import './ContactPage.css';

const ContactItem = ({ icon, label, value }) => (
  <div className="contact-item">
    <div className="contact-item-icon">{icon}</div>
    <div>
      <div className="contact-item-label">{label}</div>
      <div className="contact-item-value">{value}</div>
    </div>
  </div>
);

const ContactPage = () => {
  return (
    <section id="page-contact" className="page-contact">
      <PageHeader
        eyebrow="🪷 Sampark • Contact"
        title="Visit &"
        titleHighlight="Connect With Us"
        intro="Come seek blessings at the divine feet of Shree Ram and Mata Janaki. We welcome all devotees with open arms."
        containerClass="contact-header"
      />

      <div className="contact-layout">
        <div className="contact-info">
          <h3>Find Your Way to the Mandir</h3>
          <p>
            Shree Ram Janaki Mandir is open to all devotees throughout the year. Come, offer your prayers, attend the kirtans, and experience the divine grace that has blessed this sacred space for generations.
          </p>

          <div className="contact-details">
            <ContactItem
              icon="📍"
              label="Address"
              value="Shree Ram Janaki Mandir<br/>Please contact for full address"
            />
            <ContactItem
              icon="🕐"
              label="Temple Hours"
              value="Morning: 6:00 AM – 11:00 AM<br/>Evening: 4:00 PM – 9:00 PM"
            />
            <ContactItem
              icon="🙏"
              label="For Puja Bookings"
              value="Contact General Manager<br/>Mr. Suyash Upadhyay"
            />
            <ContactItem
              icon="📅"
              label="Special Events"
              value="Ramanavami, Janaki Navami,<br/>All major Hindu festivals celebrated"
            />
          </div>
        </div>

        <ContactForm />
      </div>

      <PujaSchedule />
    </section>
  );
};

export default ContactPage;
