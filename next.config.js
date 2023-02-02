module.exports = {
  images: {
    domains: ['mokubo.website', 'masahiro.me', 'secure.gravatar.com']
  },
  // todo: 動的にしたい
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

  // todo: 動的にしたい
  async rewrites() {
    return [
      {
        source: '/pages',
        has: [{ type: 'query', key: 'page', value: '1' }],
        destination: '/pages/1'
      },
      {
        source: '/pagination',
        has: [{ type: 'query', key: 'page', value: '2' }],
        destination: '/pagination/2'
      },
      {
        source: '/pagination',
        has: [{ type: 'query', key: 'page', value: '3' }],
        destination: '/pagination/3'
      }
    ];
  }
};
