module.exports = function($stateProvider) {
  $stateProvider
    .state('authors', {
      parent: 'home',
      url: '/author',
      template: require('./author.html'),
      controller: 'AuthorController',
      controllerAs: 'AuthorController'
    });
}