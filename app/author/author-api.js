angular
  .module('author')
  .factory('AuthorApi', function(AuthorData, $http){

      var AuthorApi = {
          authors: []
      };

      function AuthorApi(){
          $http
              .get('http://localhost:8080/authors')
              .then(function(response){
                  api.authors = new AuthorData(response.data);
                  });
      };

      return AuthorApi;
  });