"use client"; 

import React from 'react';
import dynamic from 'next/dynamic'; 
import Image from 'next/image'; 

const RotatingText = dynamic(() => import('./RotatingText'), { ssr: false }); 

export default function HomePageContent({ homepage, taglines }) { 
  return (
    <>

      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); } /* Moves up 8px */
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite; /* 3 seconds duration, ease-in-out timing, infinite loop */
        }
      `}</style>

      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-150px)]"> 
        <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start p-4">
          <h1 className="text-center lg:text-left mb-4 text-5xl font-extrabold text-text-dark">
            {homepage.title} <br/>
            <RotatingText words={taglines} interval={2500} className="text-primary-orange" />
          </h1>
        </div>

        <div className="lg:w-1/2 flex justify-center items-center p-4">
          {homepage.image && homepage.image.fields && homepage.image.fields.file && (
            <div className="relative w-full max-w-sm h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg animate-float"> 
              <Image
                src={`https:${homepage.image.fields.file.url}`}
                alt={homepage.image.fields.title || "Homepage Image"}
                fill 
                style={{ objectFit: 'cover' }} 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                className="rounded-lg transition-transform duration-300 hover:scale-105" 
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}