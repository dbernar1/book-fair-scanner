angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {

})

.controller('CartListCtrl', function($scope, $ionicListDelegate, Books) {
  $scope.delete = function(bookId) {
    Books.delete(bookId);
  }
})

.controller('ScannerCtrl', function($scope, Books, Library) {
  $scope.scan = function() {
    cordova.plugins.barcodeScanner.scan($scope.success, $scope.failure);
  };

  $scope.success = function(result) {
    var isbn = result.text;

    var book = Library.get(isbn);

    if(book) {
      Books.put(book["title"], book["sku"], book["description"]);
      $scope.$apply();
    } else {
      alert("ISBN: " + isbn + " not found");
    }
  };

  $scope.failure = function(error) {
    alert('Scanning failed: ' + error);
  };
})

.controller('CartCtrl', function($scope, Books) {
  $scope.books = Books.all();
})

.controller('BookDetailCtrl', function($scope, $stateParams, Books) {
  $scope.book = Books.get($stateParams.bookId);
})

