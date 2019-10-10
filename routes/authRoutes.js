const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      //google is the argument in passport
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    //request contain code from google after user grant permission
    //passport send the code back to google to get profile detail
    //auth flow finish, passport call callback
    passport.authenticate('google'),
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
