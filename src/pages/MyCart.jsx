

import React from 'react';
import OrderSummary from '../Components/OrderSummary';
import CartDetails from '../Components/CartDetails';
import { SfIconArrowBack } from '@storefront-ui/react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const MyCart = () => {
  return (
    <div className="p-20">
      <div>
        <Header/>
      </div>

      <h1 className='font-bold text-4xl ml-5 mt-5 right-10 w-40'>My Cart</h1>
      {/* Back to Shopping Button */}
      {/* <div className="mb-6"> */}
      <Link to="/category/:categoryName" className="flex items-center text-primary-500 flex-row-reverse mb-7 mr-8  ">
      <span >Back to Shopping</span>  {/* Text on the left */}
      <SfIconArrowBack className="mr-2" />  {/* Icon on the right */}
    </Link>
    
      {/* </div> */}

      {/* Flex container for side-by-side layout */}
      <div className="flex space-x-4">
        {/* Left Side: CartDetails */}
        <div className="flex-1 p-4 border rounded-lg shadow-lg">
          <CartDetails />
        </div>

      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default MyCart;


