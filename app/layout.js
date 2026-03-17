import './globals.css';
import Footer from './component/Footer';
import GooeyNav from './component/GooeyNav';

export const metadata = {
  title: {
    default: 'David Arvidsson — Frontend Developer',
    template: '%s | David Arvidsson',
  },
  description:
    'Portfolio för David Arvidsson — nyutexaminerad frontend-utvecklare från ITHS Göteborg, specialiserad på React, TypeScript och modern webbutveckling.',
  keywords: ['frontend', 'developer', 'React', 'TypeScript', 'Svelte', 'Next.js', 'portfolio', 'webbutvecklare', 'Göteborg', 'David Arvidsson'],
  authors: [{ name: 'David Arvidsson' }],
  creator: 'David Arvidsson',
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    url: 'https://davidarvidsson.se', // ← byt till din faktiska domän
    siteName: 'David Arvidsson',
    title: 'David Arvidsson — Frontend Developer',
    description:
      'Portfolio för David Arvidsson — nyutexaminerad frontend-utvecklare från ITHS Göteborg, specialiserad på React, TypeScript och modern webbutveckling.',
    images: [
      {
        url: '/og-image.png', // ← lägg till en 1200×630px bild i /public
        width: 1200,
        height: 630,
        alt: 'David Arvidsson — Frontend Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'David Arvidsson — Frontend Developer',
    description:
      'Portfolio för David Arvidsson — nyutexaminerad frontend-utvecklare från ITHS Göteborg, specialiserad på React, TypeScript och modern webbutveckling.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const navLinks = [
    { id: 'home',     label: 'Home',       href: '/' },
    { id: 'projects', label: 'Projects',   href: '/projects' },
    { id: 'about',    label: 'About Me',   href: '/about' },
    { id: 'contact',  label: 'Contact',    href: '/contact' },
  ];

  return (
    <html lang="sv">
      <head>
        <link rel="icon" href="/icon.png" type="image/png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

        {/* Preconnect for Google Fonts (used by Syne) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="flex flex-col" style={{ minHeight: '100dvh' }}>
        <GooeyNav links={navLinks} />
        <div className="flex-grow relative">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
