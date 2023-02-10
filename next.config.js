module.exports = {
  images: {
    domains: ['mokubo.website', 'masahiro.me', 'secure.gravatar.com']
  },
  async redirects() {
    return [
      {
        source: '/posts',
        destination: '/pages/1',
        permanent: true
      },
      {
        source: '/',
        destination: '/pages/1',
        permanent: true
      }
    ];
  },

  async rewrites() {
    return [
      {
        source: '/pages',
        has: [{ type: 'query', key: 'page', value: '1' }],
        destination: '/pages/1'
      }
    ];
  }
};
