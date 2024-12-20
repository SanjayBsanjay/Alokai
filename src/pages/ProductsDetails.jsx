import React from 'react'
import SingleProductDetails from '../Components/SingleProductDetails'
import { BreadCrumbscategory } from '../Components/BreadCrumbscategory'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import ScrollToTopButton from '../Components/ScrollToTopButton'

const ProductsDetails = () => {
  return (
    // <div >
    //   <Header/>
    //    <BreadCrumbscategory/>
    //        <SingleProductDetails />
    // </div>

     <div className='mt-20 p-5'>
      <Header/>
    <div className=''>
      <BreadCrumbscategory/>
    </div>
    {/* Right Side: Single Product Details */}
    <div className="flex-1 mb-50">
        <SingleProductDetails />
    </div>
    <div>
    <ScrollToTopButton />
      <Footer/>
    </div>

    </div>

  )
}

export default ProductsDetails









    // <div>
    //   <Header/>
    // <div >
    //   <BreadCrumbscategory/>
    // <div className="flex flex-col md:flex-row">
    // {/* Left Side: Single Product */}
    // <div className="flex-1 p-4 mt-20">
    //     <SingleProduct />
    // </div>

    // {/* Right Side: Single Product Details */}
    // <div className="flex-1 p-4 mt-14">
    //     <SingleProductDetails />
    // </div>
    // </div>
    // </div>

    // </div>