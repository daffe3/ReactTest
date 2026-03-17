"use client";

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

export default function ProjectDetail({ project }) {
  const router = useRouter();

  if (!project) {
    return (
      <main className="flex-grow container mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-bold text-primary-orange">Project Data Missing</h1>
        <p className="mt-4 text-lg">Could not load project details.</p>
        <button onClick={() => router.back()} className="inline-block mt-6 px-6 py-3 bg-primary-orange text-white font-semibold rounded-lg hover:bg-secondary-orange transition-colors duration-200">
          Back to Projects
        </button>
      </main>
    );
  }

  const richTextOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-4 text-gray-600 leading-relaxed">{children}</p>,
      [BLOCKS.HEADING_2]: (node, children) => <h2 className="pd-h2">{children}</h2>,
      [INLINES.HYPERLINK]: (node, children) => (
        <a href={node.data.uri} target="_blank" rel="noopener noreferrer" className="text-accent-link hover:underline">{children}</a>
      ),
    },
  };

  const Buttons = ({ extra = "" }) => (
    <div className={`flex flex-col sm:flex-row gap-3 ${extra}`}>
      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="pd-btn-primary">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="inline mr-2">
            <path d="M2 7h10M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Live Demo
        </a>
      )}
      {project.link2 && (
        <a href={project.link2} target="_blank" rel="noopener noreferrer" className="pd-btn-secondary">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="inline mr-2">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
        </a>
      )}
    </div>
  );

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .pd-wrap { font-family: 'Plus Jakarta Sans', sans-serif; }

        .pd-back {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #999;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          transition: color 0.2s ease, gap 0.2s ease;
        }
        .pd-back:hover { color: #FF6B6B; gap: 10px; }

        .pd-title {
          font-weight: 800;
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          color: #333333;
          line-height: 1.1;
          text-align: center;
        }

        .pd-btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #FF6B6B;
          color: #fff;
          font-weight: 700;
          font-size: 0.875rem;
          padding: 11px 22px;
          border-radius: 10px;
          text-decoration: none;
          box-shadow: 0 4px 12px rgba(255,107,107,0.3);
          transition: background 0.2s ease, transform 0.2s ease;
          white-space: nowrap;
        }
        .pd-btn-primary:hover { background: #e05555; transform: translateY(-2px); color: #fff; text-decoration: none; }

        .pd-btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          color: #333333;
          font-weight: 700;
          font-size: 0.875rem;
          padding: 10px 22px;
          border-radius: 10px;
          border: 1.5px solid #ddd;
          text-decoration: none;
          transition: border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
          white-space: nowrap;
        }
        .pd-btn-secondary:hover { border-color: #333; color: #333; transform: translateY(-2px); text-decoration: none; }

        .pd-card {
          background: #fff;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 2px 16px rgba(0,0,0,0.06);
          border: 1px solid rgba(0,0,0,0.05);
        }

        .pd-h2 {
          font-weight: 700;
          font-size: 1.2rem;
          color: #333333;
          margin: 22px 0 10px;
        }

        .pd-tech-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: rgba(78,205,196,0.1);
          border: 1px solid rgba(78,205,196,0.25);
          color: #2a9d8f;
          font-size: 0.78rem;
          font-weight: 600;
          padding: 4px 11px;
          border-radius: 100px;
        }
        .pd-tech-badge::before {
          content: '';
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #4ECDC4;
          flex-shrink: 0;
        }

        .pd-gallery-item {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(0,0,0,0.07);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .pd-gallery-item:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,0,0,0.1); }

        .pd-section-label {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #ccc;
        }
      `}</style>

      <main className="pd-wrap flex-grow container mx-auto px-4 py-8 max-w-6xl">

        <button onClick={() => router.back()} className="pd-back mb-7">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to projects
        </button>

        <h1 className="pd-title mb-9">{project.titel}</h1>

        <div className="flex flex-col lg:flex-row lg:gap-8 mb-8 items-start">

          {/* Left */}
          <div className="w-full lg:w-2/5 flex flex-col gap-4">
            {project.image?.fields?.file && (
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={`https:${project.image.fields.file.url}`}
                  alt={`${project.titel} screenshot`}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
            )}
            <Buttons extra="hidden lg:flex" />
          </div>

          {/* Right */}
          <div className="w-full lg:w-3/5 mt-6 lg:mt-0 flex flex-col gap-4">
            {project.ShortDescription && (
              <div className="pd-card flex-grow">
                {documentToReactComponents(project.ShortDescription, richTextOptions)}
              </div>
            )}
            {project.technologiesUsed?.length > 0 && (
              <div className="pd-card">
                <p className="pd-section-label mb-3">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologiesUsed.map((tech) => (
                    <span key={tech} className="pd-tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <Buttons extra="flex lg:hidden mb-8" />

        {project.images?.length > 0 && (
          <>
            <div className="flex items-center gap-4 mb-5 mt-4">
              <p className="pd-section-label">Gallery</p>
              <div className="flex-grow h-px bg-gray-100" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.images.map((image, i) => (
                <div key={i} className="pd-gallery-item relative w-full aspect-video bg-gray-50">
                  <Image
                    src={`https:${image.fields.file.url}`}
                    alt={`${project.titel} screenshot ${i + 1}`}
                    fill
                    style={{ objectFit: 'contain' }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </>
  );
}
