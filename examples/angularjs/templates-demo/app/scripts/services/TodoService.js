app.factory('TodoService', ['$rootScope', function($rootScope) {
  return {
    pendingTodos: [],
    completedTodos: [],

    addTodo: function(todo) {
      this.pendingTodos.push(todo);
    },

    removeTodo: function(index) {
      var todo = this.pendingTodos.splice(index, 1);
      this.completedTodos.push(todo);
    },

    editTodo: function(index, todo) {
      this.pendingTodos[index] = todo;
    }
  }
}]);