import path from 'path';

const nextConfig = {
  i18n: {
    locales: ['en', 'af', 'xh'],
    defaultLocale: 'en',
    localePath: path.resolve('./public/locales'),
  },
};

export default nextConfig;