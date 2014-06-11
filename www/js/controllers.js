angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {

})

.controller('CartCtrl', function($scope, Books) {
  $scope.books = Books.all();
})

.controller('BookDetailCtrl', function($scope, $stateParams, Books) {
  $scope.book = Books.get($stateParams.bookId);
})

