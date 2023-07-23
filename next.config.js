/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'media.graphassets.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
}

// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ["media.graphassets.com"],
//   },
// };