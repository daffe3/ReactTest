"use client";

import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

const richTextOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-3 text-gray-500 leading-relaxed">{children}</p>,
    [INLINES.HYPERLINK]: (node, children) => (
      <a href={node.data.uri} target="_blank" rel="noopener noreferrer" className="text-accent-link hover:underline">{children}</a>
    ),
  },
};

const contactLinks = (contactPage) => [
  contactPage.email && {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email',
    value: contactPage.email,
    href: `mailto:${contactPage.email}`,
  },
  contactPage.link && {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    label: 'LinkedIn',
    value: 'Connect on LinkedIn',
    href: contactPage.link,
    external: true,
  },
  contactPage.github && {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    label: 'GitHub',
    value: 'View GitHub Profile',
    href: contactPage.github,
    external: true,
  },
  contactPage.number && {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
    label: 'Telefon',
    value: contactPage.number,
    href: `tel:${contactPage.number}`,
  },
].filter(Boolean);

export default function ContactContent({ contactPage }) {
  const links = contactLinks(contactPage);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .contact-wrap { font-family: 'Plus Jakarta Sans', sans-serif; }

        /* Header — same dark banner as projects */
        .contact-header {
          position: relative;
          overflow: hidden;
          background: #2C3E50;
          padding: 64px 24px 72px;
          text-align: center;
        }
        .contact-header::after {
          content: '';
          position: absolute;
          bottom: -1px; left: 0; right: 0;
          height: 40px;
          background: #F7F7F7;
          clip-path: ellipse(55% 100% at 50% 100%);
        }
        .contact-header-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          pointer-events: none;
        }
        .contact-header-label {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: rgba(255,107,107,0.15);
          border: 1px solid rgba(255,107,107,0.3);
          color: #FF6B6B;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 5px 14px;
          border-radius: 100px;
          margin-bottom: 16px;
          opacity: 0;
          animation: fadeUp 0.5s ease forwards 0.1s;
        }
        .contact-header-title {
          font-weight: 800;
          font-size: clamp(2rem, 5vw, 3rem);
          color: #fff;
          margin-bottom: 14px;
          opacity: 0;
          animation: fadeUp 0.5s ease forwards 0.2s;
        }
        .contact-header-sub {
          font-size: 1rem;
          color: rgba(255,255,255,0.5);
          max-width: 400px;
          margin: 0 auto;
          line-height: 1.65;
          opacity: 0;
          animation: fadeUp 0.5s ease forwards 0.3s;
        }

        /* Two-column body */
        .contact-body {
          max-width: 900px;
          margin: 0 auto;
          padding: 48px 24px 64px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          align-items: start;
        }
        @media (max-width: 640px) {
          .contact-body { grid-template-columns: 1fr; }
        }

        /* Info card */
        .contact-info-card {
          background: #fff;
          border-radius: 20px;
          padding: 32px;
          box-shadow: 0 2px 16px rgba(0,0,0,0.06);
          border: 1px solid rgba(0,0,0,0.05);
          opacity: 0;
          animation: fadeUp 0.55s ease forwards 0.35s;
        }
        .contact-card-label {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #FF6B6B;
          margin-bottom: 10px;
          display: block;
        }
        .contact-card-title {
          font-weight: 800;
          font-size: 1.3rem;
          color: #333333;
          margin-bottom: 12px;
          line-height: 1.2;
        }

        /* Link rows */
        .contact-link-row {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 0;
          border-bottom: 1px solid #f5f5f5;
          text-decoration: none;
          color: inherit;
          transition: transform 0.2s ease;
        }
        .contact-link-row:last-child { border-bottom: none; }
        .contact-link-row:hover { transform: translateX(4px); text-decoration: none; }

        .contact-link-icon {
          width: 42px; height: 42px;
          border-radius: 10px;
          background: rgba(255,107,107,0.08);
          border: 1px solid rgba(255,107,107,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FF6B6B;
          flex-shrink: 0;
          transition: background 0.2s ease, border-color 0.2s ease;
        }
        .contact-link-row:hover .contact-link-icon {
          background: rgba(255,107,107,0.14);
          border-color: rgba(255,107,107,0.3);
        }
        .contact-link-label {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #bbb;
          line-height: 1;
          margin-bottom: 3px;
        }
        .contact-link-value {
          font-size: 0.9rem;
          font-weight: 600;
          color: #333333;
          line-height: 1.2;
        }
        .contact-link-row:hover .contact-link-value { color: #FF6B6B; }

        /* Image card */
        .contact-image-card {
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 2px 16px rgba(0,0,0,0.06);
          border: 1px solid rgba(0,0,0,0.05);
          aspect-ratio: 1;
          position: relative;
          opacity: 0;
          animation: fadeUp 0.55s ease forwards 0.5s;
        }

        /* Availability badge */
        .contact-availability {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(78,205,196,0.1);
          border: 1px solid rgba(78,205,196,0.25);
          color: #2a9d8f;
          font-size: 0.78rem;
          font-weight: 600;
          padding: 8px 16px;
          border-radius: 100px;
          margin-top: 20px;
          opacity: 0;
          animation: fadeUp 0.5s ease forwards 0.65s;
        }
        .contact-availability-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #4ECDC4;
          animation: pulse-dot 2s ease-in-out infinite;
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(0.8); }
        }
      `}</style>

      <div className="contact-wrap">

        {/* Header */}
        <div className="contact-header">
          <div className="contact-header-blob" style={{ width:280, height:280, background:'rgba(255,107,107,0.12)', top:-70, right:-50 }} />
          <div className="contact-header-blob" style={{ width:200, height:200, background:'rgba(78,205,196,0.1)', bottom:-30, left:-40 }} />

          <div className="relative z-10">
            <div className="contact-header-label">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Kontakt
            </div>
            <h1 className="contact-header-title">
              {contactPage.title || 'Get in Touch'}
            </h1>
            <p className="contact-header-sub">
              Alltid öppen för nya möjligheter, samarbeten eller ett trevligt samtal med andra utvecklare.
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="contact-body">

          {/* Links card */}
          <div className="contact-info-card">
            <span className="contact-card-label">Kontaktvägar</span>
            <h2 className="contact-card-title">Hör gärna av dig!</h2>

            {contactPage.info && typeof contactPage.info === 'object' && (
              <div className="mb-4 text-sm">
                {documentToReactComponents(contactPage.info, richTextOptions)}
              </div>
            )}

            <div>
              {links.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="contact-link-row"
                >
                  <div className="contact-link-icon">{item.icon}</div>
                  <div>
                    <div className="contact-link-label">{item.label}</div>
                    <div className="contact-link-value">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Image or availability card */}
          <div className="flex flex-col gap-5">
            {contactPage.image?.fields?.file ? (
              <div className="contact-image-card">
                <Image
                  src={`https:${contactPage.image.fields.file.url}`}
                  alt={contactPage.image.fields.title || 'Contact image'}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="400px"
                />
              </div>
            ) : null}

            <div className="contact-info-card" style={{ animationDelay: '0.5s' }}>
              <span className="contact-card-label">Status</span>
              <h2 className="contact-card-title" style={{ fontSize: '1.1rem' }}>Tillgänglig för uppdrag</h2>
              <p style={{ fontSize: '0.88rem', color: '#888', lineHeight: 1.65 }}>
                Jag söker aktivt min första tjänst som frontend-utvecklare. Tveka inte att höra av dig om du har ett projekt eller en roll som matchar min profil!
              </p>
              <div className="contact-availability">
                <span className="contact-availability-dot" />
                Öppen för nya möjligheter
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
