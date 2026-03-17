"use client";

export default function Footer() {
  return (
    <footer style={{ background: '#2C3E50', fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="mt-auto relative">

      {/* Top gradient line */}
      <div style={{ height: 2, background: 'linear-gradient(90deg, transparent, #FF6B6B 40%, #4ECDC4 60%, transparent)', opacity: 0.6 }} />

      <div className="container mx-auto px-6 py-7">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">

          {/* Copyright */}
          <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.25)', margin: 0 }}>
            &copy; {new Date().getFullYear()} <span style={{ color: '#FF6B6B' }}>David Arvidsson</span>. All rights reserved.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-2">
            {[
              {
                href: 'https://www.linkedin.com/in/david-arvidsson-624412168/',
                label: 'LinkedIn', external: true,
                svg: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                ),
              },
              {
                href: 'https://github.com/daffe3',
                label: 'GitHub', external: true,
                svg: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                ),
              },
              {
                href: '/contact',
                label: 'Email', external: false,
                svg: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                ),
              },
            ].map(({ href, label, svg, external }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: 36, height: 36, borderRadius: 8,
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.45)',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s, color 0.2s, background 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#FF6B6B';
                  e.currentTarget.style.color = '#FF6B6B';
                  e.currentTarget.style.background = 'rgba(255,107,107,0.08)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.color = 'rgba(255,255,255,0.45)';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                {svg}
              </a>
            ))}
          </div>

          {/* Built with */}
          <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.25)', margin: 0 }}>
            Built with <span style={{ color: '#FF6B6B' }}>Next.js</span> &amp; <span style={{ color: '#4ECDC4' }}>Contentful</span>
          </p>

        </div>
      </div>
    </footer>
  );
}


  return (
    <footer style={{ background: '#2C3E50', fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="mt-auto relative">

      {/* Top gradient line */}
      <div style={{ height: 2, background: 'linear-gradient(90deg, transparent, #FF6B6B 40%, #4ECDC4 60%, transparent)', opacity: 0.6 }} />

      <div className="container mx-auto px-6 py-10">

        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">

          {/* Logo + tagline */}
          <div className="flex flex-col gap-2">
            <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{
                background: '#FF6B6B', color: '#fff', fontWeight: 800,
                fontSize: '0.75rem', padding: '4px 9px', borderRadius: 6, lineHeight: 1,
              }}>DA</span>
              <span style={{ color: '#fff', fontWeight: 800, fontSize: '1.05rem' }}>David Arvidsson</span>
            </Link>
            <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.78rem', letterSpacing: '0.05em', margin: 0 }}>
              Bygger snabba, tillgängliga webbupplevelser · Göteborg
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.82rem', fontWeight: 600, textDecoration: 'none' }}
                onMouseEnter={e => e.currentTarget.style.color = '#FF6B6B'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-2">
            {[
              {
                href: 'https://www.linkedin.com/in/david-arvidsson-624412168/',
                label: 'LinkedIn', external: true,
                svg: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                ),
              },
              {
                href: 'https://github.com/daffe3',
                label: 'GitHub', external: true,
                svg: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                ),
              },
              {
                href: '/contact',
                label: 'Email', external: false,
                svg: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                ),
              },
            ].map(({ href, label, svg, external }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: 36, height: 36, borderRadius: 8,
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.45)',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s, color 0.2s, background 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#FF6B6B';
                  e.currentTarget.style.color = '#FF6B6B';
                  e.currentTarget.style.background = 'rgba(255,107,107,0.08)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.color = 'rgba(255,255,255,0.45)';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                {svg}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.07)', marginBottom: 24 }} />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
          <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.25)', margin: 0 }}>
            &copy; {new Date().getFullYear()} <span style={{ color: '#FF6B6B' }}>David Arvidsson</span>. All rights reserved.
          </p>
          <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.25)', margin: 0 }}>
            Built with <span style={{ color: '#FF6B6B' }}>Next.js</span> &amp; <span style={{ color: '#4ECDC4' }}>Contentful</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
