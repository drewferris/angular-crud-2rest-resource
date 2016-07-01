module.exports = function(app) {
  app.directive('dummy', function() {
    return {
      templateUrl: './templates/teams/dummy.html',
      scope: {
        data: '='
      },
      replace: true
    };
  });
};
