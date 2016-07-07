'use strict';

const angular = require('angular');
const app = angular.module('SoccerApp', []);

require('./teams')(app);
require('./services')(app);

app.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: '../templates/teams/home.html',
    controller: 'TeamsController',
    controllerAs: 'teams'
  })
  .when('/signup', {
    templateUrl: '../templates/teams/signup.html',
    controller: 'SigninController',
    controllerAs: 'signinctrl'
  })
  .when('/signin', {
    templateUrl: '../templates/teams/signin.html',
    controller: 'SigninController',
    controllerAs: 'signinctrl'
  });
});
