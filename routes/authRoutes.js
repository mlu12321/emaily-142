const passport = require('passport'); //original npm module

module.exports = (app) => {
    app.get(
        '/auth/google', 
        passport.authenticate('google', {
        scope: ['profile', 'email']
        })
    );
    
    app.get(
        '/auth/google/callback', 
        passport.authenticate('google') //use google strategy
    );

    app.get(
        '/api/logout',
        (req, res) => {
            req.logout(); //function attached by passport
            // res.send(req.user);
        }
    );

    app.get(
        '/api/current_user', 
        (req, res) => {
            res.send(req.user);
    });
};


// app.get('/', (req, res) => {
//   res.send({bye: 'buddy'});
// });  
//route handlers