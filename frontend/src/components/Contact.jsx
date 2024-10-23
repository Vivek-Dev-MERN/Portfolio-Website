import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      try {
        const response = await fetch('http://localhost:5000/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setStatus('Thank you for reaching out! I will get back to you soon.');
          setFormData({ name: '', email: '', message: '' }); // Clear form fields
        } else {
          setStatus('Failed to send the message. Please try again later.');
        }
      } catch (error) {
        setStatus('An error occurred. Please try again later.');
      }
    } else {
      setStatus('Please fill out all fields.');
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="btn">Send Message</button>
      </form>
      {status && <p className="status-message">{status}</p>}
    </section>
  );
};

export default Contact;
