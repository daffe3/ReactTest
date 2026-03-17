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

  useEffect(() => { setIsMobileMenuOpen(false); }, [pathname]);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        .nav-root {
          position: sticky;
          top: 0;
          z-index: 100;
          background: #2C3E50;
          transition: box-shadow 0.3s ease;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .nav-root.scrolled {
          box-shadow: 0 2px 20px rgba(0,0,0,0.2);
        }

        .nav-logo {
          font-weight: 800;
          font-size: 1.05rem;
          color: #fff;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: opacity 0.2s ease;
        }
        .nav-logo:hover { opacity: 0.85; text-decoration: none; color: #fff; }

        /* Little coral pill behind the logo initials */
        .nav-logo-pill {
          background: #FF6B6B;
          color: #fff;
          font-weight: 800;
          font-size: 0.75rem;
          letter-spacing: 0.04em;
          padding: 4px 9px;
          border-radius: 6px;
          line-height: 1;
        }

        .nav-link {
          position: relative;
          font-weight: 600;
          font-size: 0.875rem;
          color: rgba(255,255,255,0.65);
          text-decoration: none;
          padding: 7px 14px;
          border-radius: 8px;
          transition: color 0.2s ease, background 0.2s ease;
        }
        .nav-link:hover {
          color: #fff;
          background: rgba(255,255,255,0.08);
          text-decoration: none;
        }
        .nav-link.active {
          color: #fff;
          background: rgba(255,107,107,0.18);
        }
        /* Coral underline dot for active */
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #FF6B6B;
        }

        /* Teal accent on hover — uses secondary-orange (#4ECDC4) */
        .nav-link:not(.active):hover::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 8px;
          box-shadow: inset 0 -2px 0 rgba(78,205,196,0.5);
          pointer-events: none;
        }

        /* Hamburger */
        .hamburger {
          display: flex;
          flex-direction: column;
          gap: 5px;
          padding: 6px;
          border-radius: 6px;
          background: none;
          border: none;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        .hamburger:hover { background: rgba(255,255,255,0.08); }
        .hamburger-line {
          width: 22px; height: 2px;
          background: rgba(255,255,255,0.8);
          border-radius: 2px;
          transition: transform 0.3s ease, opacity 0.3s ease;
          transform-origin: center;
        }
        .hamburger.open .hamburger-line:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hamburger.open .hamburger-line:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .hamburger.open .hamburger-line:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* Mobile menu */
        .mobile-menu {
          overflow: hidden;
          max-height: 0;
          opacity: 0;
          transition: max-height 0.35s ease, opacity 0.25s ease;
        }
        .mobile-menu.open { max-height: 400px; opacity: 1; }

        .mobile-link {
          display: block;
          padding: 11px 20px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 600;
          font-size: 0.9rem;
          color: rgba(255,255,255,0.65);
          text-decoration: none;
          border-left: 2px solid transparent;
          transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease;
        }
        .mobile-link:hover {
          color: #fff;
          background: rgba(255,255,255,0.05);
          border-left-color: #4ECDC4;
          text-decoration: none;
        }
        .mobile-link.active {
          color: #FF6B6B;
          border-left-color: #FF6B6B;
        }
      `}</style>

      <nav className={`nav-root ${scrolled ? 'scrolled' : ''} ${className}`}>
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">

          <Link href="/" className="nav-logo">
            <span className="nav-logo-pill">DA</span>
            David Arvidsson
          </Link>

          {/* Desktop */}
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
          <div className="container mx-auto px-4 pb-3 pt-1 border-t border-white/10">
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
