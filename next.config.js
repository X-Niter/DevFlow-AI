const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/devflow-dashboard/' : '',
  basePath: isProd ? '/devflow-dashboard' : '',
  trailingSlash: true,
  // disable Next’s new App Router (we’re using pages/ only)
  experimental: {
    appDir: false,
  },
  exportPathMap: async (defaultMap) => ({
      '/landing': defaultMap['/landing'],
      '/admin': defaultMap['/admin'],
      '/onboarding': defaultMap['/onboarding'],
      // add any other pages here
    }),
};
