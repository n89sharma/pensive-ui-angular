angular
  .module('author')
  .controller('AuthorController', AuthorController);

function AuthorController(AuthorData, $http){
  var vm = this;

  vm.getAllAuthors = function (){
      $http
          .get('http://localhost:8080/authors')
          .then(function(response){
              vm.buildAuthorList(response.data)
              });
  }

  vm.buildAuthorList = function (data){
      vm.allAuthors = [];
      data.forEach(
          function(authorData){
              vm.allAuthors.push(vm.authorData.mapToModel(authorData));
          });
  }

  vm.setSelectedAuthor = function (author){
      vm.selectedAuthor = angular.copy(author);
  }

  return vm;
}