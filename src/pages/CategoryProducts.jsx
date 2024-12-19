import React from 'react'
import Filters from '../Components/Filters'
import ProductCard from '../Components/ProductCard'
import { BreadCrumbs } from '../Components/BreadCrumbs'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const CategoryProducts = () => {
  
  return (
    <main>
      <div className='mt-20 p-1'> 
        <Header/>
      </div>
      <div className='max-w-48 mx-7 my-3'>
      <BreadCrumbs />
      </div>
      <div className='mx-8 my-8'>
        {/* <h1 className="text-3xl font-bold my-2">All Products</h1> */}
        <div className="flex gap-6">
          <Filters/>
          <div className="flex flex-col gap-8">
            <h2 className="text-lg font-bold"></h2>
            <div className="grid grid-cols-3 gap-4">
            </div>
          </div>
               <ProductCard  />
        </div>

      </div>
      <div>
        <Footer/>
      </div>
        
    </main>
  )
}

export default CategoryProducts