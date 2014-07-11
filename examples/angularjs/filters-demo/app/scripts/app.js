var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider) {
  $routeProvider
	  .when('/login', {
		templateUrl: 'views/login.html',
		controller: 'AuthenticationCtrl'
	  })
      .when('/todo', {
        templateUrl: 'views/todo.html',
        controller: 'TodoCtrl'
      })
      .when('/history', {
        templateUrl: 'views/history.html',
        controller: 'TodoHistoryCtrl'
      })
      .otherwise({
        redirectTo: '/login'
      });
});



