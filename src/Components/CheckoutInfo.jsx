import React, { useState } from 'react';
import CheckoutAddress from './CheckoutAddress';
import ContactInform from './ContactInform';
import PaymentMethods from './PaymentMethod';
import OrderSummary from './OrderSummary';
import { SfButton, SfIconArrowBack } from '@storefront-ui/react';
import { Link } from 'react-router-dom';


const CheckoutInfo = () => {
  // States to toggle the visibility of each component
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [showBillingAddress, setShowBillingAddress] = useState(false);
  const [showShippingAddress, setShowShippingAddress] = useState(false);
  const [showPaymentMethod, setShowPaymentMethod] = useState(false);

  // Order Summary data (you can adjust this as per your use case)
  const orderSummary = {
    items: [
      { name: 'Product 1', price: 25.00 },
      { name: 'Product 2', price: 40.00 },
    ],
    shipping: 5.00,
    total: 70.00
  };

  return (
    <div className="flex justify-center items-start min-h-screen p-6 bg-gray-100">
      <div className="w-full max-w-7xl bg-white p-6 rounded-lg shadow-lg flex">
        {/* Left Section - Forms for Contact Info, Billing, Shipping, etc. */}
        <div className="flex-1 space-y-6">
          {/* Checkout Heading with Back Button */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Checkout</h1>
            {/* <SfIconArrowBack>
            <button className="text-primary-500">Back</button>
            </SfIconArrowBack> */}
            {/* <Link to="/products" className="flex items-center text-primary-500 flex-row-reverse">
      <span>Back to Shopping</span> 
      <SfIconArrowBack className="mr-2" />  
    </Link> */}
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Contact Information</h2>
            <p>Add your email and phone number to communicate with the store.</p>
            <SfButton
              onClick={() => setShowContactInfo(!showContactInfo)}
              className="bg-primary-700 text-white px-4 py-2 rounded"
            >
              {showContactInfo ? 'Hide Contact Information' : 'Add Contact Information'}
            </SfButton>
            {showContactInfo && <ContactInform />}
            
          </div>

          {/* Billing Address */}
          <div className="space-y-4 mt-6">
            <h2 className="text-xl font-semibold">Billing Address</h2>
            <p>Add a billing address. You will receive the invoice to the email address provided above.</p>
            <SfButton
              onClick={() => setShowBillingAddress(!showBillingAddress)}
              className="bg-primary-700 text-white px-4 py-2 rounded"
            >
              {showBillingAddress ? 'Hide Billing Address' : 'Add Billing Address'}
            </SfButton>
            {showBillingAddress && <CheckoutAddress />}
          </div>

          {/* Shipping Address */}
          <div className="space-y-4 mt-6">
            <h2 className="text-xl font-semibold">Shipping Address</h2>
            <p>Add a shipping address to view shipping details.</p>
            <SfButton
              onClick={() => setShowShippingAddress(!showShippingAddress)}
              className="bg-primary-700 text-white px-4 py-2 rounded"
            >
              {showShippingAddress ? 'Hide Shipping Address' : 'Add Shipping Address'}
            </SfButton>
            {showShippingAddress && <CheckoutAddress />}
          </div>

          {/* Shipping Details */}
          <div className="space-y-4 mt-6">
            <h2 className="text-xl font-semibold">Shipping details</h2>
            <p>Not available until a shipping address is provided.</p>
          </div>

          {/* Payment Method */}
          <div className="space-y-4 mt-6">
            <h2 className="text-xl font-semibold">Payment Method</h2>
            <SfButton
              onClick={() => setShowPaymentMethod(!showPaymentMethod)}
              className="bg-primary-700 text-white px-4 py-2 rounded"
            >
              {showPaymentMethod ? 'Hide Payment Method' : 'Add Payment Method'}
            </SfButton>
            {showPaymentMethod && <PaymentMethods />}
          </div>
        </div>

        {/* Right Section - Order Summary */}
        <div className="w-1/3 bg-gray-50 p-6 rounded-lg ml-5">
        <Link to="/cart-details" className="mb-8 flex items-center text-primary-500 flex-row-reverse ">
      <span>Back</span>  {/* Text on the left */}
      <SfIconArrowBack className="mr-2" />  {/* Icon on the right */}
    </Link>
          <OrderSummary/>
        </div>
      </div>
    </div>
  );
};



export default CheckoutInfo;
