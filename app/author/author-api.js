function AuthorApiFactory(AuthorModel, $http){

    function AuthorApi(){};

    var getAuthor = function (){
        return $http
                    .get(getBaseUrl() + getLocalUrl)
                    .then(new authorModel(response.data));
    };

    function getBaseUrl(){
        return 'http://localhost:8080';
    }

    function getLocalUrl(){
        return '/authors/58a8c4d02dc92f06e1877f28';
    }

    return AuthorApi;
}