'use strict';

// Declare app level module which depends on views, and components
function MainCtrl($scope) {
    $scope.info = 'info';
}
angular.module('app', []).controller('MainCtrl', MainCtrl);