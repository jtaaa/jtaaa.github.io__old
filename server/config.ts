export default {
  DB_URI: process.env.DB_URI,
  DB_USER: process.env.DB_USER,
  DB_PASS: process.env.DB_PASS,
  GOOGLE_OAUTH_CLIENT_ID: process.env.GOOGLE_OAUTH_CLIENT_ID,
  GOOGLE_OAUTH_CLIENT_SECRET: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
  EXPRESS_SESH_SECRET: process.env.EXPRESS_SESH_SECRET,
  HOMEPAGE_URL: process.env.NODE_ENV !== 'production' ? 'http://localhost:3000/' : '/',
};
