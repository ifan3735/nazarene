import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [paymentIntentId, setPaymentIntentId] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      'your-client-secret-from-backend', {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      }
    );

    if (error) {
      setError(error.message);
    } else {
      setPaymentIntentId(paymentIntent.id);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe || !elements}>
        Pay
      </button>
      {error && <div>{error}</div>}
      {paymentIntentId && <div>Payment Successful! ID: {paymentIntentId}</div>}
    </form>
  );
};

export default CheckoutForm;
