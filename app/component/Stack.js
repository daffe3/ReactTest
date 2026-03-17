"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Stack({ items = [], className = "" }) {
  const [hovered, setHovered] = useState(null);

  if (!items.length) return null;

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap');

        .project-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 24px;
        }

        .project-card {
          position: relative;
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(0,0,0,0.06);
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
                      box-shadow 0.3s ease,
                      border-color 0.3s ease;
        }
        .project-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.12);
          border-color: rgba(255,107,53,0.25);
          text-decoration: none;
          color: inherit;
        }

        .project-card-image {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          background: #f5f5f5;
        }
        .project-card-image img {
          transition: transform 0.5s ease !important;
        }
        .project-card:hover .project-card-image img {
          transform: scale(1.05) !important;
        }

        .project-card-body {
          padding: 20px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .project-card-title {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.1rem;
          color: #1a1a1a;
          margin-bottom: 8px;
          line-height: 1.2;
        }

        .project-card-desc {
          font-size: 0.875rem;
          color: #666;
          line-height: 1.55;
          flex-grow: 1;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          margin-bottom: 16px;
        }

        .project-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
          padding-top: 14px;
          border-top: 1px solid rgba(0,0,0,0.06);
        }

        .project-card-cta {
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #FF6B35;
          display: flex;
          align-items: center;
          gap: 5px;
          transition: gap 0.2s ease;
        }
        .project-card:hover .project-card-cta {
          gap: 9px;
        }

        .project-card-index {
          font-family: 'Syne', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          color: rgba(0,0,0,0.15);
          letter-spacing: 0.05em;
        }

        /* Orange top accent on hover */
        .project-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: #FF6B35;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        .project-card:hover::after {
          transform: scaleX(1);
        }

        /* Placeholder when no image */
        .project-card-placeholder {
          width: 100%;
          aspect-ratio: 16 / 9;
          background: linear-gradient(135deg, #f5f5f5 0%, #ebebeb 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>

      <div className={`project-grid ${className}`}>
        {items.map((item, index) => (
          <Link
            key={item.id}
            href={item.link}
            className="project-card"
            onMouseEnter={() => setHovered(item.id)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Image */}
            {item.image ? (
              <div className="project-card-image">
                <Image
                  src={`https:${item.image}`}
                  alt={item.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ) : (
              <div className="project-card-placeholder">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" opacity="0.2">
                  <rect width="40" height="40" rx="8" fill="#FF6B35"/>
                  <path d="M10 28l8-8 5 5 4-4 8 8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="14" cy="16" r="3" fill="#fff"/>
                </svg>
              </div>
            )}

            {/* Body */}
            <div className="project-card-body">
              <h3 className="project-card-title">{item.title}</h3>
              {item.description && (
                <p className="project-card-desc">{item.description}</p>
              )}
              <div className="project-card-footer">
                <span className="project-card-cta">
                  Se projekt
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="project-card-index">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
