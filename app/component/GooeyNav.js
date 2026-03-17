"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function GooeyNav({ links = [], className = "" }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700&display=swap');

        .nav-root {
          position: sticky;
          top: 0;
          z-index: 100;
          transition: background 0.3s ease, box-shadow 0.3s ease, backdrop-filter 0.3s ease;
          font-family: 'Syne', sans-serif;
        }
        .nav-root.scrolled {
          background: rgba(26, 26, 26, 0.92) !important;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 1px 0 rgba(255,107,53,0.15), 0 4px 24px rgba(0,0,0,0.2);
        }

        .nav-link {
          position: relative;
          font-weight: 600;
          font-size: 0.875rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          padding: 8px 16px;
          border-radius: 100px;
          transition: color 0.2s ease;
          outline: none;
        }
        .nav-link::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 100px;
          background: rgba(255, 107, 53, 0.15);
          transform: scale(0.7);
          opacity: 0;
          transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.2s ease;
        }
        .nav-link:hover {
          color: #fff;
          text-decoration: none;
        }
        .nav-link:hover::before {
          transform: scale(1);
          opacity: 1;
        }
        .nav-link.active {
          color: #FF6B35;
        }
        .nav-link.active::before {
          background: rgba(255, 107, 53, 0.12);
          transform: scale(1);
          opacity: 1;
        }
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #FF6B35;
        }

        .nav-logo {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.1rem;
          letter-spacing: 0.02em;
          color: #fff;
          text-decoration: none;
          transition: color 0.2s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .nav-logo:hover {
          color: #FF6B35;
          text-decoration: none;
        }
        .nav-logo-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #FF6B35;
          display: inline-block;
          flex-shrink: 0;
        }

        .mobile-menu {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
          opacity: 0;
        }
        .mobile-menu.open {
          max-height: 400px;
          opacity: 1;
        }
        .mobile-link {
          display: block;
          padding: 12px 20px;
          font-family: 'Syne', sans-serif;
          font-weight: 600;
          font-size: 0.9rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          border-left: 2px solid transparent;
          transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease;
        }
        .mobile-link:hover {
          color: #fff;
          background: rgba(255,107,53,0.08);
          border-left-color: rgba(255,107,53,0.4);
          text-decoration: none;
        }
        .mobile-link.active {
          color: #FF6B35;
          border-left-color: #FF6B35;
        }

        .hamburger {
          display: flex;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 6px;
          border-radius: 6px;
          transition: background 0.2s ease;
          background: none;
          border: none;
        }
        .hamburger:hover {
          background: rgba(255,255,255,0.08);
        }
        .hamburger-line {
          width: 22px;
          height: 2px;
          background: rgba(255,255,255,0.85);
          border-radius: 2px;
          transition: transform 0.3s ease, opacity 0.3s ease, width 0.3s ease;
          transform-origin: center;
        }
        .hamburger.open .hamburger-line:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .hamburger.open .hamburger-line:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }
        .hamburger.open .hamburger-line:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }
      `}</style>

      <nav
        className={`nav-root bg-text-dark ${scrolled ? 'scrolled' : ''} ${className}`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">

          <Link href="/" className="nav-logo">
            <span className="nav-logo-dot" />
            David Arvidsson
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className={`nav-link ${pathname === link.href ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Hamburger */}
          <button
            className={`hamburger lg:hidden ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Öppna meny"
          >
            <div className="hamburger-line" />
            <div className="hamburger-line" />
            <div className="hamburger-line" />
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="container mx-auto px-4 pb-4 border-t border-white/10 pt-2">
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className={`mobile-link ${pathname === link.href ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
