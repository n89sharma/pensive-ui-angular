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
        renderMarkdown: renderMarkdown,
        isHtmlVisible: false,
        showRawData: showRawData,
        showHtmlData: showHtmlData,
        handlePaste: handlePaste
    };

    function handlePaste (event){
        console.log('here');
        var clipboardData = event.clipboardData;
        angular.forEach(clipboardData.items, function(item, key){
            console.log(clipboardData.items[key].type);
            if (clipboardData.items[key]['type'].match(/image.*/)) {
                var img = clipboardData.items[key].getAsFile();
                console.log(img.size);
            }
        });
    };

    function renderMarkdown(){
        controller.noteHtmlData = marked(controller.noteData);
    }

    function showRawData(){
        controller.isHtmlVisible  = false;
    }

    function showHtmlData(){
        controller.noteHtmlData = marked(controller.noteData);
        controller.isHtmlVisible  = true;
    }

    return controller;
  });