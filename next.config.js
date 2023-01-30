module.exports = {
  images: {
    domains: ['mokubo.website', 'masahiro.me', 'secure.gravatar.com']
  },
  // todo: 動的にしたい
  async redirects() {
    return [
      {
        source: '/pagination/1',
        destination: '/pagination?page=1',
        permanent: true
      },
      {
        source: '/pagination/2',
        destination: '/pagination?page=2',
        permanent: true
      },
      {
        source: '/pagination/3',
        destination: '/pagination?page=3',
        permanent: true
      }
    ];
  },

  // todo: 動的にしたい
  async rewrites() {
    return [
      {
        source: '/pagination',
        has: [{ type: 'query', key: 'page', value: '1' }],
        destination: '/pagination/1'
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
