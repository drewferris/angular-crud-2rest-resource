'use strict';

module.exports = function(app) {
  app.controller('SigninController', function($location, AuthService) {
    this.goHome = function() {
      $location.url('/');
    };

    this.signUp = function(user) {
      AuthService.signUp(user)
        .then((res) => {
          console.log(res);
          $location.path('/');
        })
        .catch((err) => {
          console.log(err);
        });
    };

    this.signIn = function(user) {
      AuthService.signIn(user)
        .then((res) => {
          console.log(res);
          $location.path('/');
        })
        .then(null, (err) => {
          console.log(err);
          $location.path('/signup');
        });
    };

    this.signOut = function() {
      AuthService.signOut()
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  });
};
