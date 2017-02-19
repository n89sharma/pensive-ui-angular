var angular = require('angular');
var uirouter = require('angular-ui-router');
var routing = require('./routes');
var showController = require('./author-controller.js');

module.exports = angular.module('pensive.author', [uirouter])
  .config(routing)
  .factory('AuthorModel', AuthorModelFactory)
  .factory('AuthorApi', AuthorApiFactory);
  .controller("AuthorController", AuthorController)
  .name