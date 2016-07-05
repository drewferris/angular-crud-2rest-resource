'use strict';

const angular = require('angular');
const app = angular.module('SoccerApp', []);

require('./teams')(app);
require('./services')(app);
