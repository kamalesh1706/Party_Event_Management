// PaymentForm.jsx

import React, { useState } from 'react';
import './PaymentForm.css';
import Navbar from '../components/Navbar';
import FooterComponent from './FooterComponent';

const PaymentForm = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform payment processing logic here (you might want to integrate with a payment gateway)

    // For the sake of the example, just mark the payment as successful after submitting the form
    setPaymentSuccess(true);
  };

  return (
    <>
    <Navbar/>
    <div className="payment-form-container">
      {!paymentSuccess ? (
        <form className="payment-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} required />
          </label>
          <label>
            Location:
            <input type="text" placeholder="City, Country" value={location} onChange={(e) => setLocation(e.target.value)} required />
          </label>
          <label>
            Card Number:
            <input type="text" placeholder="1234 5678 " value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />
          </label>
          <label>
            CVV:
            <input type="text" placeholder="123" value={cvv} onChange={(e) => setCvv(e.target.value)} required />
          </label>
          <button type="submit">Make Payment</button>
        </form>
      ) : (
        <div className="payment-success">
          <p>Payment Successfully</p>
          <div className="party-bumps-animation"></div>
        </div>
      )}
    </div>
    <FooterComponent/>
    </>
  );
};

export default PaymentForm;
