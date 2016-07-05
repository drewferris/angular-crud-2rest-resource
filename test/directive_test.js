'use strict';

const angular = require('angular');
require('angular-mocks');
require('../app/js/client');

const dummyTemplate = require('../app/templates/teams/dummy.html');
const barcaListTemplate = require('../app/templates/teams/barca_list.html');
const playerFormTemplate = require('../app/templates/teams/player_form.html');

describe('directive tests', () => {
  let $httpBackend;
  let $scope;
  let $compile;


  beforeEach(() => {
    angular.mock.module('SoccerApp');
    angular.mock.inject(function(_$httpBackend_, $rootScope,
    _$compile_) {
      $scope = $rootScope.$new();
      $compile = _$compile_;
      $httpBackend = _$httpBackend_;
    });
  });

  it('should be a dummy', () => {
    $httpBackend.expectGET('./templates/teams/dummy.html')
      .respond(200, dummyTemplate);
    $scope.test = 'test data';
    let link = $compile('<dummy data="test"></dummy>');
    let directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();

    let h3 = directive.find('h3');
    let text = h3.text();

    expect(text).toBe('test data');
  });

  it('should list barcas', () => {
    $httpBackend.expectGET('./templates/teams/barca_list.html')
      .respond(200, barcaListTemplate);
    $httpBackend.expectGET('./templates/teams/player_form.html')
      .respond(200, playerFormTemplate);
    $scope.barcas = [{
      name: 'Test Messi',
      position: 'Test Forward',
      number: 10,
      goals: 22
    }, {
      name: 'Test Neymar',
      position: 'Test Forward',
      number: 11,
      goals: 23
    }];

    let link = $compile('<main ng-controller="TeamsController as teams">    <barca-list barcas="barcas"></barca-list></main>');
    let directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();

    let li = directive.find('li');
    let liLength = li.length;

    expect(liLength).toBe(2);
  });

  it('should form', () => {
    $httpBackend.expectGET('./templates/teams/barca_list.html')
      .respond(200, barcaListTemplate);
    $httpBackend.expectGET('./templates/teams/player_form.html')
      .respond(200, playerFormTemplate);
    $scope.barcas = [{
      name: 'Test Messi',
      position: 'Test Forward',
      number: 10,
      goals: 22
    }, {
      name: 'Test Neymar',
      position: 'Test Forward',
      number: 11,
      goals: 23
    }];
  });

});
