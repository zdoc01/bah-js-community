var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider) {
  $routeProvider
      .when('/', {
        templateUrl: 'views/todo.html',
        controller: 'TodoCtrl'
      })
      .when('/history', {
        templateUrl: 'views/history.html',
        controller: 'TodoHistoryCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
});
