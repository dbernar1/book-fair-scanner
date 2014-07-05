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
    // cordova.exec($scope.success, $scope.failure,
    //   "ScanditSDK",
    //   "scan",
    //   ["4+bB9uzwEeOHZWshmH1PIWvu5htoGzlMxWvSTRbSOrI",
    //   {"beep": true,
    //    "1DScanning": true,
    //    "2dScanning": true,
    //    "code128": true}]);
  
    console.log("inside $scope.scan");

    cordova.plugins.barcodeScanner.scan(
      function (result) {
        var s = "Result: " + result.text + "<br/>" +
        "Format: " + result.format + "<br/>" +
        "Cancelled: " + result.cancelled;
        resultDiv.innerHTML = s;
      }, 
      function (error) {
        alert("Scanning failed: " + error);
      }
    );

  };

  $scope.success = function(resultArray) {

    var queryString = "https://www.googleapis.com/books/v1/volumes?q=isbn:" + resultArray[0];

    $.getJSON( queryString )
      .done( function( json ) {
        if (json.items) {
          Books.put(json.items[0].volumeInfo.title, resultArray[0], json.items[0].volumeInfo.description);
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
    alert('Failed: ' + error);
  };
})

.controller('CartCtrl', function($scope, Books) {
  $scope.books = Books.all();
})

.controller('BookDetailCtrl', function($scope, $stateParams, Books) {
  $scope.book = Books.get($stateParams.bookId);
})

