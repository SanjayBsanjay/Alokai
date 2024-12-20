import React, { createContext, useState, useEffect, useContext } from 'react';

// Create context for products and cart
const ProductsContext = createContext();

// Helper function to get the cart from localStorage
const getCartFromLocalStorage = () => {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
};

// Custom hook to use the Products context
export const useProducts = () => useContext(ProductsContext);

export const ProductsProvider = ({ children }) => {
  // State for products, loading status, categories, selected category, and cart
  const [products, setProducts] = useState([]);  // Products data
  const [loading, setLoading] = useState(true);  // Loading state
  const [categories, setCategories] = useState([]); // Categories data
  const [selectedCategory, setSelectedCategory] = useState('');  // Selected category
  const [cart, setCart] = useState(getCartFromLocalStorage());  // Cart data

  // Fetch categories from API
  const fetchCategories = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products/categories');
      const data = await response.json();
      if (Array.isArray(data)) {
        setCategories(data); // Store categories in state
      } else {
        console.error('Categories data is not an array', data);
        setCategories([]); // Fallback to empty array if data is malformed
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
      setCategories([]); // Fallback to empty array on error
    }
  };

  // Fetch products by category from API
  const fetchProductsByCategory = async (category) => {
    setLoading(true);  // Start loading
    try {
      const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
      const data = await response.json();
      if (Array.isArray(data)) {
        setProducts(data); // Set products for the selected category
      } else {
        console.error('Products data is not an array', data);
        setProducts([]);  // Fallback to empty array if data is malformed
      }
    } catch (error) {
      console.error('Error fetching products by category:', error);
      setProducts([]);  // Fallback to empty array on error
    }
    setLoading(false);  // Stop loading
  };

  // Fetch all products (for the default or reset state)
  const fetchAllProducts = async () => {
    setLoading(true);  // Start loading
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      if (Array.isArray(data)) {
        setProducts(data); // Set all products in the state
      } else {
        console.error('All products data is not an array', data);
        setProducts([]); // Fallback to empty array if data is malformed
      }
    } catch (error) {
      console.error('Error fetching all products:', error);
      setProducts([]); // Fallback to empty array on error
    }
    setLoading(false); // Stop loading
  };

  // Fetch products when the selected category changes
  useEffect(() => {
    if (selectedCategory) {
      fetchProductsByCategory(selectedCategory); // Fetch products for the selected category
    } else {
      fetchAllProducts(); // Fetch all products if no category is selected
    }
  }, [selectedCategory]);

  // Fetch categories when the component mounts
  useEffect(() => {
    fetchCategories();
  }, []);

  // Update localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Add product to cart
  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(item => item.id === product.id);
      if (existingProductIndex >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += quantity;
        return updatedCart;
      }
      return [...prevCart, { ...product, quantity }];
    });
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId));
  };

  // Update cart item quantity
  const updateCartItemQuantity = (productId, quantity) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const productIndex = updatedCart.findIndex(item => item.id === productId);
      if (productIndex >= 0) {
        updatedCart[productIndex].quantity = quantity;
      }
      return updatedCart;
    });
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        categories,
        selectedCategory,
        setSelectedCategory,
        cart,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
        loading,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
