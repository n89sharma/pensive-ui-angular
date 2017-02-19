'use strict';

// Declare app level module which depends on views, and components
angular.module('pensive', [
  'ngRoute',
  'ngResource',
  'author'
]).
config(function($locationProvider, $routeProvider, $resourceProvider) {
//  $locationProvider.hashPrefix('!');
$locationProvider.html5Mode(true)
$resourceProvider.defaults.stripTrailingSlashes = true;
//  $routeProvider.otherwise({redirectTo: '/author'});
});