import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51KedP1Jo0XIvXVBFLSlFGAyYRjPt22eeD8glqG1ugfbPnjc1NhDZCJZl3PN2rgeu0lBIMXEvrBsugPsV4RR9v0YJ005dI0Nwgr';
  const onToken = (token) => {
    console.log('token', token);
    alert('Payment succesful');
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Clothing Store"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
