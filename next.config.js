const path = require("path");
const {
    NormalModuleReplacementPlugin
} = require("webpack");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental:{
    webpackBuildWorker:true
  },
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
  webpack: (
    config, {
        buildId,
        dev,
        isServer,
        defaultLoaders,
        nextRuntime,
        webpack
    }
) => {
    config.plugins = config.plugins || []
    config.plugins.push(new NormalModuleReplacementPlugin(
        /email\/render/,
        path.resolve(__dirname, "./renderEmailFix.js"),
    ))
    // Important: return the modified config
    return config
}
}

module.exports = nextConfig
