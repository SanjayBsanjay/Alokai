
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import "./style.css"
import ProductsDetails from './pages/ProductsDetails'
import MyCart from './pages/MyCart'
import Checkout from './pages/Checkout'
import { ProductsProvider } from './ProductsContext'
import CategoryProducts from './pages/CategoryProducts'


const App = () => {
  return (
    <div>
      <ProductsProvider>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/category/:categoryName' element={<CategoryProducts/>} />
        <Route path='/product/:id' element={<ProductsDetails/>} />
        <Route path='/cart-details' element={<MyCart/>} />
        <Route path='/checkout' element={<Checkout/>} />
      </Routes>
      </ProductsProvider>
    </div>
  )
}

export default App




// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { ProductsProvider } from './ProductsContext';
// import ProductCategory from './Components/ProductCategory';
// import ProductsList from './Components/ProductsList';
// import Header from './Components/Header';

// function App() {
//   return (
//     <ProductsProvider>
//     <div className="container mx-auto px-4 py-8">
//       <ProductCategory />
//       <Routes>

//         {/* Route to display all products */}
//         <Route path="/" element={<Header />} />

//         {/* Route for a specific category */}
//         <Route path="/category/:category" element={<ProductsList />} />
//       </Routes>
//     </div>
//   </ProductsProvider>
//   );
// }

// export default App;