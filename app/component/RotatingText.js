"use client"; 

import React, { useState, useEffect } from 'react';

export default function RotatingText({ words = ["Creative", "Innovative", "Passionate"], interval = 2000, className = "" }) {
  const [index, setIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false); 
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
        setCurrentWord(words[(index + 1) % words.length]);
        setIsVisible(true); 
      }, 500); 
    }, interval);

    return () => clearInterval(timer);
  }, [words, interval, index]);

  return (
    <>
      <style jsx global>{`
        .rotating-text-container {
          display: inline-block;
          min-width: 150px; /* Adjust based on your longest word */
          text-align: center;
        }
        .rotating-text {
          display: inline-block;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
        }
        .rotating-text.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
      <span className={`rotating-text-container ${className}`}>
        <span className={`rotating-text ${isVisible ? 'is-visible' : ''}`}>
          {currentWord}
        </span>
      </span>
    </>
  );
}
