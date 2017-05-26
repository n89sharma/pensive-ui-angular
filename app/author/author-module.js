angular
    .module('author', ['ui.router'])
    .config(['$stateProvider', '$urlMatcherFactoryProvider', function($stateProvider, $urlMatcherFactoryProvider) {
      $urlMatcherFactoryProvider.strictMode(false);
      $stateProvider
        .state('author', {
          url: '/author/',
          templateUrl: 'author/author.html'
        });
    }]);
