import { SfButton, SfRating, SfCounter, SfLink, SfIconShoppingCart } from '@storefront-ui/react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useProducts } from '../ProductsContext';
import Alert from './Alert';

const ProductCard = () => {
  const { category } = useParams(); // Get the category from the URL
  const { products, setSelectedCategory, loading, addToCart } = useProducts();

  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [linkText, setLinkText] = useState('');
  const [linkUrl, setLinkUrl] = useState('');

  useEffect(() => {
    setSelectedCategory(category); // Set the selected category in context when the URL changes
  }, [category, setSelectedCategory]);

  const handleAddToCart = (product) => {
    addToCart(product, 1); // Add 1 item to the cart by default
    setAlertMessage(`Product has been added to the cart.`);
    setLinkText('View Cart');
    setLinkUrl('/cart-details');
    setIsAlertVisible(true); // Show the alert
  };

  const handleCloseAlert = () => {
    setIsAlertVisible(false); // Close the alert
  };

  // Filter products by category if available
  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  return (
    <div>
        <h1 className='font-bold text-2xl mb-5'>{products.length}  Products</h1>
          {/* Alert Component */}
      {isAlertVisible && <Alert message={alertMessage} onClose={handleCloseAlert} linkText={linkText} linkUrl={linkUrl} />}

      {/* Grid container with responsive column count */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {/* Skeleton loader shown when loading is true */}
        {loading
          ? [...Array(20)].map((_, index) => (
              <div key={index} className="border border-neutral-200 rounded-md hover:shadow-lg max-w-[450px] animate-pulse">
                {/* Skeleton Loader for Product Image */}
                <div className="relative p-4 bg-neutral-200 h-60 w-full rounded-md">
                  <div className="bg-gray-300 w-full h-full rounded-md"></div>
                </div>

                {/* Skeleton Loader for Product Details */}
                <div className="p-4 border-t border-neutral-200">
                  <div className="bg-gray-300 h-4 mb-2 w-3/4 rounded-md"></div>
                  <div className="flex items-center pt-1">
                    <div className="bg-gray-300 w-16 h-4 rounded-md mr-2"></div>
                    <div className="bg-gray-300 w-16 h-4 rounded-md"></div>
                  </div>
                  <div className="bg-gray-300 h-6 mt-4 mb-2 w-1/2 rounded-md"></div>
                  <div className="bg-gray-300 h-10 w-1/2 rounded-md"></div>
                </div>
              </div>
            ))
          : filteredProducts.map((product) => (
              <div key={product.id} className="border border-neutral-200 rounded-md hover:shadow-lg max-w-[450px]">
                
                {/* Image and button section */}
                <div className="relative">
                  <Link to={`/product/${product.id}`} className="block">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="object-cover h-auto aspect"
                      width="300"
                      height="300"
                    />
                  </Link>
                </div>

                {/* Product details */}
                <div className="p-4 border-t border-neutral-200">
                  <Link to={`/product/${product.id}`} className="no-underline text-neutral-900 font-semibold">
                    {product.title}
                  </Link>
                  <div className="flex items-center pt-1">
                    <SfRating size="xs" value={5} max={5} />
                    <SfLink href="#" variant="secondary" className="pl-1 no-underline">
                      <SfCounter size="xs">{123}</SfCounter>
                    </SfLink>
                  </div>
                  <span className="block pb-2 font-bold typography-text-lg">{`$${product.price}`}</span>
                  <Link>
                    <SfButton size="sm" slotPrefix={<SfIconShoppingCart size="sm" />} onClick={() => handleAddToCart(product)}>
                      Add to cart
                    </SfButton>
                  </Link>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default ProductCard;



//mobile

// import { SfButton, SfRating, SfCounter, SfLink, SfIconShoppingCart } from '@storefront-ui/react';
// import { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import { useProducts } from '../ProductsContext';
// import Alert from './Alert';

// const ProductCard = () => {
//   const { category } = useParams(); // Get the category from the URL
//   const { products, setSelectedCategory, loading, addToCart } = useProducts();

//   const [isAlertVisible, setIsAlertVisible] = useState(false);
//   const [alertMessage, setAlertMessage] = useState('');
//   const [linkText, setLinkText] = useState('');
//   const [linkUrl, setLinkUrl] = useState('');

//   useEffect(() => {
//     setSelectedCategory(category); // Set the selected category in context when the URL changes
//   }, [category, setSelectedCategory]);

//   const handleAddToCart = (product) => {
//     addToCart(product, 1); // Add 1 item to the cart by default
//     setAlertMessage(`Product has been added to the cart.`);
//     setLinkText('View Cart');
//     setLinkUrl('/cart-details');
//     setIsAlertVisible(true); // Show the alert
//   };

//   const handleCloseAlert = () => {
//     setIsAlertVisible(false); // Close the alert
//   };

//   // Filter products by category if available
//   const filteredProducts = category
//     ? products.filter((product) => product.category === category)
//     : products;

//   return (
//     <div className="container mx-auto px-4 py-6">
//       <h1 className="font-bold text-2xl mb-5">{products.length} Products</h1>

//       {/* Alert Component */}
//       {isAlertVisible && <Alert message={alertMessage} onClose={handleCloseAlert} linkText={linkText} linkUrl={linkUrl} />}

//       {/* Grid container with responsive column count */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
//         {/* Skeleton loader shown when loading is true */}
//         {loading
//           ? [...Array(20)].map((_, index) => (
//               <div key={index} className="border border-neutral-200 rounded-md hover:shadow-lg max-w-[450px] animate-pulse">
//                 {/* Skeleton Loader for Product Image */}
//                 <div className="relative p-4 bg-neutral-200 h-60 w-full rounded-md">
//                   <div className="bg-gray-300 w-full h-full rounded-md"></div>
//                 </div>

//                 {/* Skeleton Loader for Product Details */}
//                 <div className="p-4 border-t border-neutral-200">
//                   <div className="bg-gray-300 h-4 mb-2 w-3/4 rounded-md"></div>
//                   <div className="flex items-center pt-1">
//                     <div className="bg-gray-300 w-16 h-4 rounded-md mr-2"></div>
//                     <div className="bg-gray-300 w-16 h-4 rounded-md"></div>
//                   </div>
//                   <div className="bg-gray-300 h-6 mt-4 mb-2 w-1/2 rounded-md"></div>
//                   <div className="bg-gray-300 h-10 w-1/2 rounded-md"></div>
//                 </div>
//               </div>
//             ))
//           : filteredProducts.map((product) => (
//               <div key={product.id} className="border border-neutral-200 rounded-md hover:shadow-lg max-w-[450px]">
                
//                 {/* Image and button section */}
//                 <div className="relative">
//                   <Link to={`/product/${product.id}`} className="block">
//                     <img
//                       src={product.image}
//                       alt={product.title}
//                       className="object-cover h-auto aspect-square rounded-md"
//                       width="300"
//                       height="300"
//                     />
//                   </Link>
//                 </div>

//                 {/* Product details */}
//                 <div className="p-4 border-t border-neutral-200">
//                   <Link to={`/product/${product.id}`} className="no-underline text-neutral-900 font-semibold">
//                     {product.title}
//                   </Link>
//                   <div className="flex items-center pt-1">
//                     <SfRating size="xs" value={5} max={5} />
//                     <SfLink href="#" variant="secondary" className="pl-1 no-underline">
//                       <SfCounter size="xs">{123}</SfCounter>
//                     </SfLink>
//                   </div>
//                   <span className="block pb-2 font-bold typography-text-lg">{`$${product.price}`}</span>
//                   <Link>
//                     <SfButton
//                       size="sm"
//                       slotPrefix={<SfIconShoppingCart size="sm" />}
//                       onClick={() => handleAddToCart(product)}
//                       className="w-full mt-4"
//                     >
//                       Add to cart
//                     </SfButton>
//                   </Link>
//                 </div>
//               </div>
//             ))}
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
