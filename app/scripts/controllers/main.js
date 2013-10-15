'use strict';

angular.module('referenceMeApp')
  .controller('MainCtrl', function ($scope, $rootScope, $location) {
    $scope.hipchatLinks = hipchatLinks; //picks up the source file and $scope makes the variable work across the files
    $scope.tags = ["Javascript", "Funny", "CSS"]; //these are our tags

	$scope.clickLink = function(tag) {
		
		$location.path("/categories");
		$rootScope.selectedTag = tag;
	}    
});
