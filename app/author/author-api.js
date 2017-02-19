angular
    .module('author')
    .factory('AuthorApi', function(AuthorModel, $http){

        var api = this;

        function AuthorApi(){
            getAuthor();
        };

        function setData(){

        }

        function getAuthor(){
            //new AuthorModel(response.data[0])
            $http.get('http://echo.jsontest.com/key/value/one/two').then(function(response){
                        api.authorData = response.data;
                    }, function(response){
                        api.authorData = "error";
                    });
        };

        function getBaseUrl(){
            return 'http://localhost:8080';
        }

        function getLocalUrl(){
            return '/authors/58a8c4d02dc92f06e1877f28';
        }

        return AuthorApi;

    });