angular.module('starter.services', [])

.factory('Books', function() {

  var books = [
    { title: "Nez Rouges Blouses Blanches", isbn: "9782874491245", image_name: "nez_rouges.jpg", id: 1 },
    { title: "Le Dictionnaire Visuel", isbn: "9782764410776", image_name: "Visuel4_Fr_An.jpg", id: 2 },
    { title: "100 infos – Vitesse", isbn: "9782753023345", image_name: "piccolia-3345.jpg", id: 3 },
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