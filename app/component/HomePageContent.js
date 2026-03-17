"use client";

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

const RotatingText = dynamic(() => import('./RotatingText'), { ssr: false });

export default function HomePageContent({ homepage, taglines }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap');

        @keyframes float {
          0%   { transform: translateY(0px) rotate(-1deg); }
          50%  { transform: translateY(-12px) rotate(1deg); }
          100% { transform: translateY(0px) rotate(-1deg); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideRight {
          from { opacity: 0; transform: translateX(-24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.92); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }

        .hero-label {
          font-family: 'Syne', sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #FF6B35;
          opacity: 0;
          animation: fadeSlideRight 0.6s ease forwards;
          animation-delay: 0.1s;
        }
        .hero-name {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          line-height: 1.05;
          opacity: 0;
          animation: fadeSlideUp 0.7s ease forwards;
          animation-delay: 0.25s;
        }
        .hero-tagline-wrap {
          opacity: 0;
          animation: fadeSlideUp 0.7s ease forwards;
          animation-delay: 0.4s;
        }
        .hero-description {
          opacity: 0;
          animation: fadeSlideUp 0.7s ease forwards;
          animation-delay: 0.55s;
        }
        .hero-cta {
          opacity: 0;
          animation: fadeSlideUp 0.7s ease forwards;
          animation-delay: 0.7s;
        }
        .hero-image-wrap {
          opacity: 0;
          animation: scaleIn 0.9s ease forwards;
          animation-delay: 0.3s;
        }

        .cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #FF6B35;
          color: #fff;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          letter-spacing: 0.05em;
          padding: 14px 28px;
          border-radius: 100px;
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
          box-shadow: 0 4px 20px rgba(255, 107, 53, 0.35);
        }
        .cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(255, 107, 53, 0.5);
          background: #e85c2a;
          text-decoration: none;
          color: #fff;
        }

        .cta-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: #1a1a1a;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          letter-spacing: 0.05em;
          padding: 13px 28px;
          border-radius: 100px;
          border: 2px solid #1a1a1a;
          text-decoration: none;
          transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease;
        }
        .cta-secondary:hover {
          background: #1a1a1a;
          color: #fff;
          transform: translateY(-2px);
          text-decoration: none;
        }

        .scroll-hint {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          opacity: 0;
          animation: fadeSlideUp 0.6s ease forwards;
          animation-delay: 1s;
        }
        .scroll-hint span {
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #999;
        }
        .scroll-line {
          width: 1px;
          height: 48px;
          background: linear-gradient(to bottom, #FF6B35, transparent);
          animation: shimmer 2s ease-in-out infinite;
        }

        .hero-image-frame {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          animation: float 5s ease-in-out infinite;
        }
        .hero-image-frame::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 24px;
          box-shadow: inset 0 0 0 2px rgba(255, 107, 53, 0.25);
          pointer-events: none;
        }

        .deco-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #FF6B35;
          display: inline-block;
          margin-right: 10px;
          vertical-align: middle;
        }

        .stat-item {
          opacity: 0;
          animation: fadeSlideUp 0.6s ease forwards;
        }
        .stat-number {
          font-family: 'Syne', sans-serif;
          font-size: 2rem;
          font-weight: 800;
          color: #FF6B35;
          line-height: 1;
        }
        .stat-label {
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #888;
          margin-top: 4px;
        }

        .cursor-blink {
          display: inline-block;
          width: 3px;
          height: 1em;
          background: #FF6B35;
          margin-left: 4px;
          vertical-align: text-bottom;
          animation: blink 1s step-end infinite;
        }
      `}</style>

      <div className="relative min-h-[calc(100vh-72px)] flex flex-col">

        {/* Subtle background texture */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `radial-gradient(circle at 80% 20%, rgba(255,107,53,0.06) 0%, transparent 50%),
                              radial-gradient(circle at 10% 80%, rgba(255,107,53,0.04) 0%, transparent 40%)`,
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        {/* Main hero */}
        <div className="relative z-10 flex flex-col lg:flex-row flex-grow items-center px-6 lg:px-16 py-12 gap-12">

          {/* Left: Text content */}
          <div className="lg:w-1/2 flex flex-col justify-center">

            <p className="hero-label mb-4">
              <span className="deco-dot" />
              Portfolio
            </p>

            <h1 className="hero-name text-5xl sm:text-6xl lg:text-7xl text-gray-900 mb-4">
              {homepage.title || 'David Arvidsson'}
              <span className="cursor-blink" />
            </h1>

            <div className="hero-tagline-wrap mb-6">
              <RotatingText
                words={taglines}
                interval={2500}
                className="text-primary-orange text-2xl sm:text-3xl font-bold"
              />
            </div>

            <p className="hero-description text-gray-600 text-lg leading-relaxed max-w-md mb-8">
              {homepage.description ||
                'Jag bygger snygga, funktionella webbupplevelser med fokus på detaljer och användarupplevelse.'}
            </p>

            <div className="hero-cta flex flex-wrap gap-4 mb-12">
              <Link href="/projects" className="cta-primary">
                Se mina projekt
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link href="/contact" className="cta-secondary">
                Kontakta mig
              </Link>
            </div>

            {/* Mini stats */}
            <div className="flex gap-10">
              {[
                { number: '10+', label: 'Projekt', delay: '0.85s' },
                { number: '3+', label: 'År erfarenhet', delay: '0.95s' },
                { number: '100%', label: 'Passion', delay: '1.05s' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="stat-item"
                  style={{ animationDelay: stat.delay }}
                >
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="lg:w-1/2 flex flex-col justify-center items-center">
            <div className="hero-image-wrap w-full max-w-md">
              {homepage.image?.fields?.file ? (
                <div className="hero-image-frame w-full aspect-square shadow-2xl">
                  <Image
                    src={`https:${homepage.image.fields.file.url}`}
                    alt={homepage.image.fields.title || 'Profile'}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              ) : (
                /* Placeholder when no image is available */
                <div
                  className="hero-image-frame w-full aspect-square shadow-2xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #f5f5f5 0%, #ebebeb 100%)' }}
                >
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" opacity="0.3">
                    <circle cx="40" cy="32" r="18" fill="#FF6B35"/>
                    <ellipse cx="40" cy="70" rx="28" ry="16" fill="#FF6B35"/>
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="relative z-10 flex justify-center pb-8">
          <div className="scroll-hint">
            <span>Scrolla</span>
            <div className="scroll-line" />
          </div>
        </div>
      </div>
    </>
  );
}
