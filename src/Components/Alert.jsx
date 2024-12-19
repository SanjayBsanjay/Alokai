import React, { useState, useEffect } from 'react';
import { SfIconCheckCircle, SfIconClose } from '@storefront-ui/react';
import { Link } from 'react-router-dom'; // Import the Link component from react-router-dom

const Alert = ({ message, onClose, linkText, linkUrl }) => {
  // Automatically close the alert after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(); // Close the alert after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [onClose]);

  return (
    <div
      role="alert"
      className="flex items-start md:items-center max-w-[600px] shadow-md bg-positive-100 pr-2 pl-4 ring-1 ring-positive-200 typography-text-sm md:typography-text-base py-1 rounded-md fixed top-12 right-4 z-50"
    >
      <SfIconCheckCircle className="my-2 mr-2 text-positive-700 shrink-0" />
      <p className="py-2 mr-2">
        {message}{''}
        {linkText && linkUrl && (
          <Link
            to={'/cart-details'} // Use Link to navigate to the desired route
            className="text-primary-600 hover:text-blue-800 "
          >
            {linkText}
          </Link>
        )}
      </p>
      <button
        type="button"
        onClick={onClose}
        className="p-1.5 md:p-2 ml-auto rounded-md text-positive-700 hover:bg-positive-200 active:bg-positive-300 hover:text-positive-800 active:text-positive-900 focus-visible:outline focus-visible:outline-offset"
        aria-label="Close positive alert"
      >
        <SfIconClose className="hidden md:block" />
        <SfIconClose size="sm" className="block md:hidden" />
      </button>
    </div>
  );
};

export default Alert;
