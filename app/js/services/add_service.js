module.exports = function(app) {
  app.factory('AddService', ['$http', function($http) {
    const service = {};
    let baseUrl = 'http://localhost:6969';
    function HTTPService(resource) {
      this.resource = resource;
    }

    HTTPService.prototype.addPlayer = function() {
      return $http.post(baseUrl + this.resource, this.resource);
    };

    return function(resource) {
      return new HTTPService(resource);
    };
  }]);
};
