module.exports = function(app) {
  app.factory('AuthService', function($http) {
    let token;
    const service = {};

    service.signUp = function(user) {
      return $http.post('http://localhost:6969/signup', user)
        .then((res) => {
          token = res.data.token;
          return res;
        });
    };

    service.signIn = function(user) {
      let base64Auth = btoa(user.username + ':' + user.password);
      let authString = 'Basic ' + base64Auth;

      return $http({
        url: 'http://localhost:6969/login',
        methods: 'POST',
        headers: {
          authorization: authString
        }
      }).then((res) => {
        token = res.data.token;
        return res;
      });
    };

    service.getToken = function() {
      return token;
    };

    return service;
  });
};
