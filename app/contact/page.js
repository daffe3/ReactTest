import client from '../lib/contentful'; 
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'; 
import { BLOCKS, INLINES } from '@contentful/rich-text-types'; 

export default async function Contact() { 
  const res = await client.getEntries({
    content_type: 'contact', 
  });

  const contactPage = res.items[0]?.fields;

  if (!contactPage) {
    return (
      <main className="flex-grow container mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-bold text-primary-orange">Contact Information Not Found</h1>
        <p className="mt-4 text-lg">Please ensure your contact page content is published in Contentful.</p>
      </main>
    );
  }

  console.log('--- Debugging contactPage.info ---');
  console.log('Type of contactPage.info:', typeof contactPage.info);
  console.log('Content of contactPage.info:', JSON.stringify(contactPage.info, null, 2));
  console.log('--- End Debugging contactPage.info ---');

  const richTextOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-4">{children}</p>,
      [BLOCKS.HEADING_1]: (node, children) => <h1 className="text-4xl font-bold mb-4 text-primary-orange">{children}</h1>,
      [BLOCKS.HEADING_2]: (node, children) => <h2 className="text-3xl font-bold mb-3 mt-6 text-text-dark">{children}</h2>,
      [BLOCKS.HEADING_3]: (node, children) => <h3 className="text-2xl font-bold mb-2 mt-4 text-primary-orange">{children}</h3>, 
      [BLOCKS.UL_LIST]: (node, children) => <ul className="list-disc list-inside mb-4 pl-4">{children}</ul>,
      [BLOCKS.OL_LIST]: (node, children) => <ol className="list-decimal list-inside mb-4 pl-4">{children}</ol>,
      [BLOCKS.LIST_ITEM]: (node, children) => <li className="mb-1">{children}</li>,
      [INLINES.HYPERLINK]: (node, children) => (
        <a href={node.data.uri} target="_blank" rel="noopener noreferrer" className="text-primary-orange hover:underline">
          {children}
        </a>
      ),
    },
  };

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <h1 className="text-center mb-8 text-4xl font-bold text-text-dark">{contactPage.title || 'Get in Touch'}</h1>

      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md text-lg text-center prose max-w-none">

        {contactPage.info && typeof contactPage.info === 'object' && contactPage.info !== null && ( 
          <div className="mb-6 text-gray-700"> 
            {documentToReactComponents(contactPage.info, richTextOptions)}
          </div>
        )}

        {contactPage.image && contactPage.image.fields && contactPage.image.fields.file && (
          <div className="mb-8 flex justify-center"> 
            <Image
              src={`https:${contactPage.image.fields.file.url}`} 
              alt={contactPage.image.fields.title || "Contact Image"}
              width={150} 
              height={150}
              className="rounded-full shadow-md object-cover"
            />
          </div>
        )}

        <ul className="list-none p-0 my-6 space-y-4"> 
          {contactPage.email && (
            <li className="text-text-dark flex flex-col sm:flex-row items-center sm:justify-center">
              <div className="flex items-center mb-1 sm:mb-0"> 
                <i className="fas fa-envelope text-primary-orange text-xl mr-3"></i> 
                <span className="font-semibold">Email:</span>{' '}
              </div>
              <a href={`mailto:${contactPage.email}`} className="text-accent-link hover:underline sm:ml-2"> 
                {contactPage.email}
              </a>
            </li>
          )}
          {contactPage.link && ( 
            <li className="text-text-dark flex flex-col sm:flex-row items-center sm:justify-center"> 
              <div className="flex items-center mb-1 sm:mb-0"> 
                <i className="fab fa-linkedin text-primary-orange text-xl mr-3"></i> 
                <span className="font-semibold">LinkedIn:</span>{' '}
              </div>
              <a href={contactPage.link} target="_blank" rel="noopener noreferrer" className="text-accent-link hover:underline sm:ml-2"> 
                Connect on LinkedIn 
              </a>
            </li>
          )}
          {contactPage.github && ( 
            <li className="text-text-dark flex flex-col sm:flex-row items-center sm:justify-center"> 
              <div className="flex items-center mb-1 sm:mb-0"> 
                <i className="fab fa-github text-primary-orange text-xl mr-3"></i> 
                <span className="font-semibold">GitHub:</span>{' '}
              </div>
              <a href={contactPage.github} target="_blank" rel="noopener noreferrer" className="text-accent-link hover:underline sm:ml-2"> 
                View GitHub Profile 
              </a>
            </li>
          )}
          {contactPage.number && (
            <li className="text-text-dark flex flex-col sm:flex-row items-center sm:justify-center"> 
              <div className="flex items-center mb-1 sm:mb-0"> 
                <i className="fas fa-phone text-primary-orange text-xl mr-3"></i> 
                <span className="font-semibold">Phone:</span>{' '}
              </div>
              <a href={`tel:${contactPage.number}`} className="text-accent-link hover:underline sm:ml-2"> 
                {contactPage.number}
              </a>
            </li>
          )}
        </ul>
      </div>
    </main>
  );
}
