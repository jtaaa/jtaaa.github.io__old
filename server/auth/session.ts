import * as expressSession from 'express-session';
import * as connectMongoDBSession from 'connect-mongodb-session';
const MongoDBStore = connectMongoDBSession(expressSession);

import CONFIG from '../config';
import { mongoUrlScheme } from '../utils/templateLiteralTags';

const sessionStore = new MongoDBStore({
  uri: mongoUrlScheme`
    user: ${CONFIG.DB_USER}
    password: ${CONFIG.DB_PASS}
    uri: ${CONFIG.DB_URI}
  `,
  collection: 'sessions',
});

sessionStore.on('error', console.error.bind(console, 'connection error:'));

const session = () => expressSession({
  cookie: { secure: process.env.REACT_APP_ENV === 'production' },
  name: 'jallum.sesh',
  resave: false,
  saveUninitialized: false,
  secret: CONFIG.EXPRESS_SESH_SECRET,
  store: sessionStore,
});

export { session };