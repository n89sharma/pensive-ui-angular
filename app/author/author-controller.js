'use strict';

angular
    .module('myApp.author', ['ngRoute'])
    .controller('authorCtrl', AuthorController);

function AuthorController(authorApi){

    this.data = authorApi.getAuthor();
    this.data = {
        hello:"a"
    };
    return this;
}