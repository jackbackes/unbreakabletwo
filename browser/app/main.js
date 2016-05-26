'use strict';

var app = angular.module('authers',[]);


// app.config(function($logProvider){
//   $logProvider.debugEnabled(false);
// });
//
// app.config(['$compileProvider', function ($compileProvider) {
//   $compileProvider.debugInfoEnabled(false);
// }]);

// app.config(function ($urlRouterProvider, $locationProvider) {
//   $locationProvider.html5Mode(true);
//   $urlRouterProvider.otherwise('/');
//   $urlRouterProvider.when('/auth/:provider', function () {
//     window.location.reload();
//   });
// });







var performanceTester = angular.module('auther', ['ui.router']);
// app.valueOf = function(){return null};
// app.toString = function(){return null};

performanceTester.config(function($logProvider){
  $logProvider.debugEnabled(false);
});

performanceTester.config(['$compileProvider', function ($compileProvider) {
  $compileProvider.debugInfoEnabled(false);
}]);

performanceTester.config(function ($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
  $urlRouterProvider.when('/auth/:provider', function () {
    window.location.reload();
  });
});

performanceTester.run(function (Auth) {
  Auth.refreshMe();
});

console.log = function(){
  return '{you: looooooooser}'
}
console.dir = function(){
  return '{you: looooooooser}'
}
console.info = function(){
  return '{you: looooooooser}'
}
console.error = function(){
  return '{you: looooooooser}'
}
