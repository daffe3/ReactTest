"use client";

import Image from 'next/image';
import Link from 'next/link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

const richTextOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="mb-5 text-gray-600 leading-relaxed break-words">{children}</p>
    ),
    [BLOCKS.HEADING_1]: (node, children) => <h1 className="about-h1">{children}</h1>,
    [BLOCKS.HEADING_2]: (node, children) => <h2 className="about-h2">{children}</h2>,
    [BLOCKS.HEADING_3]: (node, children) => <h3 className="about-h3">{children}</h3>,
    [BLOCKS.UL_LIST]:   (node, children) => <ul className="about-ul">{children}</ul>,
    [BLOCKS.OL_LIST]:   (node, children) => <ol className="list-decimal list-inside mb-5 pl-4 text-gray-600 space-y-1">{children}</ol>,
    [BLOCKS.LIST_ITEM]: (node, children) => <li className="about-li">{children}</li>,
    [INLINES.HYPERLINK]: (node, children) => (
      <a href={node.data.uri} target="_blank" rel="noopener noreferrer" className="text-accent-link hover:underline font-medium">{children}</a>
    ),
  },
};

export default function AboutContent({ aboutMe }) {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .about-page { font-family: 'Plus Jakarta Sans', sans-serif; }
        .about-enter   { animation: fadeUp 0.55s ease forwards; }
        .about-enter-2 { opacity:0; animation: fadeUp 0.55s ease forwards 0.15s; }
        .about-enter-3 { opacity:0; animation: fadeUp 0.55s ease forwards 0.3s; }

        .about-section-label {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #FF6B6B;
          margin-bottom: 8px;
        }
        .about-page-title {
          font-weight: 800;
          font-size: clamp(2rem, 4vw, 2.8rem);
          color: #333333;
          line-height: 1.15;
        }

        /* Profile card */
        .about-card {
          background: #fff;
          border-radius: 20px;
          padding: 32px;
          box-shadow: 0 2px 20px rgba(0,0,0,0.06);
          border: 1px solid rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: sticky;
          top: 88px;
        }
        .about-avatar {
          position: relative;
          width: 150px; height: 150px;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: 0 0 0 4px #fff, 0 0 0 6px rgba(255,107,107,0.25);
          margin-bottom: 18px;
        }
        .about-name {
          font-weight: 800;
          font-size: 1.15rem;
          color: #333333;
          margin-bottom: 3px;
        }
        .about-role {
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #FF6B6B;
          margin-bottom: 16px;
        }
        .about-card-divider {
          width: 36px; height: 2px;
          background: linear-gradient(90deg, #FF6B6B, #4ECDC4);
          border-radius: 2px;
          margin: 0 auto 18px;
        }
        .about-info-row {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.85rem;
          color: #666;
          text-align: left;
          width: 100%;
        }
        .about-info-icon {
          font-size: 1rem;
          flex-shrink: 0;
        }
        .about-contact-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #FF6B6B;
          color: #fff;
          font-weight: 700;
          font-size: 0.875rem;
          padding: 11px 22px;
          border-radius: 10px;
          text-decoration: none;
          box-shadow: 0 4px 12px rgba(255,107,107,0.3);
          transition: background 0.2s ease, transform 0.2s ease;
          margin-top: 6px;
          width: 100%;
          justify-content: center;
        }
        .about-contact-btn:hover {
          background: #e05555;
          transform: translateY(-2px);
          color: #fff;
          text-decoration: none;
        }

        /* Content card */
        .about-content-card {
          background: #fff;
          border-radius: 20px;
          padding: 36px;
          box-shadow: 0 2px 20px rgba(0,0,0,0.06);
          border: 1px solid rgba(0,0,0,0.05);
        }
        .about-h1 { font-weight: 800; font-size: 1.8rem; color: #FF6B6B; margin-bottom: 14px; }
        .about-h2 {
          font-weight: 700; font-size: 1.3rem; color: #333333;
          margin: 28px 0 10px;
          padding-bottom: 8px;
          border-bottom: 2px solid rgba(78,205,196,0.3);
        }
        .about-h3 { font-weight: 700; font-size: 1.05rem; color: #333333; margin: 18px 0 8px; }
        .about-ul { list-style: none; padding: 0; margin-bottom: 18px; }
        .about-li {
          position: relative;
          padding-left: 18px;
          margin-bottom: 6px;
          color: #555;
        }
        .about-li::before {
          content: '';
          position: absolute;
          left: 0; top: 9px;
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #4ECDC4;
        }
      `}</style>

      <main className="about-page flex-grow container mx-auto px-4 py-12 max-w-5xl">

        <div className="about-enter mb-10 text-center">
          <span className="about-section-label">Info</span>
          <h1 className="about-page-title">{aboutMe.title || 'About Me'}</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-7 items-start">

          {/* Profile card */}
          <div className="w-full lg:w-64 flex-shrink-0 about-enter-2">
            <div className="about-card">
              {aboutMe.image?.fields?.file && (
                <div className="about-avatar">
                  <Image
                    src={`https:${aboutMe.image.fields.file.url}`}
                    alt={aboutMe.image.fields.title || 'Profile'}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="150px"
                    priority
                  />
                </div>
              )}
              <p className="about-name">David Arvidsson</p>
              <p className="about-role">Frontend Developer</p>
              <div className="about-card-divider" />

              <div className="w-full space-y-3 mb-5">
                {[
                  { icon: '📍', label: 'Gothenburg, Sweden' },
                  { icon: '💼', label: 'Looking for first role' },
                  { icon: '⚡', label: 'React · TypeScript · Svelte' },
                ].map(({ icon, label }) => (
                  <div key={label} className="about-info-row">
                    <span className="about-info-icon">{icon}</span>
                    <span>{label}</span>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="about-contact-btn">
                Contact me
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M2 6.5h9M7 3l3.5 3.5L7 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-grow about-enter-3">
            <div className="about-content-card">
              {aboutMe.presentationText
                ? documentToReactComponents(aboutMe.presentationText, richTextOptions)
                : <p className="text-gray-400 italic">No description available yet.</p>
              }
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
