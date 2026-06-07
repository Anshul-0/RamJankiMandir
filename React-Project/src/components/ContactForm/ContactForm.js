import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    purpose: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('🙏 Jai Shree Ram! Your message has been received. We will get back to you soon.');
    setFormData({
      name: '',
      phone: '',
      email: '',
      purpose: '',
      message: ''
    });
  };

  return (
    <div className="contact-form">
      <h3>Send Us a Message</h3>
      <p className="form-subtitle">Have a question, want to participate in an event, or wish to make an offering? Reach out to us below.</p>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Devotee's name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="+91 00000 00000"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Purpose of Contact</label>
          <select
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
          >
            <option value="">Select purpose...</option>
            <option>General Inquiry</option>
            <option>Puja / Havan Booking</option>
            <option>Festival Events</option>
            <option>Donation</option>
            <option>Volunteering</option>
            <option>Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Your Message</label>
          <textarea
            name="message"
            placeholder="Write your message here... Jai Shree Ram 🙏"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">
          🙏 &nbsp; Send Message — Jai Shree Ram
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
