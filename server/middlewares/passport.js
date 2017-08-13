const passport = require('passport');
const local = require('./local');
const userDml = require('../database/models/user');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const result = await userDml.getUserById({
    cond: {
      id,
    },
  });

  done(result);
});

passport.use(local);

/**
 * Login Required middleware.
 */
const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.redirect('/login');
};

/**
 * Authorization Required middleware.
 */
const isAuthorized = (req, res, next) => {
  const provider = req.path.split('/').slice(-1)[0];
  const token = req.cookies['id_token']; // eslint-disable-line dot-notation
  if (token) {
    next();
  } else {
    res.redirect(`/auth/${provider}`);
  }
};

module.exports = {
  isAuthenticated,
  isAuthorized,
};
