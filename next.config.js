
module.exports = {
  target: 'serverless',
  async redirects () {
    return [
      {
        source: '/question',
        destination: '/',
        permanent: true
      },
      {
        source: '/_error',
        destination: '/',
        permanent: true
      }
    ]
  }
}
