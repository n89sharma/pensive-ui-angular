angular.module('author', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/author', {
      templateUrl: 'author/author.html',
      controller: 'AuthorController'
    });
  }])
  .controller('AuthorController', function(AuthorModel, $http){

//    function AuthorController(){
//        if(this instanceof AuthorController){
//            this.api = {};
//            this.authorModel = new AuthorModel();
//            this.selectedAuthor = {};
//            this.allAuthors = {};
//            this.getAllAuthors = getAllAuthors;
//            this.setSelectedAuthor = setSelectedAuthor;
//        }
//    }

    var controller ={
        api: {},
        authorModel: new AuthorModel(),
        selectedAuthor: {},
        allAuthors: [],
        getAllAuthors : getAllAuthors,
        setSelectedAuthor : setSelectedAuthor
    };

    function getAllAuthors(){
        $http
            .get('http://localhost:8080/authors')
            .then(function(response){
                buildAuthorList(response.data)
                });
    }

    function buildAuthorList(data){
        controller.allAuthors = [];
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