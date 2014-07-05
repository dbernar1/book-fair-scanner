angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {

})

.controller('CartListCtrl', function($scope, $ionicListDelegate, Books) {
  $scope.delete = function(bookId) {
    Books.delete(bookId);
  }
})

.controller('ScannerCtrl', function($scope, Books) {
  $scope.scan = function() {
    cordova.plugins.barcodeScanner.scan($scope.success, $scope.failure);
  };

  $scope.success = function(result) {
    var isbn = result.text

    var queryString = "https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn;

    $.getJSON( queryString )
      .done( function( json ) {
        if (json.items) {
          Books.put(json.items[0].volumeInfo.title, isbn, json.items[0].volumeInfo.description);
          $scope.$apply();
        } else {
          alert("Book not found");
        }
      })
      .fail( function() {
        alert("Problem retrieving book info");
      });
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

