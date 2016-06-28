module.exports = function(app) {
  app.directive('teamForm', function() {
    return {
      scope: {
        type: '@',
        player: '='
      },
      templateUrl: './templates/teams/team_form.html',
      require: '^^ngController',
      link: function($scope, elem, attr, controller) {
        $scope.deletemanUnited = controller.deletemanUnited;
        $scope.deleteBarca = controller.deleteBarca;
        $scope.submit = $scope.type === 'new' ? controller.addmanUnited
        : controller.updatemanUnited;
      }
    };
  });
};
