"use client"; 

import React from 'react';
import dynamic from 'next/dynamic'; 

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
          <p className="text-lg text-center lg:text-left max-w-lg">
            {homepage.presentationText}
          </p>
        </div>
      </div>
    </>
  );
}