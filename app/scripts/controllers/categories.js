'use strict';

angular.module('referenceMeApp')
  .controller('CategoriesCtrl', function ($scope, $rootScope, $routeParams) {
    $scope.selectedTag = $rootScope.selectedTag;

    $scope.selectedLinks = [];
    for (var i=0; i < hipchatLinks.length; i++) {
      if ($scope.selectedTag == hipchatLinks[i].tags) {
      	$scope.selectedLinks.push(hipchatLinks[i]);
console.log("$routeParams success?")
console.log($routeParams.selectedTagInURL);
$scope.selectedTagThroughRoutes = $routeParams.selectedTagInURL;

      }
    }
  });
