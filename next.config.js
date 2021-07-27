module.exports = {
  reactStrictMode: true,
  target: 'serverless',
  // exportPathMap: 'out',
  async redirects() {
    return [
      {
        source: '/question',
        destination: '/',
        permanent: true,
      },
      {
        source: '/_error',
        destination: '/',
        permanent: true,
      },
    ]
  },
  eslint: {
    dirs: ['pages', 'utils', 'components'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
}
// module.exports = {
//   target: 'serverless',
//   async redirects() {
//     return [
//       {
//         source: '/question',
//         destination: '/',
//         permanent: true,
//       },
//       {
//         source: '/_error',
//         destination: '/',
//         permanent: true,
//       },
//     ]
//   }
// }
