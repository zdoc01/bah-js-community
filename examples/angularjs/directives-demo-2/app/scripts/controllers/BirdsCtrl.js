app.controller('BirdsCtrl', ['$scope', function($scope) {
  $scope.harpy = {
    name: 'Harpy Eagle',
    maxWingSpan: "7 ft 4 in",
    topSpeed: "70 mph",
    maxAltitude: "~10,000 ft"
  };

  $scope.peregrine = {
    name: 'Peregrine Falcon',
    maxWingSpan: "4 ft",
    topSpeed: "240+ mph",
    maxAltitude: "~6,000 ft"
  };

  $scope.griffon = {
    name: "Ruppell's Griffon Vulture",
    maxWingSpan: "8 ft 5 in",
    topSpeed: "~25mph",
    maxAltitude: "~37,000 ft"
  }
}]);