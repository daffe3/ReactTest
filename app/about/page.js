import client from '../lib/contentful';
import AboutContent from '../component/AboutContent';

export const metadata = {
  title: 'About Me',
  description: 'Lär känna David Arvidsson — nyutexaminerad frontend-utvecklare från ITHS Göteborg, specialiserad på React, TypeScript och modern webbutveckling.',
};

export default async function About() {
  const res = await client.getEntries({ content_type: 'aboutMe' });
  const aboutMe = res.items[0]?.fields;

  if (!aboutMe) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-bg-light text-text-dark">
        <h1 className="text-4xl font-bold text-primary-orange">About Me Content Not Found</h1>
        <p className="mt-4 text-lg">Please ensure your "About Me" content is published in Contentful.</p>
      </main>
    );
  }

  return <AboutContent aboutMe={aboutMe} />;
}
