angular
    .module('author')
    .factory('AuthorApi', function(AuthorModel, $http){

        var AuthorApi = {
            authors: []
        };

        function AuthorApi(){
            $http
                .get('http://localhost:8080/authors')
                .then(function(response){
                    api.authors = new AuthorModel(response.data);
                    });
        };

        return AuthorApi;
    });