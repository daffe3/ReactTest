"use client"; 

import React, { useState, useEffect, useRef } from 'react';

export default function PixelTransition({ children, imageSrc, transitionDuration = 1000 }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(true);
    }, 500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>

      <style jsx global>{`
        .pixel-transition-container {
          position: relative;
          overflow: hidden;
          /* Add dimensions or ensure children define them */
        }

        .pixel-transition-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #FF7F50; /* Orange color for the pixels */
          display: grid;
          grid-template-columns: repeat(var(--pixels-x, 20), 1fr);
          grid-template-rows: repeat(var(--pixels-y, 20), 1fr);
          pointer-events: none;
          z-index: 10; /* Above content */
          transition: opacity ${transitionDuration}ms ease-out;
          opacity: 1;
        }

        .pixel-transition-overlay.transitioning {
          opacity: 0;
        }

        .pixel-transition-pixel {
          background-color: currentColor;
          transform: scale(1);
          transition: transform ${transitionDuration}ms ease-out, opacity ${transitionDuration}ms ease-out;
          opacity: 1;
        }

        .pixel-transition-overlay.transitioning .pixel-transition-pixel {
          transform: scale(0);
          opacity: 0;
        }
      `}</style>

      <div ref={containerRef} className="pixel-transition-container">
        <div
          className={`pixel-transition-overlay ${isTransitioning ? 'transitioning' : ''}`}
          style={{
            '--pixels-x': 30, 
            '--pixels-y': 30, 
          }}
        >
          {Array.from({ length: 30 * 30 }).map((_, i) => (
            <div key={i} className="pixel-transition-pixel"></div>
          ))}
        </div>
        {children}
      </div>
    </>
  );
}