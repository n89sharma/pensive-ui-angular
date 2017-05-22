'use strict';

// Declare app level module which depends on views, and components
angular.module('pensive', [
  'ngRoute',
  'ngResource',
  'ngSanitize',
  'author',
  'note',
  'content'
]).
config(function($locationProvider, $routeProvider, $resourceProvider) {
    $locationProvider.html5Mode(true)
    $routeProvider.otherwise({redirectTo: '/content'});
});