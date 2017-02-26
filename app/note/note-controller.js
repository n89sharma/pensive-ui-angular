angular.module('note', ['ngRoute', 'ngSanitize'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/note', {
      templateUrl: 'note/note.html',
      controller: 'NoteController'
    });
  }])
  .controller('NoteController', function(AuthorModel, $http, $sanitize){
    var controller = {
        noteData: "",
        noteHtmlData: "",
        renderMarkdown: renderMarkdown
    };

    function renderMarkdown(){
        controller.noteHtmlData = marked(controller.noteData);
    }

    return controller;
  });