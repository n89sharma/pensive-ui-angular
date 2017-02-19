angular.module('author', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/author', {
      templateUrl: 'author/author.html',
      controller: 'AuthorController'
    });
  }])
  .controller('AuthorController', function(AuthorApi, $http, $scope){

    this.selectedAuthor = {};

    $scope.getAllAuthors = function(){
        $http
            .get('http://localhost:8080/authors')
            .then(function(response){
                $scope.data = response.data;
                });
    };

    this.setSelectedAuthor = function (author){
        this.selectedAuthor = angular.copy(author);
    };

  });