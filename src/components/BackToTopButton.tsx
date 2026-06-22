import { useEffect, useState } from 'react';

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [bottomOffset, setBottomOffset] = useState(24);

  useEffect(() => {
    const updatePosition = () => {
      // Toggle visibility
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Check footer collision
      const footer = document.querySelector('.main-footer');
      if (footer) {
        const rect = footer.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // If footer is visible in viewport
        if (rect.top < viewportHeight) {
          const footerVisibleHeight = viewportHeight - rect.top;
          setBottomOffset(footerVisibleHeight + 24);
        } else {
          setBottomOffset(24);
        }
      }
    };

    window.addEventListener('scroll', updatePosition);
    window.addEventListener('resize', updatePosition);
    
    // Initial check
    updatePosition();

    return () => {
      window.removeEventListener('scroll', updatePosition);
      window.removeEventListener('resize', updatePosition);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`back-to-top-3d ${isVisible ? 'show' : ''}`}
      style={{ bottom: `${bottomOffset}px` }}
      aria-label="Scroll to top"
    >
      <div className="button-svg-wrapper">
        <svg
          width="40"
          height="54"
          viewBox="0 0 40 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Top Face (Light Blue) */}
          <polygon
            points="2,12 14,2 38,2 26,12"
            fill="#3b82f6"
            stroke="#000000"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          
          {/* Right Face (Medium Blue) */}
          <polygon
            points="26,12 38,2 38,42 26,52"
            fill="#1d4ed8"
            stroke="#000000"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          
          {/* Front Face (White) */}
          <polygon
            points="2,12 26,12 26,52 2,52"
            fill="#ffffff"
            stroke="#000000"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Arrow pointing up on the front face */}
          <path
            d="M9,28 L14,23 L19,28 M14,23 L14,41"
            stroke="#000000"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </button>
  );
}

export default BackToTopButton;
