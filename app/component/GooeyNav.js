"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function GooeyNav({ links = [], className = "" }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        .nav-root {
          position: sticky;
          top: 0;
          z-index: 100;
          background: #2C3E50;
          font-family: 'Plus Jakarta Sans', sans-serif;
          transition: box-shadow 0.3s ease;
        }
        .nav-root.scrolled {
          box-shadow: 0 2px 20px rgba(0,0,0,0.25);
        }

        .nav-logo {
          font-weight: 800;
          font-size: 1rem;
          color: #fff;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: opacity 0.2s ease;
          flex-shrink: 0;
        }
        .nav-logo:hover { opacity: 0.85; text-decoration: none; color: #fff; }
        .nav-logo-pill {
          background: #FF6B6B;
          color: #fff;
          font-weight: 800;
          font-size: 0.72rem;
          padding: 4px 8px;
          border-radius: 6px;
          line-height: 1;
          flex-shrink: 0;
        }

        /* Desktop links */
        .nav-link {
          position: relative;
          font-weight: 600;
          font-size: 0.875rem;
          color: rgba(255,255,255,0.65);
          text-decoration: none;
          padding: 7px 14px;
          border-radius: 8px;
          white-space: nowrap;
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
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: 3px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px; height: 4px;
          border-radius: 50%;
          background: #FF6B6B;
        }

        /* Hamburger — shown on small screens */
        .nav-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          padding: 8px;
          border-radius: 8px;
          background: none;
          border: none;
          cursor: pointer;
          transition: background 0.2s ease;
          -webkit-tap-highlight-color: transparent;
        }
        @media (max-width: 767px) {
          .nav-hamburger { display: flex; }
          .nav-desktop-links { display: none !important; }
        }
        .nav-hamburger:hover { background: rgba(255,255,255,0.08); }
        .nav-bar {
          width: 22px; height: 2px;
          background: rgba(255,255,255,0.85);
          border-radius: 2px;
          transition: transform 0.3s ease, opacity 0.25s ease;
          transform-origin: center;
          display: block;
        }
        .nav-hamburger.open .nav-bar:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .nav-hamburger.open .nav-bar:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .nav-hamburger.open .nav-bar:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* Mobile drawer */
        .nav-drawer {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          z-index: 99;
          display: flex;
          flex-direction: column;
          background: #2C3E50;
          transform: translateX(100%);
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nav-drawer.open { transform: translateX(0); }

        .nav-drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .nav-drawer-close {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px; height: 36px;
          border-radius: 8px;
          background: rgba(255,255,255,0.08);
          border: none;
          color: #fff;
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
        }
        .nav-drawer-links {
          display: flex;
          flex-direction: column;
          padding: 24px 20px;
          gap: 4px;
          flex-grow: 1;
        }
        .nav-drawer-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 18px;
          border-radius: 12px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 600;
          font-size: 1.05rem;
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          transition: background 0.2s ease, color 0.2s ease;
          -webkit-tap-highlight-color: transparent;
        }
        .nav-drawer-link:hover,
        .nav-drawer-link:active {
          background: rgba(255,255,255,0.06);
          color: #fff;
          text-decoration: none;
        }
        .nav-drawer-link.active {
          background: rgba(255,107,107,0.15);
          color: #FF6B6B;
        }
        .nav-drawer-footer {
          padding: 20px;
          border-top: 1px solid rgba(255,255,255,0.08);
          font-size: 0.75rem;
          color: rgba(255,255,255,0.25);
          text-align: center;
        }
      `}</style>

      {/* Sticky navbar */}
      <nav className={`nav-root ${scrolled ? 'scrolled' : ''} ${className}`}>
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">

          <Link href="/" className="nav-logo">
            <span className="nav-logo-pill">DA</span>
            David Arvidsson
          </Link>

          {/* Desktop links */}
          <div className="nav-desktop-links hidden md:flex items-center gap-1">
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

          {/* Hamburger (mobile only) */}
          <button
            className={`nav-hamburger md:hidden ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Öppna meny"
            aria-expanded={menuOpen}
          >
            <span className="nav-bar" />
            <span className="nav-bar" />
            <span className="nav-bar" />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen drawer */}
      <div className={`nav-drawer md:hidden ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        <div className="nav-drawer-header">
          <Link href="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
            <span className="nav-logo-pill">DA</span>
            David Arvidsson
          </Link>
          <button className="nav-drawer-close" onClick={() => setMenuOpen(false)} aria-label="Stäng meny">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <div className="nav-drawer-links">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={`nav-drawer-link ${pathname === link.href ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" opacity="0.4">
                <path d="M4 8h8M9 5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          ))}
        </div>

        <div className="nav-drawer-footer">
          David Arvidsson · Frontend Developer · Göteborg
        </div>
      </div>
    </>
  );
}
