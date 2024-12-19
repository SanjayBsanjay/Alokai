// import { SfButton } from '@storefront-ui/react';
// import { Link } from 'react-router-dom';

// const details = [
//   {
//    productTitle : "Super Ultrawide Screen QLED",
//    productTitle2 : "144Hz Curved Gaming Monitor",
//    productdesc :  "144HZ HIGH REFRESH RATE. CURVED GAMING MONITOR. QUANTUM DOT (QLED) TECHNOLOGY.",
//    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
// }]


// export default function Hero() {

//   return (
//     <div className="relative min-h-[576px]">
//       <picture>
//         <source srcSet="https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/hero-bg.png" media="(min-width: 768px)" />
//         <img
//           src="https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/hero-bg-mobile.png"
//           className="absolute w-full h-full z-[-1] object-cover"
//         />
//       </picture>
//       <div className="md:flex md:flex-row-reverse md:justify-center min-h-[576px] max-w-[1536px] mx-auto">
//         <div className="flex flex-col md:basis-2/4 md:items-stretch md:overflow-hidden">
//           <img
//             // src={product.image}
//             alt="Headphones"
//             className="h-full mt-20 mr-8"
//           />
//         </div>
//         <div className="p-4 md:p-10 md:flex md:flex-col md:justify-center md:items-start md:basis-2/4">
//           <p className="typography-text-xs md:typography-text-sm font-bold tracking-widest text-neutral-500 uppercase">
//             {/* Feel the music */}
//             {productTitle}
//             {/* 144Hz Curved Gaming Monitor */}
//           </p>
//           <h1 className="typography-display-2 md:typography-display-1 md:leading-[67.5px] font-bold mt-2 mb-4">
//             {/* New Wireless Pro */}
//             {/* Super Ultrawide Screen QLED */}
//             {productTitle2}
//           </h1>
//           <p className="typography-text-base md:typography-text-lg">
//             {/* Spatial audio. Adjustable ear cups. On-device controls. All-day battery. */}
//             {/* 144HZ HIGH REFRESH RATE. CURVED GAMING MONITOR. QUANTUM DOT (QLED) TECHNOLOGY. */}
//             {productdesc}
//           </p>
//           <div className="flex flex-col md:flex-row gap-4 mt-6">
//             <Link to='/product/14'>
//             <SfButton size="lg"> Order now </SfButton>
//             </Link>
//             <Link to='/category/:categoryName'>
//             <SfButton size="lg" className="bg-white" variant="secondary">
//               Show more
//             </SfButton>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




import { SfButton } from '@storefront-ui/react';
import { Link } from 'react-router-dom';

const details = [
  {
    productTitle: "Super Ultrawide Screen QLED",
    productTitle2: "144Hz Curved Gaming Monitor",
    productdesc: "144HZ HIGH REFRESH RATE. CURVED GAMING MONITOR. QUANTUM DOT (QLED) TECHNOLOGY.",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
  }
];

export default function Hero() {
  return (
    <div className="relative min-h-[576px]">
      <picture>
        <source srcSet="https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/hero-bg.png" media="(min-width: 768px)" />
        <img
          src="https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/hero-bg-mobile.png"
          className="absolute w-full h-full z-[-1] object-cover"
        />
      </picture>
      
      {/* Loop over the details array to display each product */}
      {details.map((product, index) => (
        <div key={index} className="md:flex md:flex-row-reverse md:justify-center min-h-[576px] max-w-[1536px] mx-auto">
          <div className="flex flex-col md:basis-2/4 md:items-stretch md:overflow-hidden">
            <img
              src={product.image} // Dynamically use the product image
              alt={product.productTitle} // Dynamically set the alt text
              className="h-full mt-20 mr-8"
            />
          </div>
          <div className="p-4 md:p-10 md:flex md:flex-col md:justify-center md:items-start md:basis-2/4">
            <p className="typography-text-xs md:typography-text-sm font-bold tracking-widest text-neutral-500 uppercase">
              {product.productTitle}
            </p>
            <h1 className="typography-display-2 md:typography-display-1 md:leading-[67.5px] font-bold mt-2 mb-4">
              {product.productTitle2}
            </h1>
            <p className="typography-text-base md:typography-text-lg">
              {product.productdesc}
            </p>
            <div className="flex flex-col md:flex-row gap-4 mt-6">
              <Link to={`/product/${index + 14}`}>
                <SfButton size="lg"> Order now </SfButton>
              </Link>
              <Link to={`/category/${product.productTitle.replace(/\s+/g, '-').toLowerCase()}`}>
                <SfButton size="lg" className="bg-white" variant="secondary">
                  Show more
                </SfButton>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
