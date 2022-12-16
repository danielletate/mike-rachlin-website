import React from 'react';
import { useEffect, useState } from 'react';
import { BsArrowUpSquare } from 'react-icons/bs';

const ScrollToTop = () => {
  const [scrollToTopButton, setScrollToTopButton] = useState(false);

  // Show button when user scrolls 100px or more
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setScrollToTopButton(true);
      } else {
        setScrollToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {scrollToTopButton && (
        <button
          style={{
            position: 'fixed',
            bottom: '125px',
            right: '20px',
            height: '50px',
            width: '50px',
            fontSize: '40px',
            color: '#9ca3af',
          }}
          onClick={scrollUp}
        >
          <BsArrowUpSquare />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
