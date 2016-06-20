'use strict'

const angular = require('angular');
const soccerTeamApp = angular.module('SoccerApp', []);

require('./manUnited/manUnited')(soccerTeamApp);
require('./barca/barca')(soccerTeamApp);
