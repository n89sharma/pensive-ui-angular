'use strict';

// Declare app level module which depends on views, and components
angular.module('pensive', [
  'ui.router',
  'ngResource',
  'ngSanitize',
  'author',
  'note',
  'content'
]).
config(function($urlMatcherFactoryProvider, $locationProvider, $urlRouterProvider, $resourceProvider) {
    $urlMatcherFactoryProvider.strictMode(false);
    $locationProvider.html5Mode(true);
});