'use strict';

angular
    .module('myApp.author')
    .factory('authorApi', AuthorApi);

function AuthorApi(authorModel, $http){

    function AuthorApi(){};

    function getBaseUrl(){
        return 'http://localhost:8080';
    }

    function getLocalUrl(){
        return '/authors/58a8c4d02dc92f06e1877f28';
    }

    var getAuthor = function (){
        return $http
                    .get(getBaseUrl() + getLocalUrl})
                    .then(new authorModel(response.data));
    };

    return AuthorApi;
}