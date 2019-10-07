const passport = require('passport'); //original npm module

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'), //use google strategy
    (req, res) => {
      res.redirect('/surveys');
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout(); //function attached by passport//对该路由的get请求进行响应
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};

// app.get('/', (req, res) => {
//   res.send({bye: 'buddy'});
// });
//route handlers
