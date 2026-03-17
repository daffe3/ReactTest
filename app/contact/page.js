import client from '../lib/contentful';
import ContactContent from '../component/ContactContent';

export const metadata = {
  title: 'Contact',
  description: 'Kontakta David Arvidsson — frontend-utvecklare i Göteborg.',
};

export default async function Contact() {
  const res = await client.getEntries({ content_type: 'contact' });
  const contactPage = res.items[0]?.fields;

  if (!contactPage) {
    return (
      <main className="flex-grow container mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-bold text-primary-orange">Contact Information Not Found</h1>
        <p className="mt-4 text-lg">Please ensure your contact page content is published in Contentful.</p>
      </main>
    );
  }

  return <ContactContent contactPage={contactPage} />;
}
