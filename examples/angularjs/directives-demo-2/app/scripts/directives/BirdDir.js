app.directive('birdElement', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/birds.html',

    scope: {
      bird: '='
    }
  }
});