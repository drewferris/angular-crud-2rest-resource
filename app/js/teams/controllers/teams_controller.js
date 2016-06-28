// 'use strict';
//
// module.exports = function(app) {
//   app.controller('ManUnitedController', ['$http', ManUnitedController]);
//
//   function ManUnitedController($http) {
//     this.$http = $http;
//     this.manUniteds = [];
//   }
//
//   ManUnitedController.prototype.getmanUniteds = function() {
//     this.$http.get('http://localhost:6969/manUnited')
//     .then((res) => {
//       this.manUniteds = res.data;
//     }, (err) => {
//       console.log(err);
//     });
//   };
//
//   ManUnitedController.prototype.addmanUnited = function() {
//     this.$http.post('http://localhost:6969/manUnited', this.manUnited)
//     .then((res) => {
//       this.manUniteds.push(res.data);
//       this.manUnited = null;
//     }, (err) => {
//       console.log(err);
//     });
//   };
//
//   ManUnitedController.prototype.deletemanUnited = function(manUnited) {
//     this.$http.delete('http://localhost:6969/manUnited/' + manUnited._id)
//     .then(() => {
//       let index = this.manUniteds.indexOf(manUnited);
//       this.manUniteds.splice(index, 1);
//     }, (err) => {
//       console.log(err);
//     });
//   };
//
//   ManUnitedController.prototype.updatemanUnited = function(manUnited, updatemanUnited) {
//     manUnited.name = updatemanUnited.name;
//
//     this.$http.put('http://localhost:6969/manUnited/', manUnited)
//     .then(() => {
//       this.manUniteds = this.manUniteds.map(n => {
//         return n._id === manUnited._id ? manUnited : n;
//       });
//     }, (err) => {
//       console.log(err);
//     });
//   };
// };


'use strict';

module.exports = function(app) {
  app.controller('TeamsController', ['$http', TeamsController]);

  function TeamsController($http) {
    this.$http = $http;
    this.manUniteds = [];
    this.barcas = [];
  }

  TeamsController.prototype.getmanUniteds = function() {
    this.$http.get('http://localhost:6969/manUnited')
    .then((res) => {
      this.manUniteds = res.data;
    }, (err) => {
      console.log(err);
    });
  };

  TeamsController.prototype.addmanUnited = function() {
    this.$http.post('http://localhost:6969/manUnited', this.manUnited)
    .then((res) => {
      this.manUniteds.push(res.data);
      this.manUnited = null;
    }, (err) => {
      console.log(err);
    });
  };

  TeamsController.prototype.deletemanUnited = function(manUnited) {
    this.$http.delete('http://localhost:6969/manUnited/' + manUnited._id)
    .then(() => {
      let index = this.manUniteds.indexOf(manUnited);
      this.manUniteds.splice(index, 1);
    }, (err) => {
      console.log(err);
    });
  };

  TeamsController.prototype.updatemanUnited = function(manUnited, updatemanUnited) {
    manUnited.name = updatemanUnited.name;

    this.$http.put('http://localhost:6969/manUnited/', manUnited)
    .then(() => {
      this.manUniteds = this.manUniteds.map(n => {
        return n._id === manUnited._id ? manUnited : n;
      });
    }, (err) => {
      console.log(err);
    });
  };

  TeamsController.prototype.getTeams = function() {
    this.getBarcas();
    this.getmanUniteds();
  };

  TeamsController.prototype.getBarcas = function() {
    this.$http.get('http://localhost:6969/barca')
    .then((res) => {
      this.barcas = res.data;
    }, (err) => {
      console.log(err);
    });
  };

  TeamsController.prototype.addBarca = function() {
    this.$http.post('http://localhost:6969/barca', this.barca)
    .then((res) => {
      this.barcas.push(res.data);
      this.barca = null;
    }, (err) => {
      console.log(err);
    });
  };

  TeamsController.prototype.deleteBarca = function(barca) {
    this.$http.delete('http://localhost:6969/barca/' + barca._id)
    .then(() => {
      let index = this.barcas.indexOf(barca);
      this.barcas.splice(index, 1);
    }, (err) => {
      console.log(err);
    });
  };

  TeamsController.prototype.updateBarca = function(barca, updatebarca) {
    barca.name = updatebarca.name;

    this.$http.put('http://localhost:6969/barca/', barca)
    .then(() => {
      this.barcas = this.barcas.map(n => {
        return n._id === barca._id ? barca : n;
      });
    }, (err) => {
      console.log(err);
    });
  };

};
