// Customize.jsx

import React, { useState } from 'react';
import './Customize.css'; // Import the CSS file for styling
import Navbar from '../components/Navbar';
import FooterComponent from './FooterComponent';

const Customize = () => {
  const [formData, setFormData] = useState({
    name: '',
    venueType: '',
    location: '',
    calendar: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can also make an API call to send the form data
    console.log('Form submitted:', formData);
    // Display a message to the user
    alert('Our team member will contact you soon.');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
    <Navbar/>
    <div className="custom-form">
      <form onSubmit={handleSubmit}>
        <label>
          Your Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Venue Type:
          <input
            type="text"
            name="venueType"
            value={formData.venueType}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Location:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Calendar:
          <input
            type="text"
            name="calendar"
            value={formData.calendar}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Anything else our Team Me should know:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
    <FooterComponent/>
    </>
  );
};

export default Customize;
