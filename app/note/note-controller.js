angular.module('author', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/note', {
      templateUrl: 'note/note.html',
      controller: 'NoteController'
    });
  }])
  .controller('NoteController', function(AuthorModel, $http){

    var controller = {
        selectedNote:{},
        allNotes:{},
        api: {},
        getAllNotes: getAllNotes,
        setSelectedNote: setSelectedNote
    };

    function controller(){
//        controller.api = new AuthorApi();
    }

    function getAllNotes(){
//        controller.api = new AuthorApi();
        $http
            .get('http://localhost:8080/authors')
            .then(function(response){
                controller.allNotes = new NoteModel(response.data);
                });
    }

    function setSelectedNote (note){
        controller.selectedNote = angular.copy(note);
    }

    return controller;
  });