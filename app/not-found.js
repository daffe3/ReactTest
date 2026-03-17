"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function NotFound() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(true); }, []);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatEmoji {
          0%   { transform: translateY(0) rotate(-5deg); }
          50%  { transform: translateY(-12px) rotate(5deg); }
          100% { transform: translateY(0) rotate(-5deg); }
        }
        @keyframes glitch {
          0%   { clip-path: inset(0 0 95% 0); transform: translate(-3px, 0); }
          15%  { clip-path: inset(25% 0 55% 0); transform: translate(3px, 0); }
          30%  { clip-path: inset(65% 0 15% 0); transform: translate(-3px, 0); }
          45%  { clip-path: inset(5% 0 80% 0); transform: translate(3px, 0); }
          60%  { clip-path: inset(45% 0 35% 0); transform: translate(-3px, 0); }
          75%  { clip-path: inset(75% 0 5% 0); transform: translate(3px, 0); }
          100% { clip-path: inset(0 0 95% 0); transform: translate(0, 0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }

        .nf-root {
          font-family: 'Plus Jakarta Sans', sans-serif;
          min-height: calc(100vh - 68px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px 24px;
          background: #F7F7F7;
          text-align: center;
        }

        .nf-emoji {
          font-size: 4rem;
          animation: floatEmoji 3s ease-in-out infinite;
          margin-bottom: 24px;
          display: block;
        }

        .nf-404 {
          font-weight: 800;
          font-size: clamp(5rem, 18vw, 10rem);
          line-height: 1;
          color: #333333;
          position: relative;
          user-select: none;
          margin-bottom: 4px;
        }
        .nf-404::before, .nf-404::after {
          content: '404';
          position: absolute;
          inset: 0;
          font-weight: 800;
        }
        .nf-404::before {
          color: #FF6B6B;
          animation: glitch 3.5s infinite step-end;
          animation-delay: 0.4s;
          z-index: -1;
        }
        .nf-404::after {
          color: #4ECDC4;
          animation: glitch 3.5s infinite step-end;
          animation-delay: 1.2s;
          z-index: -2;
        }

        .nf-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: rgba(255,107,107,0.08);
          border: 1px solid rgba(255,107,107,0.2);
          color: #c94a4a;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          padding: 5px 13px;
          border-radius: 100px;
          margin-bottom: 18px;
        }
        .nf-badge-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #FF6B6B;
        }

        .nf-headline {
          font-weight: 800;
          font-size: clamp(1.4rem, 4vw, 2rem);
          color: #333333;
          margin-bottom: 10px;
        }
        .nf-sub {
          font-size: 0.95rem;
          color: #888;
          max-width: 340px;
          line-height: 1.65;
          margin-bottom: 32px;
        }

        .nf-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #FF6B6B;
          color: #fff;
          font-weight: 700;
          font-size: 0.9rem;
          padding: 13px 26px;
          border-radius: 10px;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(255,107,107,0.3);
          transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }
        .nf-btn:hover {
          background: #e05555;
          transform: translateY(-2px);
          box-shadow: 0 8px 22px rgba(255,107,107,0.4);
          color: #fff;
          text-decoration: none;
        }

        .nf-enter {
          opacity: 0;
          animation: fadeUp 0.5s ease forwards;
        }
      `}</style>

      <div className="nf-root">
        <span className="nf-emoji">🔍</span>

        <div className="nf-404">404</div>

        <div className="nf-enter" style={{ animationDelay: '0.1s' }}>
          <div className="nf-badge">
            <span className="nf-badge-dot" />
            Sidan hittades inte
          </div>
        </div>

        <h1 className="nf-headline nf-enter" style={{ animationDelay: '0.2s' }}>
          Hoppsan, den här sidan existerar inte!
        </h1>

        <p className="nf-sub nf-enter" style={{ animationDelay: '0.3s' }}>
          Sidan du letar efter kan ha flyttats, tagits bort eller så var länken felaktig. Gå tillbaka till startsidan så hjälper jag dig rätt.
        </p>

        <div className="nf-enter" style={{ animationDelay: '0.4s' }}>
          <Link href="/" className="nf-btn">
            Ta mig hem
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M3 7.5h9M8 4l3.5 3.5L8 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}
