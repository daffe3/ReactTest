"use client";

import Link from 'next/link';

export default function Footer() {
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'About Me', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap');

        .footer-root {
          background: #1a1a1a;
          color: rgba(255,255,255,0.55);
          position: relative;
          overflow: hidden;
        }
        .footer-root::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #FF6B35, transparent);
          opacity: 0.6;
        }
        .footer-logo {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.4rem;
          color: #fff;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: color 0.2s ease;
        }
        .footer-logo:hover {
          color: #FF6B35;
          text-decoration: none;
        }
        .footer-logo-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #FF6B35;
          flex-shrink: 0;
        }
        .footer-nav-link {
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .footer-nav-link:hover {
          color: #FF6B35;
          text-decoration: none;
        }
        .footer-social {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease, transform 0.2s ease;
        }
        .footer-social:hover {
          border-color: #FF6B35;
          color: #FF6B35;
          background: rgba(255,107,53,0.08);
          transform: translateY(-2px);
          text-decoration: none;
        }
        .footer-divider {
          height: 1px;
          background: rgba(255,255,255,0.06);
          margin: 0;
        }
        .footer-tagline {
          font-family: 'Syne', sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.2);
        }
        .footer-copy {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.25);
        }
        .footer-copy span {
          color: #FF6B35;
        }
      `}</style>

      <footer className="footer-root mt-auto">
        <div className="container mx-auto px-6 py-12">

          {/* Top row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">

            {/* Logo + tagline */}
            <div className="flex flex-col gap-2">
              <Link href="/" className="footer-logo">
                <span className="footer-logo-dot" />
                David Arvidsson
              </Link>
              <p className="footer-tagline">Bygger snabba, tillgängliga webbupplevelser · Göteborg</p>
            </div>

            {/* Nav links */}
            <nav className="flex flex-wrap gap-x-6 gap-y-3">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="footer-nav-link">
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/david-arvidsson-624412168/"
                target="_blank"
                className="footer-social"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              {/* GitHub */}
              <a
                href="https://github.com/daffe3"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="footer-social"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              {/* Email */}
              <a
                href="/contact"
                aria-label="Contact"
                className="footer-social"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-divider mb-6" />

          {/* Bottom row */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="footer-copy">
              &copy; {new Date().getFullYear()} <span>David Arvidsson</span>. All rights reserved.
            </p>
            <p className="footer-copy">
              Built with <span>Next.js</span> &amp; <span>Contentful</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
