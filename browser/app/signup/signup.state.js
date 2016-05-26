'use strict';

performanceTester.config(function ($stateProvider) {
  $stateProvider.state('signup', {
    url: '/signup',
    templateUrl: '/browser/app/signup/signup.html',
    controller: 'SignupCtrl'
  });
});
