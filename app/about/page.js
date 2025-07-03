import client from '../lib/contentful'; 
import Image from 'next/image'; 

export default async function About() { 
  const res = await client.getEntries({
    content_type: 'aboutMe', 
  });

  const aboutMe = res.items[0]?.fields;

  if (!aboutMe) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-bg-light text-text-dark">
        <h1 className="text-4xl font-bold text-primary-orange">About Me Content Not Found</h1>
      </main>
    );
  }

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <h1 className="text-center mb-8">About Me</h1>
      <div className="max-w-3xl mx-auto text-lg">
        {aboutMe.image && aboutMe.image.fields && aboutMe.image.fields.file && (
          <div className="flex justify-center mb-8">
            <Image
              src={`https:${aboutMe.image.fields.file.url}`} 
              alt={aboutMe.image.fields.title || 'Profile Picture'} 
              width={200} 
              height={200} 
              className="rounded-full shadow-lg object-cover" 
            />
          </div>
        )}

        <p className="mb-4">{aboutMe.bio}</p>
        
      </div>
    </main>
  );
}