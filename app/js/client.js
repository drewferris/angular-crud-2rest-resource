'use strict';

const angular = require('angular');
const ngRoute = require('angular-route');
const app = angular.module('SoccerApp', [ngRoute]);

require('./teams')(app);
require('./services')(app);

app.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: '../templates/teams/home.html',
    controller: 'TeamsController',
    controllerAs: 'teams'
  })
  .when('/signup', {
    templateUrl: './templates/teams/sign_up.html',
    controller: 'SigninController',
    controllerAs: 'signinctrl'
  })
  .when('/signin', {
    templateUrl: './templates/teams/sign_in.html',
    controller: 'SigninController',
    controllerAs: 'signinctrl'
  })
  .when('/signout', {
    templateUrl: './templates/teams/sign_out.html',
    controller: 'SigninController',
    controllerAs: 'signinctrl'
  });
});
