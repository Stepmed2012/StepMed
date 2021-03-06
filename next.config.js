module.exports = {
  // Prefer loading of ES Modules over CommonJS
  experimental: { esmExternals: true },
  async rewrites() {
    return [
      {
        source: '/bee.js',
        destination: 'https://cdn.splitbee.io/sb.js',
      },
      {
        source: '/_hive/:slug',
        destination: 'https://hive.splitbee.io/:slug',
      },
    ];
  },
  env: {
    INSTAGRAM_TOKEN: process.env.INSTAGRAM_TOKEN,
  },
  i18n: {
    locales: ['ru'],
    defaultLocale: 'ru',
  },
};
