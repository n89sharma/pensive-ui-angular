(function(){
  angular.module('content', ['ui.router', 'ngSanitize'])
    .config(['$stateProvider', '$urlMatcherFactoryProvider', function($stateProvider, $urlMatcherFactoryProvider) {
      $urlMatcherFactoryProvider.strictMode(false);
      $stateProvider
        .state('content', {
          url: '/content/',
          templateUrl: 'content/content.html'
        });
    }]);
}());
