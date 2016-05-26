'use strict';
performanceTester.controller('LoginCtrl', function ($scope, Auth, $state) {
  $scope.loginUser = function (credentials) {
    Auth.login(credentials)
    .then(function (loggedinUser) {
      $state.go('user', {id: loggedinUser.id});
    });
  };
});
