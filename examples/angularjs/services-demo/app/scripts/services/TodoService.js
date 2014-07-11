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

app.factory('AuthenticationService', ['$location', '$rootScope', function($location, $rootScope){
	return {
		login: function(creds) {
			if (creds.username == 'admin' && creds.password == '1234') {
				$location.path('/todo');
				$rootScope.isLoggedIn = true;
			} else {
				alert('Not valid login credentials');
			}
		},
		logout: function() {
			$rootScope.$apply(function(){
				$rootScope.isLoggedIn = false;
			});
			
			$location.path('/');
		}
	}
}]);


