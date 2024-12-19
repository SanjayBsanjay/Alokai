// import {
//   SfIconShoppingCart,
//   SfIconFavorite,
//   SfIconPerson,
//   SfIconExpandMore,
//   SfIconClose,
//   SfButton,
//   SfDrawer,
//   SfListItem,
//   useDisclosure,
//   useTrapFocus,
//   SfInput,
//   SfIconSearch,
//   SfIconMenu,
//   SfLoaderCircular,
// } from '@storefront-ui/react';
// import { useEffect, useRef, useState } from 'react';
// import { useClickAway } from 'react-use';
// import { CSSTransition } from 'react-transition-group';
// import { useProducts } from '../ProductsContext';
// import { Link } from 'react-router-dom';

// const actionItems = [
//   {
//     icon: <SfIconShoppingCart />,
//     label: '',
//     ariaLabel: 'Cart',
//     role: 'button',
//   },
//   // {
//   //   icon: <SfIconFavorite />,
//   //   label: '',
//   //   ariaLabel: 'Wishlist',
//   //   role: 'button',
//   // },
//   // {
//   //   icon: <SfIconPerson />,
//   //   label: 'Log in',
//   //   ariaLabel: 'Log in',
//   //   role: 'login',
//   // },
// ];

// const bannerDetails = {

//   image: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
//   // image: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
//   // title: 'New in designer watches',
// };

// const categoriesContent = [
//   {
//     heading: 'category',
//   },
// ];

// export default function Header() {

//   const { close, toggle, isOpen } = useDisclosure();
//   const drawerRef = useRef(null);
//   const menuRef = useRef(null);
//   const [inputValue, setInputValue] = useState('');

//   const { cart } = useProducts(); // Get cart items from context
//   const totalItems = cart.reduce((total, item) => total + item.quantity, 0);


//   useTrapFocus(drawerRef, {
//     activeState: isOpen,
//     arrowKeysUpDown: true,
//     initialFocus: 'container',
//   });
//   useClickAway(menuRef, () => {
//     close();
//   });

//   const search = (event) => {
//     event.preventDefault();
//     alert(`Successfully found 10 results for ${inputValue}`);
//   };



//   //functions
//   const { categories, setSelectedCategory, loading } = useProducts();

//   // Ensure categories are fetched and ready
//   useEffect(() => {
//     if (categories.length === 0) {
//       console.log('Categories not loaded yet');
//     }
//   }, [categories]);

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category); // Update selected category in context
//   };




//   return (
//     <div className="fixed top-0 left-0 w-full bg-blue-600 text-white z-10">
//       {isOpen && <div className="fixed inset-0 bg-neutral-500 bg-opacity-50 transition-opacity" />}
//       <header
//         ref={menuRef}
//         className="flex flex-wrap md:flex-nowrap justify-center w-full py-2 md:py-5 border-0 bg-primary-700 border-neutral-200 md:relative md:z-10"
//       >
//         <div className="flex items-center justify-start h-full max-w-[1536px] w-full px-4 md:px-10">
//           <SfButton
//             className="block md:hidden text-white bg-transparent font-body hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white"
//             aria-haspopup="true"
//             aria-expanded={isOpen}
//             variant="tertiary"
//             onClick={toggle}
//             square
//           >
//             <SfIconMenu className=" text-white" />
//           </SfButton>
//           <a
//             href="/"
//             aria-label="SF Homepage"
//             className="flex shrink-0 ml-4 md:ml-0 mr-2 md:mr-10 text-white focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm"
//           >
            
//             <picture>
//               <source srcSet="https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/vsf_logo_white.svg" media="(min-width: 1024px)" />
//               <img
//                 src="https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/vsf_logo_sign_white.svg"
//                 alt="Sf Logo"
//                 className="w-8 h-8 lg:w-[12.5rem] lg:h-[1.75rem]"
//               />
//             </picture>
//           </a>
//           <SfButton
//             className="hidden md:flex text-white bg-transparent font-body hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white"
//             aria-haspopup="true"
//             aria-expanded={isOpen}
//             slotSuffix={<SfIconExpandMore className="hidden md:inline-flex" />}
//             variant="tertiary"
//             onClick={toggle}
//             square
//           >
//             <span className="hidden md:inline-flex whitespace-nowrap px-2">Browse products</span>
//           </SfButton>
//           <nav>
//             <ul>
//               <li role="none">
//                 <CSSTransition
//                   in={isOpen}
//                   timeout={500}
//                   unmountOnExit
//                   classNames={{
//                     enter: '-translate-x-full md:opacity-0 md:translate-x-0',
//                     enterActive: 'translate-x-0 md:opacity-100 transition duration-500 ease-in-out',
//                     exitActive: '-translate-x-full md:opacity-0 md:translate-x-0 transition duration-500 ease-in-out',
//                   }}
//                 >
//                   <SfDrawer
//                     ref={drawerRef}
//                     open
//                     disableClickAway
//                     placement="top"
//                     className="grid grid-cols-1 md:gap-x-6 md:grid-cols-4 bg-white shadow-lg p-0 max-h-screen overflow-y-auto md:!absolute md:!top-20 max-w-[376px] md:max-w-full md:p-6 mr-[50px] md:mr-0"
//                   >
//                     <div className="sticky top-0 flex items-center justify-between px-4 py-2 bg-primary-700 md:hidden">
//                       <div className="flex items-center font-medium text-white typography-text-lg">Browse product</div>
//                       <SfButton
//                         square
//                         variant="tertiary"
//                         aria-label="Close navigation menu"
//                         onClick={close}
//                         className="text-white ml-2"
//                       >
//                         <SfIconClose />
//                       </SfButton>
//                     </div>
//                     {categoriesContent.map(({ heading }) => (
//                       <div key={heading} className="[&:nth-child(2)]:pt-0 pt-6 md:pt-0 text-black 	">
//                         <h2
//                           role="presentation"
//                           className="typography-text-base font-medium text-neutral-900 whitespace-nowrap p-4 md:py-1.5"
//                         >
//                           {heading}
//                         </h2>
//                         <hr className="mb-3.5" />
//                         <ul className=''>
//                           {categories && categories.length > 0 ? (
//                             categories.map((category) => (
//                               <li  key={category}>
//                                 <Link to={`/category/${category}`}
//                                 onClick={()=> handleCategoryClick(category) }>

//                                 <SfListItem
//                                   as="a"
//                                   size="sm"
//                                   role="none" 
//                                   className="typography-text-base md:typography-text-sm py-4 md:py-1.5"
//                                   >
//                                   {category}
//                                 </SfListItem>
//                                 </Link>
//                               </li>
//                             ))
//                           ) : (
//                             <p>Loading categories...</p>
//                           )}
//                         </ul>
//                       </div>
//                     ))}
//                     <div className="flex flex-col items-center justify-center overflow-hidden md:rounded-md bg-neutral-100 border-neutral-300 grow">
//                       <img src={bannerDetails.image} alt={bannerDetails.title} className="object-contain" />
//                       <p className="px-4 mt-4 mb-4 font-medium text-center typography-text-base">
//                         {bannerDetails.title}
//                       </p>
//                     </div>
//                     <SfButton
//                       square
//                       size="sm"
//                       variant="tertiary"
//                       aria-label="Close navigation menu"
//                       onClick={close}
//                       className="hidden md:block md:absolute md:right-0 hover:bg-white active:bg-white"
//                     >
//                       <SfIconClose className="text-neutral-500" />
//                     </SfButton>
//                   </SfDrawer>
//                 </CSSTransition>
//               </li>
//             </ul>
//           </nav>
//           <form role="search" className="hidden md:flex flex-[100%] ml-10" onSubmit={search}>
//             <SfInput
//               value={inputValue}
//               type="search"
//               className="[&::-webkit-search-cancel-button]:appearance-none"
//               placeholder="Search"
//               wrapperClassName="flex-1 h-10 pr-0"
//               size="base"
//               slotSuffix={
//                 <span className="flex items-center">
//                   <SfButton
//                     variant="tertiary"
//                     square
//                     aria-label="search"
//                     type="submit"
//                     className="rounded-l-none hover:bg-transparent active:bg-transparent"
//                   >
//                     <SfIconSearch />
//                   </SfButton>
//                 </span>
//               }
//               onChange={(event) => setInputValue(event.target.value)}
//             />
//           </form>
//           <nav className="flex-1 flex flex-nowrap justify-end items-center md:ml-10 gap-x-1" aria-label="SF Navigation">
//             <Link to='/cart-details'>
//             {actionItems.map((actionItem) => (
//               <SfButton
//                 className="text-white bg-transparent hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white"
//                 key={actionItem.ariaLabel}
//                 aria-label={actionItem.ariaLabel}
//                 variant="tertiary"
//                 slotPrefix={actionItem.icon}
//                 square
//               >
//                {/* Display the cart count */}

//                {cart.length > 0 && (
//                   <span className="absolute top-5 right-10 flex items-center justify-center w-5 h-4 text-xs text-white bg-red-500 rounded-full">
//                     {totalItems}
//                   </span>
//                 )}
//               </SfButton>
              
//             ))}
//             </Link>
//           </nav>
//         </div>
//       </header>
//     </div>
//   );
// }








import {
  SfIconShoppingCart,
  SfIconFavorite,
  SfIconPerson,
  SfIconExpandMore,
  SfIconClose,
  SfButton,
  SfDrawer,
  SfListItem,
  useDisclosure,
  useTrapFocus,
  SfInput,
  SfIconSearch,
  SfIconMenu,
  SfLoaderCircular,
} from '@storefront-ui/react';
import { useEffect, useRef, useState } from 'react';
import { useClickAway } from 'react-use';
import { CSSTransition } from 'react-transition-group';
import { useProducts } from '../ProductsContext';
import { Link } from 'react-router-dom';

const actionItems = [
  {
    icon: <SfIconShoppingCart />,
    label: '',
    ariaLabel: 'Cart',
    role: 'button',
  },
  // {
  //   icon: <SfIconFavorite />,
  //   label: '',
  //   ariaLabel: 'Wishlist',
  //   role: 'button',
  // },
  // {
  //   icon: <SfIconPerson />,
  //   label: 'Log in',
  //   ariaLabel: 'Log in',
  //   role: 'login',
  // },
];

const bannerDetails = {
  image: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
  title: 'New in designer watches',
};

const categoriesContent = [
  {
    heading: 'category',
  },
];

export default function Header() {
  const { close, toggle, isOpen } = useDisclosure();
  const drawerRef = useRef(null);
  const menuRef = useRef(null);
  const [inputValue, setInputValue] = useState('');
  const [categoryView, setCategoryView] = useState(false); // For category view toggle
  const { cart, categories, setSelectedCategory } = useProducts(); // Get cart and categories from context
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  useTrapFocus(drawerRef, {
    activeState: isOpen,
    arrowKeysUpDown: true,
    initialFocus: 'container',
  });

  useClickAway(menuRef, () => {
    close();
  });

  const search = (event) => {
    event.preventDefault();
    alert(`Successfully found 10 results for ${inputValue}`);
  };

  useEffect(() => {
    if (categories.length === 0) {
      console.log('Categories not loaded yet');
    }
  }, [categories]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category); // Update selected category in context
    setCategoryView(true); // Switch to category view
    close(); // Close the drawer
  };

  const handleBackToCategories = () => {
    setCategoryView(false); // Go back to product browsing view
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-blue-600 text-white z-10">
      {isOpen && <div className="fixed inset-0 bg-neutral-500 bg-opacity-50 transition-opacity" />}
      <header
        ref={menuRef}
        className="flex flex-wrap md:flex-nowrap justify-center w-full py-2 md:py-5 border-0 bg-primary-700 border-neutral-200 md:relative md:z-10"
      >
        <div className="flex items-center justify-start h-full max-w-[1536px] w-full px-4 md:px-10">
          <SfButton
            className="block md:hidden text-white bg-transparent font-body hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white"
            aria-haspopup="true"
            aria-expanded={isOpen}
            variant="tertiary"
            onClick={toggle}
            square
          >
            <SfIconMenu className="text-white" />
          </SfButton>
          <a
            href="/"
            aria-label="SF Homepage"
            className="flex shrink-0 ml-4 md:ml-0 mr-2 md:mr-10 text-white focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm"
          >
            <picture>
              <source
                srcSet="https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/vsf_logo_white.svg"
                media="(min-width: 1024px)"
              />
              <img
                src="https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/vsf_logo_sign_white.svg"
                alt="Sf Logo"
                className="w-8 h-8 lg:w-[12.5rem] lg:h-[1.75rem]"
              />
            </picture>
          </a>
          <SfButton
            className="hidden md:flex text-white bg-transparent font-body hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white"
            aria-haspopup="true"
            aria-expanded={isOpen}
            slotSuffix={<SfIconExpandMore className="hidden md:inline-flex" />}
            variant="tertiary"
            onClick={toggle}
            square
          >
            <span className="hidden md:inline-flex whitespace-nowrap">Browse products</span>
          </SfButton>
          <nav>
            <ul>
              <li role="none">
                <CSSTransition
                  in={isOpen}
                  timeout={500}
                  unmountOnExit
                  classNames={{
                    enter: '-translate-x-full md:opacity-0 md:translate-x-0',
                    enterActive:
                      'translate-x-0 md:opacity-100 transition duration-500 ease-in-out',
                    exitActive:
                      '-translate-x-full md:opacity-0 md:translate-x-0 transition duration-500 ease-in-out',
                  }}
                >
                  <SfDrawer
                    ref={drawerRef}
                    open
                    disableClickAway
                    placement="top"
                    className="grid grid-cols-1 md:gap-x-6 md:grid-cols-4 bg-white shadow-lg p-0 max-h-screen overflow-y-auto md:!absolute md:!top-20 max-w-[376px] md:max-w-full md:p-6 mr-[50px] md:mr-0"
                  >
                    <div className="sticky top-0 flex items-center justify-between px-4 py-2 bg-primary-700 md:hidden">
                      <div className="flex items-center font-medium text-white typography-text-lg">
                        Browse product
                      </div>
                      <SfButton
                        square
                        variant="tertiary"
                        aria-label="Close navigation menu"
                        onClick={close}
                        className="text-white ml-2"
                      >
                        <SfIconClose />
                      </SfButton>
                    </div>
                    {categoriesContent.map(({ heading }) => (
                      <div
                        key={heading}
                      >
                        <h2
                          role="presentation"
                          className="typography-text-base font-medium text-neutral-900 whitespace-nowrap p-4 md:py-1.5"
                        >
                          {heading}
                        </h2>
                        <hr />
                        <ul>
                          {categories && categories.length > 0 ? (
                            categories.map((category) => (
                              <li key={category}>
                                <Link
                                  to={`/category/${category}`}
                                  onClick={() => handleCategoryClick(category)}
                                >
                                  <SfListItem
                                    as="a"
                                    size="sm"
                                    role="none"
                                    className="typography-text-base md:typography-text-sm py-4 md:py-1.5"
                                  >
                                    {category}
                                  </SfListItem>
                                </Link>
                              </li>
                            ))
                          ) : (
                            <p>Loading categories...</p>
                          )}
                        </ul>
                      </div>
                    ))}
                    <div className="">
                    {/* flex flex-col items-center justify-center overflow-hidden md:rounded-md bg-neutral-100 border-neutral-300 grow */}
                      <img
                        src={bannerDetails.image}
                        alt={bannerDetails.title}
                        className=""
                      />
                      <p className="px-4 mt-4 mb-4 font-medium text-center typography-text-base">
                        {bannerDetails.title}
                      </p>
                    </div>
                    <SfButton
                      square
                      size="sm"
                      variant="tertiary"
                      aria-label="Close navigation menu"
                      onClick={close}
                      className="hidden md:block md:absolute md:right-0 hover:bg-white active:bg-white"
                    >
                      <SfIconClose className="text-neutral-500" />
                    </SfButton>
                  </SfDrawer>
                </CSSTransition>
              </li>
            </ul>
          </nav>
          <form role="search" className="hidden md:flex flex-[100%] ml-10" onSubmit={search}>
            <SfInput
              value={inputValue}
              type="search"
              className="[&::-webkit-search-cancel-button]:appearance-none"
              placeholder="Search"
              wrapperClassName="flex-1 h-10 pr-0"
              size="base"
              slotSuffix={
                <span className="flex items-center">
                  <SfButton
                    variant="tertiary"
                    square
                    aria-label="search"
                    type="submit"
                    className="rounded-l-none hover:bg-transparent active:bg-transparent"
                  >
                    <SfIconSearch />
                  </SfButton>
                </span>
              }
              onChange={(event) => setInputValue(event.target.value)}
            />
          </form>
          <nav className="flex-1 flex flex-nowrap justify-end items-center md:ml-10 gap-x-1" aria-label="SF Navigation">
            <Link to="/cart-details">
              {actionItems.map((actionItem) => (
                <SfButton
                  className="text-white bg-transparent hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white"
                  key={actionItem.ariaLabel}
                  aria-label={actionItem.ariaLabel}
                  variant="tertiary"
                  slotPrefix={actionItem.icon}
                  square
                >
                  {cart.length > 0 && (
                    <span className="absolute top-5 right-10 flex items-center justify-center w-5 h-4 text-xs text-white bg-red-500 rounded-full">
                      {totalItems}
                    </span>
                  )}
                </SfButton>
              ))}
            </Link>
          </nav>
        </div>
      </header>

      {/* Category View */}
      {/* {categoryView && (
        <div className="flex flex-col md:flex-row justify-between p-4">
          <div className="w-full md:w-3/4">
            <h2 className="text-xl font-bold">Category Products</h2>
          </div>
          <div className="w-full md:w-1/4">
            <img
              src={bannerDetails.image}
              alt="Category Banner"
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      )} */}
    </div>
  );
}





