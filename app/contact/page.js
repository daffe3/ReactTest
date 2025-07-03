import client from '../lib/contentful'; 
import Image from 'next/image';


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

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <h1 className="text-center mb-8 text-4xl font-bold text-text-dark">{contactPage.title || 'Get in Touch'}</h1>
 
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md text-lg text-center">
        {contactPage.info && (
          <p className="mb-6 text-gray-700"> 
            {contactPage.info}
          </p>
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
            <li className="text-text-dark flex items-center justify-center"> 
              <i className="fas fa-envelope text-primary-orange text-xl mr-3"></i> 
              <span className="font-semibold">Email:</span>{' '}
              <a href={`mailto:${contactPage.email}`} className="text-accent-link hover:underline ml-2">
                {contactPage.email}
              </a>
            </li>
          )}
          {contactPage.link && ( 
            <li className="text-text-dark flex items-center justify-center"> 
              <i className="fab fa-linkedin text-primary-orange text-xl mr-3"></i> 
              <span className="font-semibold">LinkedIn:</span>{' '}
              <a href={contactPage.link} target="_blank" rel="noopener noreferrer" className="text-accent-link hover:underline ml-2">
                {contactPage.link}
              </a>
            </li>
          )}
          {contactPage.github && ( 
            <li className="text-text-dark flex items-center justify-center"> 
              <i className="fab fa-github text-primary-orange text-xl mr-3"></i> 
              <span className="font-semibold">GitHub:</span>{' '}
              <a href={contactPage.github} target="_blank" rel="noopener noreferrer" className="text-accent-link hover:underline ml-2">
                {contactPage.github}
              </a>
            </li>
          )}
          {contactPage.number && (
            <li className="text-text-dark flex items-center justify-center"> 
              <i className="fas fa-phone text-primary-orange text-xl mr-3"></i> 
              <span className="font-semibold">Phone:</span>{' '}
              <a href={`tel:${contactPage.number}`} className="text-accent-link hover:underline ml-2">
                {contactPage.number}
              </a>
            </li>
          )}
        </ul>
      </div>
    </main>
  );
}