/**
 *  Public array routes: these routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = ['/', '/new-verification'];

/**
 *  Authenteicacion array routes: these routes will redirect loogged in users to /settings
 * @type {string[]}
 */
export const authRoutes = [
  '/login',
  '/register',
  '/error',
  '/reset',
  '/new-password',
];

/**
 *  The prefix for API authentication routes: that start this prefix are used for Api authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = '/api/auth';

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = '/dashboard';
