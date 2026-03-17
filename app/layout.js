import './globals.css';
import Footer from './component/Footer';
import GooeyNav from './component/GooeyNav';

export const metadata = {
  title: {
    default: 'David Arvidsson — Frontend Developer',
    template: '%s | David Arvidsson',
  },
  description:
    'Portfolio för David Arvidsson — frontend-utvecklare med fokus på moderna webbupplevelser, React och Next.js.',
  keywords: ['frontend', 'developer', 'React', 'Next.js', 'portfolio', 'web', 'David Arvidsson'],
  authors: [{ name: 'David Arvidsson' }],
  creator: 'David Arvidsson',
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    url: 'https://david-portfolio-ruby-sigma.vercel.app', 
    siteName: 'David Arvidsson',
    title: 'David Arvidsson — Frontend Developer',
    description:
      'Portfolio för David Arvidsson — frontend-utvecklare med fokus på moderna webbupplevelser, React och Next.js.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'David Arvidsson — Frontend Developer',
    description:
      'Portfolio för David Arvidsson — frontend-utvecklare med fokus på moderna webbupplevelser, React och Next.js.',
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
      <body className="flex flex-col min-h-screen">
        <GooeyNav links={navLinks} />
        <div className="flex-grow relative">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
