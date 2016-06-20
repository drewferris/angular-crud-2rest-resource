'use strict';

module.exports = function(app) {
  app.controller('BarcaController', ['$http', BarcaController]);

  function BarcaController($http) {
    this.$http = $http;
    this.barcas = [];
  }

  BarcaController.prototype.getBarcas = function() {
    this.$http.get('http://localhost:6969/barca')
    .then((res) => {
      this.barcas = res.data;
    }, (err) => {
      console.log(err);
    });
  };

  BarcaController.prototype.addBarca = function() {
    this.$http.post('http://localhost:6969/barca', this.newbarca)
    .then((res) => {
      this.barcas.push(res.data);
      this.newbarca = null;
    }, (err) => {
      console.log(err);
    });
  };

  BarcaController.prototype.deleteBarca = function(barca) {
    this.$http.delete('http://localhost:6969/barca/' + barca._id)
    .then(() => {
      let index = this.barcas.indexOf(barca);
      this.barcas.splice(index, 1);
    }, (err) => {
      console.log(err);
    });
  };

  BarcaController.prototype.updateBarca = function(barca, updatebarca) {
    barca.name = updatebarca.name;

    this.$http.put('http://localocalhost:6969/barca/', barca)
    .then(() => {
      this.barcas = this.barcas.map(n => {
        return n._id === barca._id ? barca : n;
      });
    }, (err) => {
      console.log(err);
    });
  };
};
