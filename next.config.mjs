/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    domains: [
      'img.icons8.com',
      'placehold.co',
      'cdn.myportfolio.com',
      'www.youtube.com',
      'img.youtube.com',
      'www.dropbox.com'
    ],
  },
}

export default nextConfig
