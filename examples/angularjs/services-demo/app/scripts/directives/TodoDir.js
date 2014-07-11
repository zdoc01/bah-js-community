app.directive('editstart', function() {
  return {
    restrict: 'A',

    link: function(scope, element, attrs) {
      element.bind('click', function() {
        scope.$apply(attrs.editstart);
      });
    }
  }
});

app.directive('editdone', function(TodoService) {
  return {
    restrict: 'A',

    link: function(scope, element, attrs) {
      element.bind('submit', function() {
        var index = element.attr('data-index'),
            editedValue = element.children()[0].value;

        TodoService.editTodo(index, editedValue);
        scope.$apply(attrs.editdone);
      });
    }
  }
});