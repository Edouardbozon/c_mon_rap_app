export function routerConfig ($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/', {
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .when('/users', {
      templateUrl: 'app/main/main.html',
      controller: 'UsersController',
      controllerAs: 'users'
    })
    .when('/matches', {
      templateUrl: 'app/main/main.html',
      controller: 'MatchesController',
      controllerAs: 'matches'
    })
    .when('/messages', {
      templateUrl: 'app/main/main.html',
      controller: 'MessageController',
      controllerAs: 'message'
    })
    .otherwise({
      redirectTo: '/'
    });
}
