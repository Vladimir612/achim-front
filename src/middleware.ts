import createMiddleware from 'next-intl/middleware';

const middleware = createMiddleware({
  // Add locales you want in the app
  locales: ['en', 'de'],

  // Default locale if no match
  defaultLocale: 'de'
});

export default middleware;

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en|de)/:page*']
};