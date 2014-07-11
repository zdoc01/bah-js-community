app.factory('TodoHistory', function() {
  return [];
});

angular.module('app').controller('TodoCtrl', function($scope, TodoHistory) {
  $scope.todos = [];
  $scope.newTodo = '';

  $scope.addTodo = function() {
    if ($scope.newTodo) {
      $scope.todos.push($scope.newTodo);
      $scope.newTodo = '';
    }
  };

  $scope.removeTodo = function(i) {
    TodoHistory.push($scope.todos[i]);
    $scope.todos.splice(i, 1);
  }
});

angular.module('app').controller('TodoHistoryCtrl', function($scope, TodoHistory) {
  $scope.todoHistory = TodoHistory;
});
