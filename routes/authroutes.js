const passport = require('passport');


module.exports = app =>{

  // user being sent to google
  app.get('/auth/google',
    passport.authenticate('google',{
      scope: ['profile', 'email']
    })
  );

  // user being sent back from google
  app.get('/auth/google/callback', passport.authenticate('google'));
};
