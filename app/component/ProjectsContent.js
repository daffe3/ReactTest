"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function ProjectsContent({ projects = [] }) {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .projects-wrap { font-family: 'Plus Jakarta Sans', sans-serif; }

        /* ── Header ── */
        .projects-header {
          position: relative;
          overflow: hidden;
          background: #2C3E50;
          padding: 64px 24px 72px;
          text-align: center;
        }
        .projects-header::after {
          content: '';
          position: absolute;
          bottom: -1px; left: 0; right: 0;
          height: 40px;
          background: #F7F7F7;
          clip-path: ellipse(55% 100% at 50% 100%);
        }
        /* Decorative blobs in header */
        .projects-header-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          pointer-events: none;
        }
        .projects-header-label {
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
        .projects-header-title {
          font-weight: 800;
          font-size: clamp(2rem, 5vw, 3rem);
          color: #fff;
          line-height: 1.1;
          margin-bottom: 14px;
          opacity: 0;
          animation: fadeUp 0.5s ease forwards 0.2s;
        }
        .projects-header-sub {
          font-size: 1rem;
          color: rgba(255,255,255,0.55);
          max-width: 420px;
          margin: 0 auto;
          line-height: 1.65;
          opacity: 0;
          animation: fadeUp 0.5s ease forwards 0.3s;
        }

        /* ── Grid ── */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 24px;
        }

        .pc {
          position: relative;
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(0,0,0,0.06);
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: column;
          opacity: 0;
          animation: fadeUp 0.5s ease forwards;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .pc:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 32px rgba(0,0,0,0.1);
          border-color: rgba(255,107,107,0.2);
          text-decoration: none;
          color: inherit;
        }
        .pc::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #FF6B6B, #4ECDC4);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
          z-index: 1;
        }
        .pc:hover::before { transform: scaleX(1); }

        .pc-img {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          background: #f5f5f5;
        }
        .pc-img img { transition: transform 0.4s ease !important; }
        .pc:hover .pc-img img { transform: scale(1.05) !important; }

        .pc-body {
          padding: 20px 22px 22px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .pc-title {
          font-weight: 700;
          font-size: 1.05rem;
          color: #333333;
          margin-bottom: 8px;
          line-height: 1.25;
        }
        .pc-desc {
          font-size: 0.85rem;
          color: #777;
          line-height: 1.6;
          flex-grow: 1;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          margin-bottom: 16px;
        }

        /* Tech tags */
        .pc-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 16px;
        }
        .pc-tag {
          font-size: 0.7rem;
          font-weight: 600;
          color: #2a9d8f;
          background: rgba(78,205,196,0.1);
          border: 1px solid rgba(78,205,196,0.2);
          padding: 3px 9px;
          border-radius: 100px;
        }

        .pc-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 12px;
          border-top: 1px solid #f0f0f0;
        }
        .pc-cta {
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #FF6B6B;
          display: flex;
          align-items: center;
          gap: 5px;
          transition: gap 0.2s ease;
        }
        .pc:hover .pc-cta { gap: 9px; }
        .pc-num {
          font-size: 0.72rem;
          font-weight: 700;
          color: #e0e0e0;
        }

        .pc-placeholder {
          width: 100%;
          aspect-ratio: 16 / 9;
          background: linear-gradient(135deg, #fafafa 0%, #f0f0f0 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Empty state */
        .projects-empty {
          text-align: center;
          padding: 80px 24px;
          color: #aaa;
          font-size: 1rem;
        }
      `}</style>

      <div className="projects-wrap">

        {/* Header */}
        <div className="projects-header">
          <div className="projects-header-blob" style={{ width:300, height:300, background:'rgba(255,107,107,0.12)', top:-80, right:-60 }} />
          <div className="projects-header-blob" style={{ width:200, height:200, background:'rgba(78,205,196,0.1)', bottom:-40, left:-40 }} />

          <div className="relative z-10">
            <div className="projects-header-label">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 2h3v3H2zM7 2h3v3H7zM2 7h3v3H2zM7 7h3v3H7z" fill="currentColor"/>
              </svg>
              Portfolio
            </div>
            <h1 className="projects-header-title">Mina projekt</h1>
            <p className="projects-header-sub">
              Ett urval av vad jag byggt — från API-integrationer till fullstackapplikationer.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="container mx-auto px-6 py-12 max-w-6xl">
          {projects.length === 0 ? (
            <div className="projects-empty">Inga projekt hittades.</div>
          ) : (
            <div className="projects-grid">
              {projects.map((project, index) => (
                <Link
                  key={project.id}
                  href={project.link}
                  className="pc"
                  style={{ animationDelay: `${0.05 * index}s` }}
                >
                  {project.image ? (
                    <div className="pc-img">
                      <Image
                        src={`https:${project.image}`}
                        alt={project.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  ) : (
                    <div className="pc-placeholder">
                      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" opacity="0.15">
                        <rect width="36" height="36" rx="7" fill="#FF6B6B"/>
                        <path d="M7 26l8-8 5 5 4-4 8 8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}

                  <div className="pc-body">
                    <h2 className="pc-title">{project.title}</h2>

                    {project.description && (
                      <p className="pc-desc">{project.description}</p>
                    )}

                    {project.technologies.length > 0 && (
                      <div className="pc-tags">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span key={tech} className="pc-tag">{tech}</span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="pc-tag">+{project.technologies.length - 4}</span>
                        )}
                      </div>
                    )}

                    <div className="pc-footer">
                      <span className="pc-cta">
                        Se projekt
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                          <path d="M2 6.5h9M7 3l3.5 3.5L7 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span className="pc-num">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
