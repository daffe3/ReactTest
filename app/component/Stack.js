"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Stack({ items = [], className = "" }) {
  if (!items.length) return null;

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .project-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 22px;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        .project-card {
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
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.1);
          border-color: rgba(255,107,107,0.2);
          text-decoration: none;
          color: inherit;
        }

        /* Coral top accent line slides in on hover */
        .project-card::before {
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
        .project-card:hover::before { transform: scaleX(1); }

        .project-card-img {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          background: #f5f5f5;
        }
        .project-card-img img {
          transition: transform 0.4s ease !important;
        }
        .project-card:hover .project-card-img img {
          transform: scale(1.05) !important;
        }

        .project-card-body {
          padding: 18px 20px 20px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .project-card-title {
          font-weight: 700;
          font-size: 1rem;
          color: #333333;
          margin-bottom: 7px;
          line-height: 1.25;
        }
        .project-card-desc {
          font-size: 0.85rem;
          color: #777;
          line-height: 1.6;
          flex-grow: 1;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          margin-bottom: 14px;
        }
        .project-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 12px;
          border-top: 1px solid #f0f0f0;
        }
        .project-card-cta {
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
        .project-card:hover .project-card-cta { gap: 9px; }

        .project-card-num {
          font-size: 0.72rem;
          font-weight: 700;
          color: #ddd;
          letter-spacing: 0.04em;
        }

        .project-placeholder {
          width: 100%;
          aspect-ratio: 16 / 9;
          background: linear-gradient(135deg, #fafafa 0%, #f0f0f0 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>

      <div className={`project-grid ${className}`}>
        {items.map((item, index) => (
          <Link key={item.id} href={item.link} className="project-card">
            {item.image ? (
              <div className="project-card-img">
                <Image
                  src={`https:${item.image}`}
                  alt={item.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ) : (
              <div className="project-placeholder">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" opacity="0.2">
                  <rect width="36" height="36" rx="7" fill="#FF6B6B"/>
                  <path d="M7 26l8-8 5 5 4-4 8 8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="14" r="3" fill="#fff"/>
                </svg>
              </div>
            )}

            <div className="project-card-body">
              <h3 className="project-card-title">{item.title}</h3>
              {item.description && (
                <p className="project-card-desc">{item.description}</p>
              )}
              <div className="project-card-footer">
                <span className="project-card-cta">
                  View project
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M2 6.5h9M7 3l3.5 3.5L7 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="project-card-num">{String(index + 1).padStart(2, '0')}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
