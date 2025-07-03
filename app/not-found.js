"use client"; 

import GlitchText from './component/GlitchText'; 
import Link from 'next/link';

export default function NotFound() {
  return (

    <div className="min-h-screen flex flex-col items-center justify-center bg-bg-light text-text-dark px-4 py-8">
      <div className="text-center">

        <GlitchText text="404" className="mb-6 text-primary-orange" />

        <p className="mt-4 text-xl md:text-2xl leading-relaxed">
          Oops! It seems the page you&apos;re looking for has gone on an adventure.
        </p>
        <p className="mt-2 text-lg md:text-xl text-gray-700">
          Don&apos;t worry, we can get you back on track.
        </p>

        <Link
          href="/"
          className="inline-block mt-8 px-8 py-4 bg-primary-orange text-white font-semibold text-lg rounded-lg shadow-lg
                     hover:bg-secondary-orange transition-colors duration-300 transform hover:scale-105
                     focus:outline-none focus:ring-4 focus:ring-primary-orange focus:ring-opacity-50"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}
