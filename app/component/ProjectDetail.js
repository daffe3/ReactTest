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
      [BLOCKS.HEADING_1]: (node, children) => <h1 className="text-4xl font-extrabold mb-4 text-text-dark">{children}</h1>,
      [BLOCKS.HEADING_2]: (node, children) => <h2 className="text-3xl font-bold mb-3 mt-6 text-primary-orange">{children}</h2>,
      [BLOCKS.HEADING_3]: (node, children) => <h3 className="text-2xl font-semibold mb-2 mt-4 text-text-dark">{children}</h3>,
      [BLOCKS.HEADING_4]: (node, children) => <h4 className="text-xl font-semibold mb-2 mt-4 text-text-dark">{children}</h4>,
      [BLOCKS.HEADING_5]: (node, children) => <h5 className="text-lg font-semibold mb-2 mt-4 text-text-dark">{children}</h5>,
      [BLOCKS.UL_LIST]: (node, children) => <ul className="list-disc list-inside mb-4 pl-4">{children}</ul>,
      [BLOCKS.OL_LIST]: (node, children) => <ol className="list-decimal list-inside mb-4 pl-4">{children}</ol>,
      [BLOCKS.LIST_ITEM]: (node, children) => <li className="mb-1">{children}</li>,
      [INLINES.HYPERLINK]: (node, children) => (
        <a href={node.data.uri} target="_blank" rel="noopener noreferrer" className="text-primary-orange hover:underline">
          {children}
        </a>
      ),
    },
    renderMark: {
    },
  };

  console.log('Project image received:', project.image);
  console.log('Project ShortDescription received (corrected casing):', project.ShortDescription);

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

      <h1 className="text-left mb-6 text-4xl font-bold text-text-dark">{project.titel}</h1>
      {project.ShortDescription && (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6 prose max-w-none text-lg">
          {documentToReactComponents(project.ShortDescription, richTextOptions)}
        </div>
      )}

      {project.technologiesUsed && (
          <p className="mb-6 text-gray-600">
              <span className="font-semibold">Technologies:</span> {project.technologiesUsed.join(', ')}
          </p>
      )}

      {project.image && project.image.fields && project.image.fields.file && (
        <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-md mb-8">
          <Image
            src={`https:${project.image.fields.file.url}`}
            alt={`${project.titel} screenshot`}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary-orange text-white text-lg font-semibold py-3 px-6 rounded-lg hover:bg-secondary-orange transition-colors duration-200 mt-4"
        >
          Visit Live Demo
        </a>
      )}
      {project.link2 && (
        <a
          href={project.link2}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gray-700 text-white text-lg font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-200 ml-4 mt-4"
        >
          View Code on GitHub
        </a>
      )}
    </main>
  );
}