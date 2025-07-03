"use client"; 

import React, { useState, useEffect } from 'react';

export default function GlitchText({ text = "404 - Page Not Found", className = "" }) {
  const [glitchClass, setGlitchClass] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchClass('glitch');
      setTimeout(() => {
        setGlitchClass('');
      }, 100); 
    }, 1000 + Math.random() * 2000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <>

      <style jsx global>{`
        .glitch-container {
          font-family: 'Arial Black', sans-serif; /* Or a strong, blocky font */
          font-size: 4rem; /* Adjust as needed */
          color: #333; /* Default text color */
          position: relative;
          text-align: center;
          overflow: hidden;
          padding: 0.5rem 0;
        }

        .glitch-text {
          position: relative;
          display: inline-block;
          color: #FF7F50; /* Primary orange for the text */
          text-shadow: 0.05em 0 0 #FF6347, -0.025em -0.05em 0 #F5F5DC, 0.025em 0.05em 0 #333333;
          animation: glitch 1s infinite;
        }

        .glitch-text.glitch {
          animation: glitch 0.3s cubic-bezier(.25, .46, .45, .94) both;
        }

        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: inherit;
          overflow: hidden;
        }

        .glitch-text::before {
          left: 2px;
          text-shadow: -0.05em -0.025em 0 #FF6347;
          animation: glitch-skew 0.3s cubic-bezier(.25, .46, .45, .94) both;
        }

        .glitch-text::after {
          left: -2px;
          text-shadow: -0.05em 0.025em 0 #F5F5DC;
          animation: glitch-skew 0.3s cubic-bezier(.25, .46, .45, .94) reverse both;
        }

        @keyframes glitch {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-3px, 3px);
          }
          40% {
            transform: translate(-3px, -3px);
          }
          60% {
            transform: translate(3px, 3px);
          }
          80% {
            transform: translate(3px, -3px);
          }
          100% {
            transform: translate(0);
          }
        }

        @keyframes glitch-skew {
          0% {
            transform: skewX(0deg);
          }
          20% {
            transform: skewX(-5deg);
          }
          40% {
            transform: skewX(5deg);
          }
          60% {
            transform: skewX(-5deg);
          }
          80% {
            transform: skewX(5deg);
          }
          100% {
            transform: skewX(0deg);
          }
        }
      `}</style>
      <div className={`glitch-container ${className}`}>
        <span className={`glitch-text ${glitchClass}`} data-text={text}>
          {text}
        </span>
      </div>
    </>
  );
}