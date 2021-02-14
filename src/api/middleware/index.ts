import express from 'express';

const auth = require('../controllers/auth').default;

export = (app: express.Application) => {
  app.use(auth.initialize());

  app.all(process.env.API_BASE + '*', (req, res, next) => {
    if (req.path.includes(process.env.API_BASE + 'login')) return next();

    return auth.authenticate((err, user, info) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        if (info.name === 'TokenExpiredError') {
          return res
            .status(401)
            .json({
              message: 'Your token has expired. Please generate a new one',
            });
        } else {
          return res.status(401).json({ message: info.message });
        }
      }
      app.set('user', user);
      return next();
    })(req, res, next);
  });
};
