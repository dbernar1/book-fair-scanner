angular.module('starter.services', [])

.factory('Library', function() {
  return {
    get: function(sku) {

      var book;

      $.ajaxSetup({
        async: false
      });

      $.getJSON( "js/products.json", function( json ) {

        var books = json["books"];

        for(i = 0; i < books.length; i++){
          if( books[i]["sku"] == sku ){
            book = books[i];
          }
        }
      });

      $.ajaxSetup({
        async: true
      });

      return book;
    }
  }
})

.factory('Books', function() {

  var books = [
    { 
      title: "Nez Rouges Blouses Blanches", 
      isbn: "9782874491245", 
      description: "Toute hospitalisation est une épreuve potentiellement traumatisante pour les enfants et pour leurs proches. C'est pourquoi, depuis 20 ans, l'association Le Rire Médecin intègre des clowns professionnels dans les équipes médicales des services pédiatriques français. Un écrivain, Bernard Mathieu, et un photographe, Jacques Grison, se sont glissés dans les pas des clowns pendant des mois. Des enfants, des parents, des infirmières, des médecins et des clowns nous font partager au quotidien une expérience inattendue et souvent poignante. 20 rencontres authentiques et 150 photographies émouvantes nous dévoilent les multiples facettes d'une action encore très méconnue. Nez rouges, blouses blanches change notre regard sur l'enfant et l'hôpital.", 
      image_name: "nez_rouges.jpg", 
      id: 1 },
    { 
      title: "Le Dictionnaire Visuel", 
      isbn: "9782764410776", 
      description: "Cette toute nouvelle édition du Dictionnaire visuel a bénéficié d’une refonte majeure de son contenu et de sa présentation. Par rapport a la dernière édition, plus de 150 pages s’ajoutent, et le nombre d’illustrations passe de 6 000 a 8 000. Le Dictionnaire visuel compte maintenant plus de 25 000 entrées dans chaque langue, couvrant quelque 900 sujets reliés aux différents domaines de spécialité qui façonnent la société contemporaine. Depuis plus de 25 ans, avec le Dictionnaire visuel, Québec Amérique poursuit sa mission d'offrir un outil indispensable pour avoir le mot juste en toute occasion, ou encore pour apprendre une langue étrangère. Après plus de 9 millions d’exemplaires vendus dans une centaine de pays, le succès de ce dictionnaire traduit en 35 langues est impressionnant. Montrer, nommer, expliquer : voila les trois raisons d’être du Dictionnaire visuel, plus pertinentes que jamais dans un monde en constante ébullition. 25 000 entrées sont fournies dans chaque langue. 8 000 illustrations hyperréalistes illustrent les différents sujets. Un index répertorie tous les mots significatifs du dictionnaire en ordre alphabétique, pour chacune des langues de l’édition.", 
      image_name: "Visuel4_Fr_An.jpg", 
      id: 2 },
    { 
      title: "100 infos – Vitesse", 
      isbn: "9782753023345", 
      description: "Avec 100 infos à connaître sur la vitesse, les enfants entreront dans le monde fascinant du mouvement. Les jeunes lecteurs découvriront au fil des pages comment mesurer la vitesse, les inventions pour dépasser le mur du son... 100 faits numérotés, accompagnés de magnifiques illustrations et de splendides photographies, plongeront les enfants dans une aventure irrésistible de bout en bout, racontée avec humour grâce à des détails et des dessins amusants. Les jeunes esprits curieux y apprécieront les quiz et les activités permettant de faire les Jeux olympiques des vers de terre, de choisir son matériau pour augmenter la vitesse ou de faire une course sur toboggan.", 
      image_name: "piccolia-3345.jpg", 
      id: 3 },
  ];

  return {
    all: function() {
      return books;
    },
    get: function(bookId) {
      return books[bookId - 1];
    },
    put: function(title, isbn, description) {

      // Find max id 
      var max = 0;

      for ( i = 0; i < books.length; i++) {
        if (books[i]['id'] > max) {
          max = books[i]['id'];
        }
      }

      books.push({
        title: title, 
        isbn: isbn, 
        description: description,
        image_name: "placeholder.jpg", 
        id: max + 1
      });
    },
    delete: function(bookId) {

      // Find book with matching id
      for(i = 0; i < books.length; i++) {
        if (books[i]['id'] == bookId) {
          books.splice(i, 1);
        }
      }
    }
  }

});