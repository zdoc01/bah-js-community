app.controller('TodoCtrl', function($scope, TodoService) {
  $scope.todos = TodoService;
  $scope.newTodo = '';
  $scope.editing = false;

  $scope.addTodo = function(todo) {
    $scope.todos.pendingTodos.push(todo);
    $scope.newTodo = '';
  };

  $scope.removeTodo = function(index) {
    var todo = $scope.todos.pendingTodos.splice(index, 1)[0];
    TodoService.completedTodos.push(todo);
  };

  $scope.editStart = function() { $scope.editing = true; };
  $scope.editDone = function() { $scope.editing = false; };
});

app.controller('TodoHistoryCtrl', function($scope, TodoService) {
  $scope.todoHistory = TodoService.completedTodos;
});
