import { SfIconExpandLess } from '@storefront-ui/react';
import React, { useState, useEffect } from 'react';

function ScrollToTopButton() {
  // State to track scroll position
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Handle scroll event
    const handleScroll = () => {
      // If scrolled more than 300px, show button
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll effect
    });
  };

  return (
    <div>
      {/* Scroll to top button */}
      {isVisible && (
        <button
        className="fixed bottom-6 right-6 p-2 bg-white text-green-500 border border-green-800
        shadow-md 
        hover:bg-green-100 transition rounded-lg flex justify-center items-center"
        onClick={scrollToTop}
        >
          <SfIconExpandLess size="md" />
        </button>
      )}
    </div>
  );
}

export default ScrollToTopButton;
