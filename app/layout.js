import './globals.css';
import Footer from './component/Footer';
import GooeyNav from './component/GooeyNav'; 

export default function RootLayout({ children }) {
  const navLinks = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'projects', label: 'Projects', href: '/projects' },
    { id: 'about', label: 'About Me', href: '/about' },
    { id: 'contact', label: 'Contact', href: '/contact' },
  ];

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" type="image/png" />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          xintegrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0V4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" 
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="flex flex-col min-h-screen"> 
        <GooeyNav links={navLinks} />
        <div className="flex-grow relative"> 
          {children} 
        </div>

        <Footer className="relative z-10" /> 
      </body>
    </html>
  );
}
