angular
    .module('note', ['ui.router', 'ngSanitize'])
    .config(['$stateProvider', '$urlMatcherFactoryProvider', function($stateProvider, $urlMatcherFactoryProvider) {
      $urlMatcherFactoryProvider.strictMode(false);
      $stateProvider
        .state('note', {
          url: '/note/',
          templateUrl: 'note/note.html'
        });
    }]);
