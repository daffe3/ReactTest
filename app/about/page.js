import client from '../lib/contentful';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

export const metadata = {
  title: 'About Me',
  description: 'Lär känna David Arvidsson — frontend-utvecklare med passion för moderna webbupplevelser.',
};

export default async function About() {
  const res = await client.getEntries({ content_type: 'aboutMe' });
  const aboutMe = res.items[0]?.fields;

  if (!aboutMe) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-bg-light text-text-dark">
        <h1 className="text-4xl font-bold text-primary-orange">About Me Content Not Found</h1>
        <p className="mt-4 text-lg">Please ensure your "About Me" content is published in Contentful.</p>
      </main>
    );
  }

  const richTextOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="mb-5 text-gray-600 leading-relaxed break-words">{children}</p>
      ),
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className="about-heading-1">{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className="about-heading-2">{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className="about-heading-3">{children}</h3>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className="about-ul">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol className="list-decimal list-inside mb-5 pl-4 text-gray-600 space-y-1">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <li className="about-li">{children}</li>
      ),
      [INLINES.HYPERLINK]: (node, children) => (
        <a
          href={node.data.uri}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-orange hover:underline break-words font-medium"
        >
          {children}
        </a>
      ),
    },
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap');

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .about-page-enter {
          animation: fadeSlideUp 0.6s ease forwards;
        }
        .about-page-enter-delay {
          opacity: 0;
          animation: fadeSlideUp 0.6s ease forwards;
          animation-delay: 0.15s;
        }
        .about-page-enter-delay-2 {
          opacity: 0;
          animation: fadeSlideUp 0.6s ease forwards;
          animation-delay: 0.3s;
        }

        .about-page-title {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
        }

        .about-profile-card {
          background: #fff;
          border-radius: 24px;
          padding: 36px;
          box-shadow: 0 2px 24px rgba(0,0,0,0.07);
          border: 1px solid rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: sticky;
          top: 100px;
        }

        .about-profile-image {
          position: relative;
          width: 160px;
          height: 160px;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: 0 0 0 4px #fff, 0 0 0 6px rgba(255,107,53,0.3);
          margin-bottom: 20px;
          flex-shrink: 0;
        }

        .about-profile-name {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.3rem;
          color: #1a1a1a;
          margin-bottom: 4px;
        }
        .about-profile-role {
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #FF6B35;
          margin-bottom: 20px;
        }

        .about-profile-divider {
          width: 40px;
          height: 2px;
          background: linear-gradient(90deg, #FF6B35, transparent);
          margin: 0 auto 20px;
          border-radius: 2px;
        }

        .about-contact-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #FF6B35;
          color: #fff;
          font-weight: 700;
          font-size: 0.875rem;
          padding: 10px 22px;
          border-radius: 100px;
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 4px 14px rgba(255,107,53,0.3);
          margin-top: 8px;
        }
        .about-contact-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(255,107,53,0.4);
          color: #fff;
          text-decoration: none;
        }

        .about-content-card {
          background: #fff;
          border-radius: 24px;
          padding: 40px;
          box-shadow: 0 2px 24px rgba(0,0,0,0.07);
          border: 1px solid rgba(0,0,0,0.05);
        }

        .about-heading-1 {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 2rem;
          color: #FF6B35;
          margin-bottom: 16px;
          margin-top: 0;
        }
        .about-heading-2 {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 1.4rem;
          color: #1a1a1a;
          margin-bottom: 12px;
          margin-top: 32px;
          padding-bottom: 10px;
          border-bottom: 2px solid rgba(255,107,53,0.2);
        }
        .about-heading-3 {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 1.1rem;
          color: #1a1a1a;
          margin-bottom: 8px;
          margin-top: 20px;
        }
        .about-ul {
          list-style: none;
          padding: 0;
          margin-bottom: 20px;
        }
        .about-li {
          position: relative;
          padding-left: 20px;
          margin-bottom: 8px;
          color: #555;
          break-words: break-all;
        }
        .about-li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 10px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #FF6B35;
        }

        .about-section-label {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,107,53,0.7);
          margin-bottom: 8px;
          display: block;
        }
      `}</style>

      <main className="flex-grow container mx-auto px-4 py-12 max-w-5xl">

        {/* Page header */}
        <div className="about-page-enter mb-10 text-center">
          <span className="about-section-label">Portfolio</span>
          <h1 className="about-page-title text-4xl sm:text-5xl text-gray-900">
            {aboutMe.title || 'About Me'}
          </h1>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* Left: sticky profile card */}
          <div className="w-full lg:w-72 flex-shrink-0 about-page-enter-delay">
            <div className="about-profile-card">
              {aboutMe.image?.fields?.file && (
                <div className="about-profile-image">
                  <Image
                    src={`https:${aboutMe.image.fields.file.url}`}
                    alt={aboutMe.image.fields.title || 'Profile Picture'}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="160px"
                    priority
                  />
                </div>
              )}

              <p className="about-profile-name">David Arvidsson</p>
              <p className="about-profile-role">Frontend Developer</p>
              <div className="about-profile-divider" />

              {/* Quick info */}
              <div className="w-full text-left space-y-3 mb-6">
                {[
                  { icon: '📍', label: 'Sverige' },
                  { icon: '💼', label: 'Öppen för uppdrag' },
                  { icon: '⚡', label: 'React · Next.js · JS' },
                ].map(({ icon, label }) => (
                  <div key={label} className="flex items-center gap-3 text-sm text-gray-500">
                    <span className="text-base">{icon}</span>
                    <span>{label}</span>
                  </div>
                ))}
              </div>

              <a href="/contact" className="about-contact-btn w-full justify-center">
                Kontakta mig
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right: main content */}
          <div className="flex-grow about-page-enter-delay-2">
            <div className="about-content-card">
              {aboutMe.presentationText
                ? documentToReactComponents(aboutMe.presentationText, richTextOptions)
                : (
                  <p className="text-gray-500 italic">Ingen beskrivning tillgänglig ännu.</p>
                )
              }
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
