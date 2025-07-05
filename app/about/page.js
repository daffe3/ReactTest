import client from '../lib/contentful'; 
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'; 
import { BLOCKS, INLINES } from '@contentful/rich-text-types'; 

export default async function About() { 
  const res = await client.getEntries({
    content_type: 'aboutMe', 
  });

  const aboutMe = res.items[0]?.fields;

  if (!aboutMe) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-bg-light text-text-dark">
        <h1 className="text-4xl font-bold text-primary-orange">About Me Content Not Found</h1>
        <p className="mt-4 text-lg">Please ensure your "About Me" content is published in Contentful.</p>
      </main>
    );
  }

  console.log('--- About Me Data Received ---');
  console.log(JSON.stringify(aboutMe, null, 2)); 
  console.log('--- End About Me Data ---');

  const richTextOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-4 text-gray-700">{children}</p>,
      [BLOCKS.HEADING_1]: (node, children) => <h1 className="text-4xl font-bold mb-4 text-primary-orange">{children}</h1>,
      [BLOCKS.HEADING_2]: (node, children) => <h2 className="text-3xl font-bold mb-3 mt-6 text-text-dark border-b-2 border-primary-orange pb-2">{children}</h2>, // Segment heading
      [BLOCKS.HEADING_3]: (node, children) => <h3 className="text-2xl font-semibold mb-2 mt-4 text-text-dark">{children}</h3>,
      [BLOCKS.UL_LIST]: (node, children) => <ul className="list-disc list-inside mb-4 pl-4 text-gray-700">{children}</ul>,
      [BLOCKS.OL_LIST]: (node, children) => <ol className="list-decimal list-inside mb-4 pl-4 text-gray-700">{children}</ol>,
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

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-md mb-8 flex flex-col items-center prose max-w-none"> 
          {aboutMe.image && aboutMe.image.fields && aboutMe.image.fields.file && (
            <div className="flex flex-col items-center mb-4"> 
              <Image
                src={`https:${aboutMe.image.fields.file.url}`}
                alt={aboutMe.image.fields.title || 'Profile Picture'}
                width={180} 
                height={180}
                className="rounded-full shadow-lg object-cover mb-4"
              />
              <p className="text-xl font-semibold text-text-dark">{aboutMe.title || 'Your Name'}</p>
            </div>
          )}

          {aboutMe.presentationText && (
            <div> 
              {documentToReactComponents(aboutMe.presentationText, richTextOptions)}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}