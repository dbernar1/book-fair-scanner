angular.module('starter.services', [])

.factory('Books', function() {

  var books = [
    { title: "Nez Rouges Blouses Blanches", isbn: "9782753023345", id: 1 },
    { title: "Le Dictionnaire Visuel", isbn: "9782753023345", id: 2 },
    { title: "100 infos – Vitesse", isbn: "9782753023345", id: 3 },
  ];

  return {
    all: function() {
      return books;
    },
    get: function(bookId) {
      return books[bookId - 1];
    }
  }

});