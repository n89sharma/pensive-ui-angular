angular
  .module('author')
  .factory('AuthorApi', AuthorApiFactory);

  function AuthorApiFactory(AuthorData, PensiveCommonVariables, $http){

    function AuthorApi(){
    }

    AuthorApi.getAuthor = function (authorId) {
        var endpoint = PensiveCommonVariables.pensiveApiPath + 'authors/' + authorId;
        return $http
            .get(endpoint)
            .then(function(response){
                var authorData = new AuthorData(response.data);
                console.log(authorData);
                return authorData;
            });
    };

    return AuthorApi;
  }