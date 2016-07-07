'use strict';

module.exports = function(app) {
  app.controller('TeamsController',  function($http, AuthService, GetService, $location) {
    const urlManUnited = 'http://localhost:6969/manUnited';
    const urlBarca = 'http://localhost:6969/barca';
    const http = GetService('/manUnited');
    const httpBarca = GetService('/barca');
    this.manUniteds = [];
    this.barcas = [];

    this.getmanUniteds = function() {
      http.getAll()
      .then((res) => {
        this.manUniteds = res.data;
      }, (err) => {
        console.log(err);
      });
    };

    this.addmanUnited = function(manUnited) {
      $http({
        method: 'POST',
        data: manUnited,
        headers: {
          token: AuthService.getToken()
        },
        urlManUnited
      })
      .then((res) => {
        this.manUniteds.push(res.data);
        this.manUnited = null;
      }, (err) => {
        // $location.url('/signin')
        console.log(err);
      });
    }.bind(this);

    this.deletemanUnited = function(manUnited) {
      console.log(manUnited);
      $http.delete('http://localhost:6969/manUnited/' + manUnited._id)

      .then(() => {
        let index = this.manUniteds.indexOf(manUnited);
        this.manUniteds.splice(index, 1);
      }, (err) => {
        console.log(err);
      });
    }.bind(this);

    this.updatemanUnited = function(manUnited) {
      $http.put('http://localhost:6969/manUnited/', manUnited)
      .then(() => {
        this.manUniteds = this.manUniteds.map(n => {
          return n._id === manUnited._id ? manUnited : n;
        });
      }, (err) => {
        console.log(err);
      });
    }.bind(this);

    this.getTeams = function() {
      this.getBarcas();
      this.getmanUniteds();
    };

    this.getBarcas = function() {
      httpBarca.getAll()
      .then((res) => {
        this.barcas = res.data;
      }, (err) => {
        console.log(err);
      });
    };

    this.addBarca = function(barca) {
      $http({
        method: 'POST',
        data: barca,
        headers: {
          token: AuthService.getToken()
        },
        urlBarca
      })
      .then((res) => {
        this.barcas.push(res.data);
        this.barca = null;
      }, (err) => {
        console.log(err);
      });
    }.bind(this);

    this.deleteBarca = function(barca) {
      $http.delete('http://localhost:6969/barca/' + barca._id)
      .then(() => {
        let index = this.barcas.indexOf(barca);
        this.barcas.splice(index, 1);
      }, (err) => {
        console.log(err);
      });
    }.bind(this);

    this.updateBarca = function(barca) {

      $http.put('http://localhost:6969/barca/', barca)
      .then(() => {
        this.barcas = this.barcas.map(n => {
          return n._id === barca._id ? barca : n;
        });
      }, (err) => {
        console.log(err);
      });
    }.bind(this);
  });
};
