'use strict';

const angular = require('angular');

require('../app/js/client.js');
require('angular-mocks');

describe('controller tests', () => {
  let manuctrl;
  let $httpBackend;

  beforeEach(() => {
    angular.mock.module('SoccerApp');
    angular.mock.inject(function($controller, _$httpBackend_) {
      manuctrl = new $controller('ManUnitedController');
      $httpBackend = _$httpBackend_;
    });
  });

  afterEach(() => {
    $httpBackend.verifyNoOutstandingRequest();
    $httpBackend.verifyNoOutstandingExpectation();
  });

  it('should have a manUniteds array', () => {
    expect(Array.isArray(manuctrl.manUniteds)).toBe(true);
  });

  it('should get a list of manUniteds', () => {
    
    $httpBackend.expectGET('http://localhost:6969/manUnited')
    .respond(200, {data: []});


    manuctrl.getmanUniteds();
    $httpBackend.flush();
    console.log(manuctrl.manUniteds);
    expect(manuctrl.manUniteds[0].name).toBe('test note');
  });
});
