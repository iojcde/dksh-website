/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname:'upload.wikimedia.org',
        port: '',
        pathname: '/**',
      }
    ],
  },
  async redirects() {
    return [
      {
        source: '/notices',
        destination: '/notices/1',
        permanent: true,
      },

      {
        source: '/gatongs',
        destination: '/gatongs/1',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
