const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./src/i18n/routing.ts');

module.exports = withNextIntl({
  // Other Next.js config goes here
});