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
      [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-4">{children}</p>,
      [BLOCKS.HEADING_2]: (node, children) => <h2 className="text-2xl font-semibold mb-4 mt-6">{children}</h2>,
      [INLINES.HYPERLINK]: (node, children) => (
          <a href={node.data.uri} target="_blank" rel="noopener noreferrer" className="text-primary-orange hover:underline">
              {children}
          </a>
      ),
    },
  };

  const renderButtons = (extraClasses = "") => (
    <div className={`flex flex-col sm:flex-row justify-center sm:space-x-4 w-full ${extraClasses}`}>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary-orange text-white text-lg font-semibold py-3 px-6 rounded-lg hover:bg-secondary-orange transition-colors duration-200 mt-4 text-center"
        >
          Visit Live Demo
        </a>
      )}
      {project.link2 && (
        <a
          href={project.link2}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gray-700 text-white text-lg font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-200 mt-4 sm:ml-0 text-center"
        >
          View Code on GitHub
        </a>
      )}
    </div>
  );

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <button
        onClick={() => router.back()}
        className="text-primary-orange hover:text-secondary-orange transition-colors duration-200 mb-6 flex items-center"
      >
        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        Back to Projects
      </button>

      <h1 className="text-center mb-6 text-4xl font-bold text-text-dark">{project.titel}</h1>

      <div className="flex flex-col lg:flex-row lg:space-x-8 mb-8 items-stretch">
        <div className="w-full lg:w-1/3 flex flex-col items-center h-full justify-between">
          {project.image && project.image.fields && project.image.fields.file && (
            <div className="relative w-full h-64 md:h-80 lg:h-[500px] rounded-lg overflow-hidden shadow-md mb-4 flex justify-center items-center bg-white"> 
              <Image
                src={`https:${project.image.fields.file.url}`}
                alt={`${project.titel} screenshot`}
                fill
                style={{ objectFit: 'cover' }} 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          )}
          {renderButtons("hidden lg:flex")}
        </div>

        <div className="w-full lg:w-2/3 mt-8 lg:mt-0 flex flex-col">
          {project.ShortDescription && (
            <div className="bg-white p-6 rounded-lg shadow-md prose max-w-none text-lg flex-grow"> 
              {documentToReactComponents(project.ShortDescription, richTextOptions)}
            </div>
          )}
          {project.technologiesUsed && (
              <p className="mt-6 text-gray-600 bg-white p-6 rounded-lg shadow-md"> 
                  <span className="font-semibold">Technologies:</span> {project.technologiesUsed.join(', ')}
              </p>
          )}
        </div>
      </div>

      {renderButtons("flex lg:hidden mt-4")}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-8"> 
        {project.images && project.images.map((image, index) => (
          <div key={index} className="relative w-full aspect-square rounded-lg overflow-hidden shadow-md flex items-center justify-center bg-gray-100"> 
            <Image
              src={`https:${image.fields.file.url}`}
              alt={`${project.titel} screenshot ${index + 1}`}
              fill 
              style={{ objectFit: 'contain' }} 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </main>
  );
}