const { AUTH_URL = 'http://localhost:3000', NEXA_URL = 'http://localhost:3001', VOYAGE_URL = 'http://localhost:3002' } = process.env;



module.exports = {
  async rewrites() {
    return [
      {
        source: '/nexa',
        destination: `${NEXA_URL}/nexa`,
      },
      {
        source: '/nexa/:path*',
        destination: `${NEXA_URL}/nexa/:path*`,
      },
      {
        source: '/voyage',
        destination: `${VOYAGE_URL}/voyage`,
      },
      {
        source: '/voyage/:path*',
        destination: `${VOYAGE_URL}/voyage/:path*`,
      },
      {
        source: '/',
        destination: `${AUTH_URL}`,
      },
      {
        source: '/:path*',
        destination: `${AUTH_URL}/:path*`,
      },
    ]
  },
}
