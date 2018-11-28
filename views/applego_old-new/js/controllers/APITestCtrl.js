'use strict';

/**
 * @ngdoc function
 * @name applegoApp.controller:APITestController
 * @description
 * # APITestController
 * Controller of the applegoApp
 */
angular.module('applegoApp')
  .controller("APITestController", function Hello($scope, $http) {
        $http.get('http://rest-service.guides.spring.io/greeting').
            success(function(data) {
                $scope.greeting = data;
            });
  }
);

