import React, { useState } from 'react';
import './ContactUsPage.css';

const ContactUsPage = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://nss-website-backend.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        alert("Message sent successfully");
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(result.error || 'Failed to send message.');
      }
    } catch (error) {
      setStatus('Error connecting to server.');
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1>📬 Get in Touch with NSS</h1>
        <p className="contact-subtext">
          Have a question, suggestion, or want to collaborate with us? Fill out the form or reach us directly!
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input name="name" type="text" placeholder="Your Name" value={formData.name}  onChange={handleChange} required />
          <input name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" rows="6" value={formData.message} onChange={handleChange} required></textarea>
          <button type="submit">Send Message</button>
        </form>


        {status && <p className="status-message">{status}</p>}


        <div className="contact-details">
          <p><strong>Email:</strong> nss@ssn.edu.in</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Location:</strong> SSN College of Engineering, Kalavakkam – 603110</p>
        </div>

        <div className="social-icons">
          <a href="https://www.instagram.com/your_nss_page" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.youtube.com/@your_channel" target="_blank" rel="noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://twitter.com/your_handle" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://facebook.com/your_facebook_page" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
