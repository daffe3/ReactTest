"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function NotFound() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap');

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes float404 {
          0%   { transform: translateY(0px) rotate(-1deg); }
          50%  { transform: translateY(-14px) rotate(1deg); }
          100% { transform: translateY(0px) rotate(-1deg); }
        }
        @keyframes glitch {
          0%   { clip-path: inset(0 0 95% 0); transform: translate(-4px, 0); }
          10%  { clip-path: inset(30% 0 50% 0); transform: translate(4px, 0); }
          20%  { clip-path: inset(70% 0 10% 0); transform: translate(-4px, 0); }
          30%  { clip-path: inset(10% 0 80% 0); transform: translate(0, 0); }
          40%  { clip-path: inset(50% 0 30% 0); transform: translate(4px, 0); }
          50%  { clip-path: inset(20% 0 60% 0); transform: translate(-4px, 0); }
          60%  { clip-path: inset(80% 0 5%  0); transform: translate(4px, 0); }
          70%  { clip-path: inset(5%  0 75% 0); transform: translate(-4px, 0); }
          80%  { clip-path: inset(40% 0 40% 0); transform: translate(0, 0); }
          90%  { clip-path: inset(60% 0 20% 0); transform: translate(4px, 0); }
          100% { clip-path: inset(0 0 95% 0); transform: translate(0, 0); }
        }
        @keyframes scanline {
          0%   { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(90px) rotate(0deg); }
          to   { transform: rotate(360deg) translateX(90px) rotate(-360deg); }
        }
        @keyframes orbit2 {
          from { transform: rotate(120deg) translateX(70px) rotate(-120deg); }
          to   { transform: rotate(480deg) translateX(70px) rotate(-480deg); }
        }
        @keyframes orbit3 {
          from { transform: rotate(240deg) translateX(110px) rotate(-240deg); }
          to   { transform: rotate(600deg) translateX(110px) rotate(-600deg); }
        }
        @keyframes pulse-ring {
          0%   { transform: scale(0.9); opacity: 0.6; }
          50%  { transform: scale(1.1); opacity: 0.2; }
          100% { transform: scale(0.9); opacity: 0.6; }
        }

        .not-found-root {
          min-height: calc(100vh - 72px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          background: #fafafa;
          position: relative;
          overflow: hidden;
        }

        /* Subtle grid background */
        .not-found-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,107,53,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,107,53,0.04) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
        }

        /* Scanline effect */
        .scanline {
          position: absolute;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(255,107,53,0.15), transparent);
          animation: scanline 4s linear infinite;
          pointer-events: none;
        }

        /* Big glitchy 404 */
        .num-404-wrap {
          position: relative;
          animation: float404 5s ease-in-out infinite;
          margin-bottom: 8px;
        }
        .num-404 {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(7rem, 20vw, 14rem);
          line-height: 1;
          color: #1a1a1a;
          position: relative;
          user-select: none;
        }
        .num-404::before,
        .num-404::after {
          content: '404';
          position: absolute;
          inset: 0;
          font-family: 'Syne', sans-serif;
          font-weight: 800;
        }
        .num-404::before {
          color: #FF6B35;
          animation: glitch 3s infinite step-end;
          animation-delay: 0.5s;
          z-index: -1;
        }
        .num-404::after {
          color: #4ECDC4;
          animation: glitch 3s infinite step-end;
          animation-delay: 1s;
          z-index: -2;
        }

        /* Orbit graphic */
        .orbit-wrap {
          position: relative;
          width: 240px;
          height: 240px;
          margin: 20px auto 32px;
          flex-shrink: 0;
        }
        .orbit-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #FF6B35;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          box-shadow: 0 0 24px rgba(255,107,53,0.4);
        }
        .orbit-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          border-radius: 50%;
          border: 1px solid rgba(255,107,53,0.15);
          transform: translate(-50%, -50%);
          animation: pulse-ring 3s ease-in-out infinite;
        }
        .orbit-ring-1 { width: 100px; height: 100px; animation-delay: 0s; }
        .orbit-ring-2 { width: 160px; height: 160px; animation-delay: 0.5s; }
        .orbit-ring-3 { width: 220px; height: 220px; animation-delay: 1s; }

        .orbit-dot {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          margin: -5px 0 0 -5px;
        }
        .orbit-dot-1 {
          background: #FF6B35;
          animation: orbit 4s linear infinite;
        }
        .orbit-dot-2 {
          background: #4ECDC4;
          animation: orbit2 6s linear infinite;
        }
        .orbit-dot-3 {
          background: #1a1a1a;
          animation: orbit3 8s linear infinite;
        }

        .nf-label {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #FF6B35;
          animation: fadeSlideUp 0.5s ease forwards;
          animation-delay: 0.1s;
          opacity: 0;
        }
        .nf-headline {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(1.5rem, 4vw, 2.2rem);
          color: #1a1a1a;
          text-align: center;
          line-height: 1.2;
          opacity: 0;
          animation: fadeSlideUp 0.5s ease forwards;
          animation-delay: 0.2s;
          margin-bottom: 12px;
        }
        .nf-sub {
          font-size: 1rem;
          color: #888;
          text-align: center;
          max-width: 360px;
          line-height: 1.6;
          opacity: 0;
          animation: fadeSlideUp 0.5s ease forwards;
          animation-delay: 0.3s;
          margin-bottom: 32px;
        }
        .nf-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #FF6B35;
          color: #fff;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          letter-spacing: 0.04em;
          padding: 14px 28px;
          border-radius: 100px;
          text-decoration: none;
          box-shadow: 0 4px 20px rgba(255,107,53,0.35);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          opacity: 0;
          animation: fadeSlideUp 0.5s ease forwards;
          animation-delay: 0.4s;
        }
        .nf-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(255,107,53,0.5);
          color: #fff;
          text-decoration: none;
        }
        .cursor-blink {
          display: inline-block;
          width: 3px;
          height: 0.85em;
          background: #FF6B35;
          margin-left: 3px;
          vertical-align: middle;
          animation: blink 1s step-end infinite;
        }
      `}</style>

      <div className="not-found-root">
        <div className="scanline" />

        {/* Glitchy 404 */}
        <div className="num-404-wrap">
          <div className="num-404">404</div>
        </div>

        {/* Orbit animation */}
        <div className="orbit-wrap">
          <div className="orbit-ring orbit-ring-1" />
          <div className="orbit-ring orbit-ring-2" />
          <div className="orbit-ring orbit-ring-3" />
          <div className="orbit-center">🔍</div>
          <div className="orbit-dot orbit-dot-1" />
          <div className="orbit-dot orbit-dot-2" />
          <div className="orbit-dot orbit-dot-3" />
        </div>

        {/* Text */}
        <p className="nf-label mb-3">Sidan hittades inte</p>
        <h1 className="nf-headline">
          Lost in the void<span className="cursor-blink" />
        </h1>
        <p className="nf-sub">
          Sidan du letar efter verkar inte existera — den kanske flyttades, togs bort, eller så var länken felaktig.
        </p>

        <Link href="/" className="nf-cta">
          Ta mig hem
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </>
  );
}
