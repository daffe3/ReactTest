import './globals.css';
import Footer from './component/Footer';
import GooeyNav from './component/GooeyNav';

export const metadata = {
  title: {
    default: 'David Arvidsson — Frontend Developer',
    template: '%s | David Arvidsson',
  },
  description:
    'Portfolio of David Arvidsson — recently graduated frontend developer from ITHS Gothenburg, specializing in React, TypeScript and modern web development.',
  keywords: ['frontend', 'developer', 'React', 'TypeScript', 'Svelte', 'Next.js', 'portfolio', 'web developer', 'Gothenburg', 'David Arvidsson'],
  authors: [{ name: 'David Arvidsson' }],
  creator: 'David Arvidsson',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://david-portfolio-ruby-sigma.vercel.app',
    siteName: 'David Arvidsson',
    title: 'David Arvidsson — Frontend Developer',
    description:
      'Portfolio of David Arvidsson — recently graduated frontend developer from ITHS Gothenburg, specializing in React, TypeScript and modern web development.',
    images: [
      {
        url: '/og-image.png',
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
      'Portfolio of David Arvidsson — recently graduated frontend developer from ITHS Gothenburg, specializing in React, TypeScript and modern web development.',
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
    <html lang="en">
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
