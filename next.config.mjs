/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    
    remotePatterns: [ 
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
        pathname: '/**', 
      },
    ],
  },
};

console.log('--- Next.js Config Load ---');
console.log('Space ID from .env.local:', process.env.CONTENTFUL_SPACE_ID);
console.log('Access Token from .env.local:', process.env.CONTENTFUL_ACCESS_TOKEN);
console.log('---------------------------');

export default nextConfig;