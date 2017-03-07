angular.module('author', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/author', {
      templateUrl: 'author/author.html',
      controller: 'AuthorController'
    });
  }])
  .controller('AuthorController', function(AuthorModel, $http){

    var controller = {
        api: {},
        authorModel: {},
        selectedAuthor:{},
        allAuthors:{},
        getAllAuthors: getAllAuthors,
        setSelectedAuthor: setSelectedAuthor
    };

    function controller(){
        controller.authorModel = new AuthorModel();
    }

    function getAllAuthors(){
        $http
            .get('http://localhost:8080/authors')
            .then(function(response){
                buildAuthorList(response.data)
                });
    }

    function buildAuthorList(data){
        data.forEach(
            function(authorData){
                controller.allAuthors.push(controller.authorModel.mapToModel(authorData));
            });
    }

    function setSelectedAuthor (author){
        controller.selectedAuthor = angular.copy(author);
    }

    return controller;
  });