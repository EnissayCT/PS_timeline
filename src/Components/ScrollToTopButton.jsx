import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    const scrollDuration = 500; // Duration in milliseconds
    const scrollStep = -window.scrollY / (scrollDuration / 15);
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="scroll-to-top fixed bottom-4 left-8">
      {isVisible && (
        <button 
          onClick={scrollToTop} 
          className="scroll-to-top-button w-16 h-16 bg-blue-500 text-white rounded-full shadow-lg flex items-center justify-center"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;