import client from './lib/contentful';

import HomePageContent from './component/HomePageContent'; 

export default async function Home() {
  const res = await client.getEntries({
    content_type: 'homepage',
  });

  const homepage = res.items[0]?.fields;

  if (!homepage) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-bg-light text-text-dark">
        <h1 className="text-4xl font-bold text-primary-orange">Homepage Content Not Found</h1>
        <p className="mt-4 text-lg">Please ensure your homepage content is published in Contentful.</p>
      </main>
    );
  }

  const taglines = homepage.taglines || ["Frontend Developer", "Web Innovator", "Problem Solver"];

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <HomePageContent homepage={homepage} taglines={taglines} />
    </main>
  );
}