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
  let barcactrl;


  beforeEach(() => {
    angular.mock.module('SoccerApp');
    angular.mock.inject(function(_$httpBackend_, $rootScope,
    _$compile_, $controller) {
      barcactrl = new $controller('TeamsController');
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

  it('barca list directive has barcas property that works', () => {
    // $httpBackend.expectGET('http://localhost:6969/barca')
    //   .respond(200, {data:[]});
    //
    // barcactrl.getBarcas();
    // // $httpBackend.flush();

    $httpBackend.expectGET('./templates/teams/barca_list.html')
      .respond(200, barcaListTemplate);
    $scope.test = 'test player';
    let link = $compile('<barca-list barca="test.name"></barca-list>');
    let directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();

    // directive.isolateScope().type = 'edit';
    //
    //
    // $scope.$digest();
    // $httpBackend.flush();

    console.log(directive);
  });

});
