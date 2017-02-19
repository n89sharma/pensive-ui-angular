var angular = require('angular');
var uirouter = require('angular-ui-router');
var routing = require('./routes.js');
var ngResource = require('angular-resource');

// modules
var author = require('./author');

// resources
//var resources = require('./resources');

// services
//var services = require('./services');

// directives
//var directives = require('./directives');

angular.module('pensive', [
  uirouter, 
  ngResource,

  // modules
  author
//  posts,

  // resources
//  resources,

  // services
//  services,

  // directives
//  directives
  
]).config(routing)