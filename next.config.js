module.exports = {
  images: {
    domains: ['mokubo.website', 'masahiro.me', 'secure.gravatar.com']
  },
  async redirects() {
    return [
      {
        source: '/pages',
        destination: '/pages/1',
        permanent: true
      },
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
  }
};
