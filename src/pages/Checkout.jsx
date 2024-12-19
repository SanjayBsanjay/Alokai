import React from 'react'
import CheckoutInfo from '../Components/CheckoutInfo'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const Checkout = () => {
  return (
    <div className='mt-12'>
      <div>
        <Header/>
      </div>
      <div>
        <CheckoutInfo/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Checkout