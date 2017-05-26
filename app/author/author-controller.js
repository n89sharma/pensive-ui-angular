angular
  .module('author')
  .controller('AuthorController', AuthorController);

function AuthorController(AuthorData, AuthorApi, $http){
  var vm = this;

  vm.author = null;
  AuthorApi.getAuthor('anId').then(function(data){vm.author = data;});

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