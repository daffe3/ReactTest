"use client"; 

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link'; 

export default function Stack({ items = [], itemHeight = 300, gap = 20, className = "" }) {
  const [activeItem, setActiveItem] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const scrollY = containerRef.current.scrollTop;
      const newActiveItem = Math.floor(scrollY / (itemHeight + gap));
      setActiveItem(newActiveItem);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      handleScroll(); 
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [items, itemHeight, gap]);

  return (
    <>
      <style jsx global>{`
        .stack-container {
          height: 500px; /* Or a suitable height for your stack */
          overflow-y: scroll;
          -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
          position: relative;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          background-color: #fff;
        }

        .stack-item {
          position: sticky;
          top: 0; /* Items stick to the top as you scroll */
          width: calc(100% - 40px); /* Adjust for padding */
          margin: 20px;
          background-color: #f0f0f0;
          border-radius: 8px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
          display: flex;
          flex-direction: column;
          justify-content: flex-start; /* Align content to the top */
          align-items: center;
          padding: 20px;
          box-sizing: border-box;
          transition: transform 0.3s ease-out, opacity 0.3s ease-out;
          transform-origin: top center;
          z-index: 1; /* Ensure items layer correctly */
          text-decoration: none; /* Remove underline from Link */
          color: inherit; /* Inherit text color */
        }

        .stack-item.active {
          z-index: 2; /* Active item is on top */
          transform: scale(1.02); /* Slightly larger when active */
        }

        /* Adjust top position based on itemHeight and gap */
        .stack-item:not(:first-child) {
          margin-top: ${-itemHeight}px; /* Overlap items */
        }

        /* Ensure image and text within stack items are visible */
        .stack-item .item-image-wrapper { /* Added specific class for image wrapper */
          width: 100%;
          height: 128px; /* Fixed height for image wrapper */
          position: relative;
          margin-bottom: 16px; /* Spacing below image */
        }
        .stack-item .item-image-wrapper img {
          border-radius: 4px;
        }

        .stack-item h3 {
          color: #FF7F50; /* Primary orange for title */
          margin-bottom: 8px;
        }

        .stack-item p {
          color: #555;
          font-size: 0.9rem;
          line-height: 1.4;
          text-align: center;
          flex-grow: 1; /* Allow description to take available space */
          overflow: hidden; /* Hide overflow */
          display: -webkit-box;
          -webkit-line-clamp: 3; /* Limit to 3 lines */
          -webkit-box-orient: vertical;
          word-break: break-words; /* Added word-break for long words */
        }
      `}</style>

      <div ref={containerRef} className={`stack-container ${className}`}>
        {items.map((item, index) => (
          <Link href={item.link} key={item.id} legacyBehavior>
            <a className="block w-full"> 
              <div
                className={`stack-item ${activeItem === index ? 'active' : ''}`}
                style={{
                  height: itemHeight,
                  marginBottom: index < items.length - 1 ? gap : 0,
                  zIndex: items.length - index, 
                  backgroundColor: index % 2 === 0 ? '#F5F5DC' : '#FFFFFF', 
                  color: '#333333',
                }}
              >
                <h3 className="text-xl font-bold mb-2 text-primary-orange">{item.title}</h3>
                {item.image && (
                  <div className="relative item-image-wrapper"> 
                    <Image
                      src={`https:${item.image}`} 
                      alt={item.title}
                      fill 
                      style={{ objectFit: 'cover' }} 
                      className="rounded-md"
                    />
                  </div>
                )}
                <p className="text-sm text-center line-clamp-3">{item.description}</p>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
}