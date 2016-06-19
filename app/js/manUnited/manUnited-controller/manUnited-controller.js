'use strict';

module.exports = function(app) {
  app.controller('ManUnitedController', ['$http', ManUnitedController]);

  function ManUnitedController($http) {
    this.$http = $http;
    this.manUniteds = [];
  }

  ManUnitedController.prototype.getmanUniteds = function() {
    this.$http.get('http://localhost:6969/manUnited')
    .then((res) => {
      this.manUniteds = res.data;
    }, (err) => {
      console.log(err);
    });
  };

  ManUnitedController.prototype.addmanUnited = function() {
    this.$http.post('http://localhost:6969/manUnited', this.newmanUnited)
    .then((res) => {
      this.manUniteds.push(res.data);
      this.newmanUnited = null;
    }, (err) => {
      console.log(err);
    });
  };

  ManUnitedController.prototype.deletemanUnited = function(manUnited) {
    this.$http.delete('http://localhost:6969/manUnited/' + manUnited._id)
    .then(() => {
      let index = this.manUniteds.indexOf(manUnited);
      this.manUniteds.splice(index, 1);
    }, (err) => {
      console.log(err);
    });
  };

  ManUnitedController.prototype.updatemanUnited = function(manUnited, updatemanUnited) {
    manUnited.name = updatemanUnited.name;

    this.$http.put('http://localocalhost:6969/manUnited/', manUnited)
    .then(() => {
      this.manUniteds = this.manUniteds.map(n => {
        return n._id === manUnited._id ? manUnited : n;
      });
    }, (err) => {
      console.log(err);
    });
  };
};
