"use client";

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

const RotatingText = dynamic(() => import('./RotatingText'), { ssr: false });

export default function HomePageContent({ homepage, taglines }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        @keyframes floatImage {
          0%   { transform: translateY(0px); }
          50%  { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .hero-wrap {
          font-family: 'Plus Jakarta Sans', sans-serif;
          width: 100%;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,107,107,0.1);
          border: 1px solid rgba(255,107,107,0.25);
          color: #c94a4a;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          padding: 5px 13px;
          border-radius: 100px;
          margin-bottom: 16px;
          opacity: 0;
          animation: fadeUp 0.5s ease forwards 0.1s;
        }
        .hero-badge-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #FF6B6B;
          flex-shrink: 0;
        }

        .hero-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
          /* Fluid: from 1.9rem on tiny phones up to 3.5rem on desktop */
          font-size: clamp(1.9rem, 6vw, 3.5rem);
          line-height: 1.12;
          color: #333333;
          margin-bottom: 12px;
          opacity: 0;
          animation: fadeUp 0.6s ease forwards 0.2s;
        }

        .hero-rotating-wrap {
          margin-bottom: 16px;
          opacity: 0;
          animation: fadeUp 0.6s ease forwards 0.35s;
        }

        .hero-desc {
          font-size: clamp(0.9rem, 2.5vw, 1rem);
          line-height: 1.75;
          color: #666;
          margin-bottom: 28px;
          opacity: 0;
          animation: fadeUp 0.6s ease forwards 0.5s;
        }

        .hero-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          opacity: 0;
          animation: fadeUp 0.6s ease forwards 0.65s;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #FF6B6B;
          color: #fff;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700;
          font-size: 0.9rem;
          /* Larger tap target on mobile */
          padding: 14px 24px;
          border-radius: 10px;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(255,107,107,0.3);
          transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
          -webkit-tap-highlight-color: transparent;
        }
        .btn-primary:hover {
          background: #e05555;
          transform: translateY(-2px);
          box-shadow: 0 8px 22px rgba(255,107,107,0.4);
          color: #fff;
          text-decoration: none;
        }
        .btn-primary:active { transform: translateY(0); }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: #333333;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 600;
          font-size: 0.9rem;
          padding: 13px 24px;
          border-radius: 10px;
          border: 1.5px solid #ddd;
          text-decoration: none;
          transition: border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
          -webkit-tap-highlight-color: transparent;
        }
        .btn-secondary:hover {
          border-color: #FF6B6B;
          color: #FF6B6B;
          transform: translateY(-2px);
          text-decoration: none;
        }
        .btn-secondary:active { transform: translateY(0); }

        .hero-image-wrap { animation: floatImage 4s ease-in-out infinite; }
        .hero-image-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 1;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 16px 48px rgba(0,0,0,0.1);
        }

        .hero-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(70px);
          pointer-events: none;
          z-index: 0;
        }
      `}</style>

      <div className="hero-wrap relative overflow-hidden">

        {/* Background blobs */}
        <div className="hero-blob" style={{ width:300, height:300, background:'rgba(255,107,107,0.07)', top:-60, right:-60 }} />
        <div className="hero-blob" style={{ width:220, height:220, background:'rgba(78,205,196,0.06)', bottom:20, left:-40 }} />

        <div className="relative z-10 container mx-auto px-5 sm:px-8 lg:px-16 py-10 sm:py-14">
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">

            {/* Text — shown second on mobile (flex-col-reverse makes image appear first visually) */}
            <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left items-center md:items-start">

              <div className="hero-badge">
                <span className="hero-badge-dot" />
                Frontend Developer · Göteborg
              </div>

              <h1 className="hero-title">
                {homepage.title || 'Welcome to my code-gallery!'}
              </h1>

              <div className="hero-rotating-wrap">
                <RotatingText
                  words={taglines}
                  interval={2500}
                  className="text-primary-orange text-xl sm:text-2xl md:text-3xl font-bold"
                />
              </div>

              <p className="hero-desc">
                {homepage.description ||
                  'Nyutexaminerad frontend-utvecklare från ITHS Göteborg, specialiserad på React och TypeScript. Jag bygger snabba, tillgängliga webbupplevelser med fokus på ren kod och bra UX.'}
              </p>

              <div className="hero-buttons">
                <Link href="/projects" className="btn-primary">
                  Se mina projekt
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path d="M3 7.5h9M8 4l3.5 3.5L8 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Kontakta mig
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <div className="hero-image-wrap w-56 sm:w-72 md:w-full md:max-w-md">
                {homepage.image?.fields?.file ? (
                  <div className="hero-image-frame">
                    <Image
                      src={`https:${homepage.image.fields.file.url}`}
                      alt={homepage.image.fields.title || 'Profile'}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 224px, (max-width: 1024px) 288px, 50vw"
                      priority
                    />
                  </div>
                ) : (
                  <div className="hero-image-frame" style={{ background:'#f5f5f5', display:'flex', alignItems:'center', justifyContent:'center' }}>
                    <svg width="64" height="64" viewBox="0 0 80 80" fill="none" opacity="0.15">
                      <circle cx="40" cy="32" r="18" fill="#FF6B6B"/>
                      <ellipse cx="40" cy="70" rx="28" ry="16" fill="#FF6B6B"/>
                    </svg>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
