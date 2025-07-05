"use client"; 

import React from 'react';
import dynamic from 'next/dynamic'; 
import Image from 'next/image';

const RotatingText = dynamic(() => import('./RotatingText'), { ssr: false }); 

export default function HomePageContent({ homepage, taglines }) { 
  return (
    <>
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-150px)]"> 
        <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start p-4">
          <h1 className="text-center lg:text-left mb-4 text-5xl font-extrabold text-text-dark">
            {homepage.title} <br/>
            <RotatingText words={taglines} interval={2500} className="text-primary-orange" />
          </h1>
        </div>

        <div className="lg:w-1/2 flex justify-center items-center p-4">
          {homepage.image && homepage.image.fields && homepage.image.fields.file && (
            <div className="w-full max-w-sm"> 
              <Image
                src={`https:${homepage.image.fields.file.url}`}
                alt={homepage.image.fields.title || "Homepage Image"}
                width={500} 
                height={500} 
                className="rounded-lg shadow-lg object-cover w-full h-auto"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}