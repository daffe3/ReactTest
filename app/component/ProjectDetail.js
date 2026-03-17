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
        <button
          onClick={() => router.back()}
          className="inline-block mt-6 px-6 py-3 bg-primary-orange text-white font-semibold rounded-lg hover:bg-secondary-orange transition-colors duration-200"
        >
          Back to Projects
        </button>
      </main>
    );
  }

  const richTextOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>,
      [BLOCKS.HEADING_2]: (node, children) => <h2 className="text-2xl font-semibold mb-4 mt-6 text-gray-900">{children}</h2>,
      [INLINES.HYPERLINK]: (node, children) => (
        <a href={node.data.uri} target="_blank" rel="noopener noreferrer" className="text-primary-orange hover:underline">
          {children}
        </a>
      ),
    },
  };

  const renderButtons = (extraClasses = "") => (
    <div className={`flex flex-col sm:flex-row gap-3 w-full ${extraClasses}`}>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-btn-primary"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="inline mr-2">
            <path d="M8 1l7 7-7 7M1 8h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Live Demo
        </a>
      )}
      {project.link2 && (
        <a
          href={project.link2}
          target="_blank"
          rel="noopener noreferrer"
          className="project-btn-secondary"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="inline mr-2">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" fill="currentColor"/>
          </svg>
          GitHub
        </a>
      )}
    </div>
  );

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap');

        .project-btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #FF6B35;
          color: #fff;
          font-weight: 700;
          font-size: 0.9rem;
          padding: 12px 24px;
          border-radius: 100px;
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
          box-shadow: 0 4px 16px rgba(255,107,53,0.3);
          white-space: nowrap;
        }
        .project-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(255,107,53,0.45);
          background: #e85c2a;
          color: #fff;
          text-decoration: none;
        }
        .project-btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          color: #1a1a1a;
          font-weight: 700;
          font-size: 0.9rem;
          padding: 11px 24px;
          border-radius: 100px;
          border: 2px solid #1a1a1a;
          text-decoration: none;
          transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease;
          white-space: nowrap;
        }
        .project-btn-secondary:hover {
          background: #1a1a1a;
          color: #fff;
          transform: translateY(-2px);
          text-decoration: none;
        }

        .tech-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,107,53,0.08);
          color: #c94e1e;
          border: 1px solid rgba(255,107,53,0.2);
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          padding: 5px 12px;
          border-radius: 100px;
          transition: background 0.2s ease, border-color 0.2s ease;
        }
        .tech-badge:hover {
          background: rgba(255,107,53,0.15);
          border-color: rgba(255,107,53,0.4);
        }
        .tech-badge::before {
          content: '';
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #FF6B35;
          flex-shrink: 0;
        }

        .back-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #888;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 8px 0;
          transition: color 0.2s ease, gap 0.2s ease;
          background: none;
          border: none;
          cursor: pointer;
        }
        .back-btn:hover {
          color: #FF6B35;
          gap: 10px;
        }

        .gallery-item {
          overflow: hidden;
          border-radius: 12px;
          box-shadow: 0 2px 16px rgba(0,0,0,0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .gallery-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 32px rgba(0,0,0,0.12);
        }

        .project-title {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
        }
      `}</style>

      <main className="flex-grow container mx-auto px-4 py-8 max-w-6xl">

        {/* Back button */}
        <button onClick={() => router.back()} className="back-btn mb-8">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Tillbaka till projekt
        </button>

        {/* Title */}
        <h1 className="project-title text-4xl sm:text-5xl text-gray-900 mb-10 text-center">{project.titel}</h1>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row lg:gap-10 mb-10 items-start">

          {/* Left: image + buttons */}
          <div className="w-full lg:w-2/5 flex flex-col gap-5">
            {project.image?.fields?.file && (
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
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
            {renderButtons("hidden lg:flex")}
          </div>

          {/* Right: description + tech */}
          <div className="w-full lg:w-3/5 mt-8 lg:mt-0 flex flex-col gap-5">
            {project.ShortDescription && (
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 prose max-w-none text-base flex-grow">
                {documentToReactComponents(project.ShortDescription, richTextOptions)}
              </div>
            )}

            {/* Tech badges */}
            {project.technologiesUsed && project.technologiesUsed.length > 0 && (
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Teknologier</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologiesUsed.map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile buttons */}
        {renderButtons("flex lg:hidden mb-8")}

        {/* Gallery */}
        {project.images && project.images.length > 0 && (
          <>
            <div className="flex items-center gap-4 mb-6 mt-4">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Galleri</p>
              <div className="flex-grow h-px bg-gray-100" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {project.images.map((image, index) => (
                <div key={index} className="gallery-item relative w-full aspect-video bg-gray-50">
                  <Image
                    src={`https:${image.fields.file.url}`}
                    alt={`${project.titel} screenshot ${index + 1}`}
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
