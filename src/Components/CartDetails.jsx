


import React from 'react';
import {
  SfButton,
  SfIconRemove,
  SfIconAdd,
  SfIconDelete,
  SfLink,
  SfIconSell
} from '@storefront-ui/react';
import { useId } from 'react';
import { useProducts } from '../ProductsContext';
import OrderSummary from './OrderSummary';
import { clamp } from 'lodash';


export default function CartDetails() {
  const inputId = useId();
  const min = 1;
  const max = 999;
  const { cart, removeFromCart, updateCartItemQuantity } = useProducts();


  // Handle quantity change in the cart
  function handleOnChange(event, productId) {
    const { value: currentValue } = event.target;
    const nextValue = parseFloat(currentValue);
    updateCartItemQuantity(productId, Number(clamp(nextValue, min, max)));
  }

  return (
    <div className="flex gap-8 p-6">
      {/* Cart Items Section */}
      <div className="flex-1">
        {cart.length === 0 ? (
          <div className="text-center">
            <h4 className="text-4xl text-gray-700 p-2">Your cart is empty.</h4>
            <img
              src="./public/emptycart.svg"
              alt="empty cart"
              className="mx-auto mt-6"
              width="300"
              height="300"
            />
          </div>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center gap-4 border-b-[1px] border-neutral-200 py-4"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-md w-[100px] sm:w-[176px]">
                <SfLink href="#">
                  <img
                    className="w-full h-auto border rounded-md border-neutral-200"
                    src={item.image}
                    alt={item.title}
                    width="300"
                    height="300"
                  />
                </SfLink>
                {item.onSale && (
                  <div className="absolute top-0 left-0 text-white bg-secondary-600 py-1 pl-1.5 pr-2 text-xs font-medium">
                    <SfIconSell size="xs" className="mr-1" />
                    Sale
                  </div>
                )}
              </div>

              {/* Product Details */}
              <div className="flex flex-col pl-4 min-w-[180px] flex-1">
                <SfLink
                  href="#"
                  variant="secondary"
                  className="no-underline typography-text-sm sm:typography-text-lg"
                >
                  {item.title}
                </SfLink>
                <div className="my-2 sm:mb-0">
                  <ul className="text-xs font-normal leading-5 sm:typography-text-sm text-neutral-700">
                    <li>Size: {item.size}</li>
                    <li>Color: {item.color}</li>
                  </ul>
                </div>

                {/* Quantity and Remove Button */}
                <div className="flex justify-between mt-4 sm:mt-0 items-center">
                  <span className="font-bold sm:ml-auto sm:order-1 typography-text-sm sm:typography-text-lg">
                    ${item.price}
                  </span>

                  <div className="flex items-center justify-between gap-2">
                    {/* Quantity Control */}
                    <div className="flex border border-neutral-300 rounded-md">
                      <SfButton
                        variant="tertiary"
                        square
                        className="rounded-r-none"
                        disabled={item.quantity <= min}
                        aria-controls={inputId}
                        aria-label="Decrease value"
                        onClick={() => updateCartItemQuantity(item.id, item.quantity - 1)}
                      >
                        <SfIconRemove />
                      </SfButton>
                      <input
                        id={inputId}
                        type="number"
                        role="spinbutton"
                        className="appearance-none mx-2 w-8 text-center bg-transparent font-medium"
                        min={min}
                        max={max}
                        value={item.quantity}
                        onChange={(e) => handleOnChange(e, item.id)}
                      />
                      <SfButton
                        variant="tertiary"
                        square
                        className="rounded-l-none"
                        disabled={item.quantity >= max}
                        aria-controls={inputId}
                        aria-label="Increase value"
                        onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)}
                      >
                        <SfIconAdd />
                      </SfButton>
                    </div>

                    {/* Remove Button */}
                    <button
                      aria-label="Remove"
                      type="button"
                      className="text-neutral-500 text-xs font-light ml-auto flex items-center px-3 py-1.5"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <SfIconDelete />
                      <span className="hidden ml-1.5 sm:block">Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Order Summary Section (Visible when there are items in the cart) */}
      {cart.length > 0 && (
        <div className="w-1/2 max-w-[500px] bg-white p-6 shadow-lg rounded-md border border-neutral-200">
          <OrderSummary />
        </div>
      )}
    </div>
  );
}
