import {
  SfButton,
  SfIconShoppingCart,
  SfIconRemove,
  SfIconAdd,
  SfIconSell,
  SfRating,
  SfCounter,
} from '@storefront-ui/react';
import { useCounter } from 'react-use';
import { useId } from 'react';
import { clamp } from '@storefront-ui/shared';
import { Link, useParams } from 'react-router-dom';
import { useProducts } from '../ProductsContext';
import { useEffect, useState } from 'react';

export default function SingleProductDetails() {
  const inputId = useId();
  const min = 1;
  const max = 999;
  const [value, { inc, dec, set }] = useCounter(min);

  const { id } = useParams(); // Extract the product ID from the URL
  const { products, addToCart, loading } = useProducts(); // Get products from context
  const [product, setProduct] = useState(null); // Local state to hold the selected product

  // Find the product that matches the ID from the URL
  useEffect(() => {
    const foundProduct = products.find((prod) => prod.id === parseInt(id)); // Compare IDs
    setProduct(foundProduct); // Set the found product in the state
  }, [id, products]);

  // Handle quantity change
  function handleOnChange(event) {
    const { value: currentValue } = event.target;
    const nextValue = parseFloat(currentValue);
    set(Number(clamp(nextValue, min, max)));
  }

  // If the data is loading, show a loading state
  if (loading) {
    return (
      <div className="flex flex-col md:flex-row gap-8 md:max-w-[1024px] mx-auto mt-10">
        {/* Skeleton for Product Image */}
        <div className="md:w-1/2 flex justify-center mb-4 md:mb-0 mr-20 animate-pulse">
          <div className="bg-neutral-300 rounded-md aspect h-80 w-full"></div>
        </div>

        {/* Skeleton for Product Details */}
        <div className="md:w-1/2 flex flex-col justify-between animate-pulse">
          {/* Skeleton for Product Title */}
          <div className="mb-4">
            <div className="bg-neutral-300 w-1/2 h-6 mb-2 rounded-md"></div>
            <div className="bg-neutral-300 w-1/4 h-8 rounded-md"></div>
          </div>

          {/* Skeleton for Product Rating */}
          <div className="inline-flex items-center mt-4 mb-2">
            <div className="bg-neutral-300 w-16 h-4 rounded-md"></div>
            <div className="ml-1 bg-neutral-300 w-10 h-4 rounded-md"></div>
            <div className="ml-2 bg-neutral-300 w-24 h-4 rounded-md"></div>
          </div>

          {/* Skeleton for Product Description */}
          <div className="bg-neutral-300 w-3/4 h-4 mb-4 rounded-md"></div>

          {/* Skeleton for Add to Cart Button */}
          <div className="py-4 mb-4 border-gray-200 border-y">
            <div className="flex gap-4">
              <div className="bg-neutral-300 h-12 w-full rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // If the product isn't found, show an error message
  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <section className="md:max-w-[1024px] mx-auto mt-10">
      {/* Product Badge (Sale) */}
      {/* <div className="inline-flex items-center justify-center text-sm font-medium text-white bg-secondary-600 py-1.5 px-3 mb-4">
        <SfIconSell size="sm" className="mr-1.5" />
        Sale
      </div> */}

      {/* Product Info */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left: Product Image */}
        <div className="relative  w-1/2">
        {/* md:w-1/2 flex justify-center mb-4 md:mb-0 mr-20 */}
          <img
            src={product.image}
            alt={product.title}
            className="object-cover h-auto aspect"
            width="300"
            height="300"
          />
        </div>

        {/* Right: Product Details */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="mb-1 font-bold typography-headline-4">{product.title}</h1>
            <strong className="block font-bold typography-headline-3">{`$${product.price}`}</strong>
            
            <div className="inline-flex items-center mt-4 mb-2">
              <SfRating size="xs" value={3} max={5} />
              <SfCounter className="ml-1" size="xs">123</SfCounter>
              <Link to="/reviews" className="ml-2 text-xs text-neutral-500">123 reviews</Link>
            </div>

            <ul className="mb-4 font-normal typography-text-sm">
              <li>{product.description}</li>
            </ul>
          </div>

          {/* Quantity Selector and Add to Cart */}
          <div className="py-4 mb-40 border-gray-200 border-y">
            <div className="items-start xs:flex">
              <div className="flex flex-col items-stretch xs:items-center xs:inline-flex">
                <div className="flex border border-neutral-300 rounded-md">
                  <SfButton
                    variant="tertiary"
                    square
                    className="rounded-r-none p-3"
                    disabled={value <= min}
                    aria-controls={inputId}
                    aria-label="Decrease value"
                    onClick={() => dec()}
                  >
                    <SfIconRemove />
                  </SfButton>
                  <input
                    id={inputId}
                    type="number"
                    role="spinbutton"
                    className="grow appearance-none mx-2 w-8 text-center bg-transparent font-medium"
                    min={min}
                    max={max}
                    value={value}
                    onChange={handleOnChange}
                  />
                  <SfButton
                    variant="tertiary"
                    square
                    className="rounded-l-none p-3"
                    disabled={value >= max}
                    aria-controls={inputId}
                    aria-label="Increase value"
                    onClick={() => inc()}
                  >
                    <SfIconAdd />
                  </SfButton>
                </div>
              </div>

              <Link to="/cart-details" className="w-full xs:ml-4">
                <SfButton
                  size="lg"
                  className="w-full xs:ml-4"
                  slotPrefix={<SfIconShoppingCart size="sm" />}
                  onClick={() => addToCart(product, value)}
                >
                  Add to cart
                </SfButton>
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}


//mobile
// import {
//   SfButton,
//   SfIconShoppingCart,
//   SfIconRemove,
//   SfIconAdd,
//   SfIconSell,
//   SfRating,
//   SfCounter,
// } from '@storefront-ui/react';
// import { useCounter } from 'react-use';
// import { useId } from 'react';
// import { clamp } from '@storefront-ui/shared';
// import { Link, useParams } from 'react-router-dom';
// import { useProducts } from '../ProductsContext';
// import { useEffect, useState } from 'react';

// export default function SingleProductDetails() {
//   const inputId = useId();
//   const min = 1;
//   const max = 999;
//   const [value, { inc, dec, set }] = useCounter(min);

//   const { id } = useParams(); // Extract the product ID from the URL
//   const { products, addToCart, loading } = useProducts(); // Get products from context
//   const [product, setProduct] = useState(null); // Local state to hold the selected product

//   // Find the product that matches the ID from the URL
//   useEffect(() => {
//     const foundProduct = products.find((prod) => prod.id === parseInt(id)); // Compare IDs
//     setProduct(foundProduct); // Set the found product in the state
//   }, [id, products]);

//   // Handle quantity change
//   function handleOnChange(event) {
//     const { value: currentValue } = event.target;
//     const nextValue = parseFloat(currentValue);
//     set(Number(clamp(nextValue, min, max)));
//   }

//   // If the data is loading, show a loading state
//   if (loading) {
//     return (
//       <div className="flex flex-col md:flex-row gap-8 md:max-w-[1024px] mx-auto mt-10">
//         {/* Skeleton for Product Image */}
//         <div className="md:w-1/2 flex justify-center mb-4 md:mb-0 mr-20 animate-pulse">
//           <div className="bg-neutral-300 rounded-md aspect h-80 w-full"></div>
//         </div>

//         {/* Skeleton for Product Details */}
//         <div className="md:w-1/2 flex flex-col justify-between animate-pulse">
//           {/* Skeleton for Product Title */}
//           <div className="mb-4">
//             <div className="bg-neutral-300 w-1/2 h-6 mb-2 rounded-md"></div>
//             <div className="bg-neutral-300 w-1/4 h-8 rounded-md"></div>
//           </div>

//           {/* Skeleton for Product Rating */}
//           <div className="inline-flex items-center mt-4 mb-2">
//             <div className="bg-neutral-300 w-16 h-4 rounded-md"></div>
//             <div className="ml-1 bg-neutral-300 w-10 h-4 rounded-md"></div>
//             <div className="ml-2 bg-neutral-300 w-24 h-4 rounded-md"></div>
//           </div>

//           {/* Skeleton for Product Description */}
//           <div className="bg-neutral-300 w-3/4 h-4 mb-4 rounded-md"></div>

//           {/* Skeleton for Add to Cart Button */}
//           <div className="py-4 mb-4 border-gray-200 border-y">
//             <div className="flex gap-4">
//               <div className="bg-neutral-300 h-12 w-full rounded-md"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // If the product isn't found, show an error message
//   if (!product) {
//     return <div>Product not found!</div>;
//   }

//   return (
//     <section className="md:max-w-[1024px] mx-auto mt-10">
//       {/* Product Badge (Sale) */}
//       {/* <div className="inline-flex items-center justify-center text-sm font-medium text-white bg-secondary-600 py-1.5 px-3 mb-4">
//         <SfIconSell size="sm" className="mr-1.5" />
//         Sale
//       </div> */}

//       {/* Product Info */}
//       <div className="flex flex-col md:flex-row gap-8">
//         {/* Left: Product Image */}
//         <div className="relative w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
//           <img
//             src={product.image}
//             alt={product.title}
//             className="object-cover w-full h-auto max-w-[300px] mx-auto md:max-w-[500px]"
//             width="300"
//             height="300"
//           />
//         </div>

//         {/* Right: Product Details */}
//         <div className="md:w-1/2 flex flex-col justify-between">
//           <div>
//             <h1 className="mb-1 font-bold text-lg md:text-2xl">{product.title}</h1>
//             <strong className="block font-bold text-xl">{`$${product.price}`}</strong>
            
//             <div className="inline-flex items-center mt-4 mb-2">
//               <SfRating size="xs" value={3} max={5} />
//               <SfCounter className="ml-1" size="xs">123</SfCounter>
//               <Link to="/reviews" className="ml-2 text-xs text-neutral-500">123 reviews</Link>
//             </div>

//             <ul className="mb-4 font-normal text-sm text-neutral-700">
//               <li>{product.description}</li>
//             </ul>
//           </div>

//           {/* Quantity Selector and Add to Cart */}
//           <div className="py-4 mb-40 border-gray-200 border-y">
//             <div className="flex flex-col md:flex-row items-center">
//               {/* Quantity Selector */}
//               <div className="flex border border-neutral-300 rounded-md mb-4 md:mb-0">
//                 <SfButton
//                   variant="tertiary"
//                   square
//                   className="rounded-r-none p-3"
//                   disabled={value <= min}
//                   aria-controls={inputId}
//                   aria-label="Decrease value"
//                   onClick={() => dec()}
//                 >
//                   <SfIconRemove />
//                 </SfButton>
//                 <input
//                   id={inputId}
//                   type="number"
//                   role="spinbutton"
//                   className="grow appearance-none mx-2 w-12 text-center bg-transparent font-medium"
//                   min={min}
//                   max={max}
//                   value={value}
//                   onChange={handleOnChange}
//                 />
//                 <SfButton
//                   variant="tertiary"
//                   square
//                   className="rounded-l-none p-3"
//                   disabled={value >= max}
//                   aria-controls={inputId}
//                   aria-label="Increase value"
//                   onClick={() => inc()}
//                 >
//                   <SfIconAdd />
//                 </SfButton>
//               </div>

//               {/* Add to Cart Button */}
//               <Link to="/cart-details" className="w-full md:w-auto">
//                 <SfButton
//                   size="lg"
//                   className="w-full md:w-auto"
//                   slotPrefix={<SfIconShoppingCart size="sm" />}
//                   onClick={() => addToCart(product, value)}
//                 >
//                   Add to cart
//                 </SfButton>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
